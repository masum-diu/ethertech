import { useEffect, useRef, useState } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

// Convert hex to normalized RGB
const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];
const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

// Particle shaders
const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));

    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

const Particles = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  className,
}) => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ depth: false, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize, false);
    resize();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette = particleColors?.length ? particleColors : defaultColors;

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );
      colors.set(
        hexToRgb(palette[Math.floor(Math.random() * palette.length)]),
        i * 3
      );
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;
      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover)
        container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
  ]);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`} />
  );
};

// ---------- Main Section ----------
export default function WorldwideOperations() {
  const videoData = [
    { src: "/videos/Syn.mp4", label: "Singapore" },
    { src: "/videos/Bng.mp4", label: "Bangladesh" },
    { src: "/videos/Aus.mp4", label: "Australia" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [videoData.length]);

  const currentLabel = videoData[currentIndex].label;
  const otherLabels = videoData
    .filter((_, idx) => idx !== currentIndex)
    .map((item) => item.label);

  return (
    <section className="container flex justify-center items-center w-full mt-20 bg-gray-100">
      <div className="relative w-full max-w-7xl rounded-2xl overflow-hidden py-24 bg-[#181B20] text-white px-12 z-10 flex gap-12">
        {/* Full background particles */}
        <Particles particleColors={["#ffffff"]} particleCount={250} />

        {/* Left Section */}
        <div className="relative z-10 flex-1 max-w-xl">
          <p className="text-sm font-bold uppercase tracking-wider text-white mb-2">
            We have
          </p>
          <h2 className="text-4xl font-light leading-snug mb-8">
            <span className="text-[#FCB813] font-semibold">Worldwide</span>{" "}
            <span className="text-white">operations</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Ether Technologies is a global software company operating in
            Bangladesh and Australia, empowering businesses with cutting-edge
            solutions in software development, IT consultancy, and digital
            transformation. With a diverse team of 200+ professionals, we
            deliver scalable, secure, and future-ready technologies that drive
            efficiency and growth. Trusted by clients worldwide, Ether is
            committed to innovation, quality, and long-term success. Our agile
            approach ensures faster delivery and greater adaptability to client
            needs. We focus on building intelligent systems that create real
            value and lasting impact.
          </p>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="relative z-10 flex-1 flex flex-col items-start gap-6 mt-2">
          <div className="flex items-center gap-4">
            {/* "in" text outside video box */}
            <span className="text-5xl font-light text-white min-w-[40px]">
              in
            </span>

            {/* Video box with animated text inside */}
            <div className="relative w-[480px] h-[150px] rounded-xl overflow-hidden shadow-lg">
              {videoData.map((video, index) => (
                <video
                  key={index}
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                />
              ))}

              {/* Animated Text Overlay */}
              <div className="absolute inset-0 flex items-center pl-6 z-20">
                <span
                  key={currentLabel}
                  className="text-white text-[42px] font-light animate-fadeUp"
                >
                  {currentLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Other countries below */}
          <div className="pl-[60px] flex flex-col gap-2 text-white text-[20px] font-light">
            {otherLabels.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>
        </div>

        {/* Right Section end*/}
      </div>
    </section>
  );
}

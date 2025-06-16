import { useEffect, useState } from "react";
import styles from "@/styles/slider.module.css";
import Head from "next/head";
import { FaWalking, FaSnowflake, FaTree, FaTint, FaSun } from "react-icons/fa";

const slides = [
  {
    background:
      "url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)",
    icon: <FaWalking />,
    main: "Blonkisoaz",
    sub: "Transforming lives through vision & innovation",
  },
  {
    background:
      "url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg)",
    icon: <FaSnowflake />,
    main: "Oretemauw",
    sub: "Omuke trughte a otufta",
  },
  {
    background:
      "url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg)",
    icon: <FaTree />,
    main: "Iteresuselle",
    sub: "Omuke trughte a otufta",
  },
  {
    background:
      "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)",
    icon: <FaTint />,
    main: "Idiefe",
    sub: "Omuke trughte a otufta",
  },
  {
    background:
      "url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg)",
    icon: <FaSun />,
    main: "Inatethi",
    sub: "Omuke trughte a otufta",
  },
];

export default function ExpandingSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Expanding Slider</title>
      </Head>
      <div style={{ width: "100%", maxWidth: "1500px", margin: "0 auto" }}>
        <div className={styles.options}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.option} ${
                index === current ? styles.active : ""
              }`}
              style={{ "--optionBackground": slide.background }}
              onClick={() => setCurrent(index)}
            >
              <div className={styles.shadow}></div>
              <div className={styles.label}>
                <div className={styles.icon}>{slide.icon}</div>
                <div className={styles.info}>
                  <div className={styles.main}>{slide.main}</div>
                  {index === current && (
                    <div className={styles.sub}>{slide.sub}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

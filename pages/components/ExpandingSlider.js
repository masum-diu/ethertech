import { useEffect, useState } from "react";
import styles from "@/styles/slider.module.css";
import Head from "next/head";
import {
  FaWalking,
  FaSnowflake,
  FaTree,
  FaTint,
  FaSun,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const slides = [
  {
    background: "url(/images/2148895302.jpg)",

    main: "Trans",
    sub: "Increase your company’s potential by exploring your data further and learning important things about your clients’ requirements.",
  },
  {
    background: "url(/images/2151003701.jpg)",

    main: "Fintech Reinvented.",
    sub: "Powerful, scalable financial technology for tomorrow’s world.",
  },
  {
    background: "url(/images/card-finance-img-2048x1212.jpg.jpg)",

    main: "Cybersecurity at its Core.",
    sub: "Protect your systems and users from evolving threats with cutting-edge solutions.",
  },
  {
    background: "url(/images/2151637786.jpg)",

    main: "Digital Transformation",
    sub: "Drive innovation and agility across your enterprise.",
  },
];

export default function ExpandingSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <Head>
        <title>Home | Ethertech</title>
      </Head>
      <div style={{ width: "100%", margin: "0 auto", position: "relative" }}>
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
              {index === current && (
                <>
                  <div className={styles.label}>
                    <div className={styles.icon}>{slide.icon}</div>
                    <div className={styles.info}>
                      <div className={styles.main}>{slide.main}</div>
                      <div className={styles.sub}>{slide.sub}</div>
                    </div>
                  </div>
                  <div className={styles.arrows}>
                    <button onClick={prevSlide} className={styles["arrow-btn"]}>
                      <FaArrowLeft />
                    </button>
                    <button onClick={nextSlide} className={styles["arrow-btn"]}>
                      <FaArrowRight />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

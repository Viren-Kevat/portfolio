import React, { useEffect, useState, useRef } from "react";
import styles from "./about.module.css";
import img from "../image/veer.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          // Add staggered animations
          contentRef.current.style.animation = `${styles.contentEnter} 0.8s ease-out forwards`;
          imageRef.current.style.animation = `${styles.imageEnter} 0.8s 0.2s ease-out forwards`;
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ""}`}
      aria-label="About Section"
    >
      <h2 className={styles.heading} data-aos="fade-up">
        About Me
      </h2>

      <div className={styles.container}>
        {/* Text Content */}
        <article
          ref={contentRef}
          className={styles.contentSection}
          aria-labelledby="about-content"
        >
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              Hello! I'm Viren, a passionate full-stack developer and UI/UX
              enthusiast dedicated to creating seamless digital experiences.
              Currently pursuing my B.E. in Information Technology at Government
              Engineering College Modasa, I blend technical expertise with
              creative problem-solving.
            </p>
            <p className={styles.text}>
              When I'm not coding, you'll find me immersed in Bollywood retro
              classics, sketching abstract designs, or exploring the cosmos
              through sci-fi literature. My diverse interests fuel my creativity
              and attention to detail in every project I undertake.
            </p>
          </div>
        </article>

        {/* Profile Image */}
        <figure
          ref={imageRef}
          className={styles.profileSection}
          aria-label="Viren's profile picture"
        >
          <div className={styles.imageContainer}>
            <img
              src={img}
              alt="Viren Kevat"
              className={styles.profileImage}
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default About;

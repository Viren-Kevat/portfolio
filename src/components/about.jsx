import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";
import img from "../image/veer.jpg";

const About = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsContentVisible(true); // Show content
          setIsImageVisible(true); // Show image
        } else {
          setIsContentVisible(false); // Hide content when out of view
          setIsImageVisible(false); // Hide image when out of view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`${styles.aboutSection} ${
        isContentVisible ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.container}>
        <div
          className={`${styles.contentSection} ${
            isContentVisible ? styles.visible : ""
          }`}
        >
          <p className={styles.text}>
            Hello! I’m Viren, a passionate web developer and designer with a
            love for creating user-friendly and aesthetically pleasing web
            applications. Currently pursuing a B.E. in Information Technology at
            Government Engineering College Modasa.
          </p>
          <p className={styles.text}>
            Beyond coding, I enjoy listening to Bollywood retro music, making
            sketches, and reading science fiction novels.
          </p>
        </div>
        <div
          className={`${styles.profileSection} ${
            isImageVisible ? styles.visible : ""
          }`}
        >
          <img
            src={img} // Replace with your actual image path
            alt="Your Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

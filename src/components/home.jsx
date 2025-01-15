import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import styles from "./home.module.css";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle navbar open/close state
  };

  return (
    <>
      <section
        id="home"
        className={`${styles.homeSection} ${
          isNavOpen ? styles.homeSectionWithNav : ""
        }`}
      >
        <div className={styles.container}>
          <h1 className={styles.heading}>Welcome to My Portfolio</h1>
          <p className={styles.text}>
            Hi, I'm Viren, a passionate developer and designer.
          </p>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Viren-Kevat"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/viren-kevat"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/_http.viren"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import { useState, useEffect } from "react";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import styles from "./home.module.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false); // For tracking visibility of the home section
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle navbar open/close state
  };

  // Function to check if the section is in view
  const handleScroll = () => {
    const section = document.getElementById("home");
    const sectionPosition = section.getBoundingClientRect().top;

    // Trigger the animation when the section comes into view
    if (sectionPosition < window.innerHeight * 0.8 && sectionPosition > 0) {
      setIsVisible(true); // Set to true when the section is in view
    } else {
      setIsVisible(false); // Set to false when the section is not in view
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <section
      id="home"
      className={`${styles.homeSection} ${
        isVisible ? styles.fadeIn : styles.fadeOut
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
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);

    // Add or remove the 'menu-open' class on the body when the menu is toggled
    if (!isMobile) {
      document.body.classList.add("menu-open"); // Push content down
    } else {
      document.body.classList.remove("menu-open"); // Return content to original position
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true); // Add background after scrolling
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    // Close the menu on mobile after clicking a link
    setIsMobile(false);
    document.body.classList.remove("menu-open"); // Close the menu and remove the body padding
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>My Portfolio</div>
      <ul className={`${styles.navLinks} ${isMobile ? styles.active : ""}`}>
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#hero" onClick={handleLinkClick}>
            Hero Section
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;

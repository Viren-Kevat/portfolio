import React, { useEffect } from "react";
import styles from "./contact.module.css";

const ContactUs = () => {
  useEffect(() => {
    const contactContainer = document.querySelector(
      `.${styles.contactContainer}`
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible); // Add the 'visible' class
          } else {
            entry.target.classList.remove(styles.visible); // Remove the 'visible' class when leaving the viewport
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    observer.observe(contactContainer);

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className={styles.inputGroup}>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button className={styles.submitButton}>Submit</button>
      </div>
    </section>
  );
};

export default ContactUs;

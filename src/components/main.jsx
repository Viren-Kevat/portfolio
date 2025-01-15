import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import styles from "./main.module.css";

// Loading spinner component
const Loader = () => <div className={styles.loader}>Loading model...</div>;

const LaptopModel = () => {
  const { scene } = useGLTF("/models/3d_clipart_-_webdev/scene.gltf");

  return (
    <Center>
      <primitive object={scene} scale={0.6} /> {/* Adjusted scale */}
    </Center>
  );
};

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Initialize AOS for animations
    AOS.init({ duration: 1000 });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.card}>
        {/* Text Section */}
        <div className={styles.textSection} data-aos="fade-right">
          <h1>I am Viren</h1>
          <p>
            I am a passionate Web Developer skilled in creating interactive,
            responsive, and user-friendly websites. With a strong foundation in
            front-end and back-end technologies, I specialize in building
            applications that prioritize performance and usability.
          </p>
          <p>
            <strong>My skills include:</strong>
          </p>
          <ul>
            <li>
              <strong>Frontend Development:</strong> Expertise in HTML, CSS,
              JavaScript, and React.js.
            </li>
            <li>
              <strong>Backend Development:</strong> Proficiency in Node.js and
              Express.js.
            </li>
            <li>
              <strong>Database Management:</strong> Skilled in working with
              MySQL and MongoDB.
            </li>
            <li>
              <strong>Responsive Design:</strong> Crafting seamless
              mobile-friendly layouts.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Enhancing application
              speed and efficiency.
            </li>
            <li>
              <strong>Version Control:</strong> Experienced with Git and GitHub
              for collaborative development.
            </li>
          </ul>
          <p>
            I’m driven to create innovative digital solutions and continuously
            learn new technologies to stay ahead in the dynamic world of web
            development.
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

        {/* 3D Model Section */}
        <div className={styles.mediaSection}>
          <Suspense fallback={<Loader />}>
            <Canvas
              style={{
                width: windowWidth <= 768 ? "120%" : "100%", // Increase width on smaller screens
                height: "70vh",
                zIndex: 20, // Ensure the Canvas stays behind other content
              }}
              camera={{ position: [6, 2, 6], fov: 60 }}
              performance={{ maxFPS: 9 }}
            >
              <ambientLight intensity={0.8} />
              <spotLight position={[10, 10, 10]} angle={0.15} />
              <LaptopModel />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;

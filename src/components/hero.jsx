import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social media icons
import styles from "./hero.module.css";

// Loader for 3D Model
const Loader = () => <div className={styles.loader}>Loading model...</div>;

// 3D Laptop Model
const LaptopModel = () => {
  const { scene } = useGLTF("/models/3d_clipart_-_webdev/scene.gltf");
  return <primitive object={scene} scale={0.7} />;
};

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Initialize AOS
    AOS.init({ duration: 1000 });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.card}>
        {/* Text Section */}
        <div className={styles.textSection} data-aos="fade-right">
          <h1>I am Viren</h1>
          <p>
            Passionate Web Developer skilled in creating interactive,
            responsive, and user-friendly websites with a strong foundation in
            front-end and back-end technologies.
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
              shadows
              dpr={[1, 1.5]} // Lower resolution for better performance
              frameloop="demand" // Render only when needed
              style={{
                width: windowWidth <= 768 ? "150%" : "100%", // Increase width for mobile screens
                height: "70vh",
                position: "absolute",
                top: windowWidth <= 768 ? "180px" : "-48px",
                left: windowWidth <= 768 ? "-100px" : "250px",
                zIndex: 1000,
              }}
              camera={{ position: [6, 2, 6], fov: 60 }}
            >
              <ambientLight intensity={0.8} />
              <spotLight position={[10, 10, 10]} angle={0.15} />
              <Center>
                <LaptopModel />
              </Center>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;

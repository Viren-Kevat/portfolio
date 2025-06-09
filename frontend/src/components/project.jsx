import React, { useEffect } from "react";
import styles from "./project.module.css"; // Import CSS module

const projectData = [
  {
    title: "Tech-Talk Studio",
    description:
      "Developed a full-stack web application for user authentication, blog/post management (create, edit, delete), and  profile handling with multi-language support. Integrated Firebase for authentication and Cloudinary for media uploads. Built with React (Vite) and Node.js (Express.js) for a modern, responsive user experience. ",
    image:
      "https://i.pinimg.com/736x/22/b5/fc/22b5fc6562c4e3bf57d8cb9d53e57cd8.jpg",
    link: "https://tech-talk-studio.vercel.app/",
  },
  {
    title: "Armanee – Full-Stack eCommerce Website ",
    description:
      "Built Armanee, a responsive eCommerce platform featuring secure user authentication, dynamic product browsing, and efficient cart management. Developed with React (Vite), Tailwind CSS, Express.js, and MongoDB for seamless, real-time user interactions. ",
    image:
      "https://i.pinimg.com/736x/b2/fb/21/b2fb21f206c56acc2007ed7e587d9770.jpg",
    link: "https://armanee-e-commerce.vercel.app/",
  },
  {
    title: "Task Management Web Application",
    description:
      "Built a full-stack task management application that enables secure task creation, real-time updates, and seamless management of personal tasks. Developed with React (Vite) and Express.js for a responsive, secure user experience.",
    image:
      "https://i.pinimg.com/736x/84/73/49/847349389bbfa0d3c5839c6c7a61731b.jpg",
    link: "https://first-full-stack-virenkumar.vercel.app/",
  },
  {
    title: "Currency_Converter",
    description:
      "This project is built using HTML, CSS, and JavaScript 🌐. It features an API integration for real-time currency conversion 💱, allowing users to easily convert between different currencies. The design is simple yet effective, providing a user-friendly experience for seamless conversions.",
    image:
      "https://i.pinimg.com/736x/cc/8b/bd/cc8bbd08ec2a588abf6cfac438c93ed9.jpg",
    link: "https://viren-kevat.github.io/Currency_Converter/",
  },
  {
    title: "CGPA_Calculator",
    description:
      "This is a CGPA Calculator app 📊 that lets users calculate their CGPA based on grades and credits 📝. It offers an intuitive interface to input data and displays results for each semester 🎓. The design is fully responsive 📱💻.",
    image:
      "https://i.pinimg.com/736x/e6/57/ed/e657edbaf5f2c6608b861f3963e502d8.jpg",
    link: "https://viren-cgpa-calculator.netlify.app/",
  },
  {
    title: "Weather_Prediction",
    description:
      "🌦️ Weather Prediction App: Predict tomorrow's weather with real-time data and a Random Forest Classifier! ☔✨ It offers accurate rain forecasts and stunning visualizations.",
    image:
      "https://i.pinimg.com/736x/03/ce/ac/03ceacbe23e9a5bb92b3d3c0698a4216.jpg",
    link: "https://weather-prediction-team-07.streamlit.app/",
  },
  {
    title: "White_Bee",
    description:
      "White Bee is an advanced drone that helps farmers with real-time crop insights 🚜🌾. It optimizes irrigation, improves crop management, and detects plant health issues for more efficient farming.",
    image:
      "https://i.pinimg.com/736x/d7/d1/25/d7d125697c5bb2ffddedc516900f4c11.jpg",
    link: "https://white-bee.netlify.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    const projectCards = document.querySelectorAll(`.${styles.projectCard}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.dataset.animation;
            entry.target.classList.remove(styles.reverseAnimation);
            entry.target.classList.add(styles[animationClass]);
          } else {
            entry.target.classList.add(styles.reverseAnimation);
            entry.target.classList.remove(
              styles[entry.target.dataset.animation]
            );
          }
        });
      },
      {
        threshold: 0.1, // Adjusted for better small screen detection
      }
    );

    projectCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectsList}>
          {projectData.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              data-animation={
                index % 2 === 0 ? "slideFromLeft" : "slideFromRight"
              }
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.projectTitle}>{project.title}</div>
              <div className={styles.projectDescription}>
                {project.description}
              </div>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

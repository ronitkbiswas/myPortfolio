import React from "react";
import lahoreImg from "../assets/images/lahoreWeather.jpg";
import ranaghatImg from "../assets/images/ranaghatWeather.jpg";
import sikkimImg from "../assets/images/sikkimWeather.jpg";
import ecommImg from "../assets/images/ecommerceApp.jpeg";
import "/src/App.css";

export default function Projects() {
  return (
    <div className="projects-container" style={styles.container}>
      {/* Reduced section header size */}
      <h3 style={styles.sectionTitle}>✨ My Projects</h3>
{/** project to be added below */}
{/** Weather App start */}
      <div className="project-card" style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>WeatherApp ☁️</h2>
          <p style={styles.description}>
            API-based app setting the vibe with real-time weather.
          </p>
        </div>

        <a
          href="https://ronitkbiswas.github.io/weatherApp/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.imageGallery}
        >
          {/* Smaller, consistent images */}
          <img src={lahoreImg} alt="Lahore" style={styles.image} />
          <img src={sikkimImg} alt="Sikkim" style={styles.image} />
          <img src={ranaghatImg} alt="Ranaghat" style={styles.image} />
        </a>

        <div style={styles.footer}>
          <a
            href="https://ronitkbiswas.github.io/weatherApp/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Live Demo →
          </a>
        </div>
      </div>
      {/** Weather App end */}
      
<br></br>
  <div className="project-card" style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>📝 Task Manager</h2>
          <p style={styles.description}>
            A clean React-based task manager for organizing and tracking daily tasks with a simple, intuitive UI.
          </p>
        </div>

        <a
          href="https://taskmanager-ronitkbiswas.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.imageGallery}
        >
          {/* Smaller, consistent images */}
          <img src={lahoreImg} alt="Lahore" style={styles.image} />
          <img src={sikkimImg} alt="Sikkim" style={styles.image} />
          <img src={ranaghatImg} alt="Ranaghat" style={styles.image} />
        </a>

        <div style={styles.footer}>
          <a
            href="https://taskmanager-ronitkbiswas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Live Demo →
          </a>
        </div>
         </div>
        {/** task manager ends here */}
     
       {/** e commerce starts here */}
       <br></br>
<div className="project-card" style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>E Commerce App</h2>
          <p style={styles.description}>
            React eCommerce app 🛒 with product browsing 📦 & cart ⚡
          </p>
        </div>

        <a
          href="https://ecommerce-app-ronitkbiswas.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.imageGallery}
        >
          {/* Smaller, consistent images */}
          <img src={ecommImg} alt="Lahore" width="250px" />
          {/* <img src={sikkimImg} alt="Sikkim" style={styles.image} />
          <img src={ranaghatImg} alt="Ranaghat" style={styles.image} /> */}
        </a>

        <div style={styles.footer}>
          <a
            href="https://ecommerce-app-ronitkbiswas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Live Demo →
          </a>
        </div>
      </div>
        {/** e commerce ends here */}
      {/** main div ends below div */}
    </div>
  );
}

const styles = {
  container: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: "1.4rem",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "20px",
    fontWeight: "400",
  },
  card: {
    background: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "16px",
    padding: "20px 25px", // Tightened padding
    width: "100%",
    maxWidth: "480px", // More compact width
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  },
  header: { marginBottom: "15px" },
  title: { fontSize: "1.5rem", color: "#fff", margin: "0 0 5px 0" },
  description: { color: "#aaa", fontSize: "0.9rem", margin: 0 },
  imageGallery: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "20px",
    textDecoration: "none",
  },
  image: {
    width: "110px", // Compact image size
    height: "110px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "0.3s ease",
  },
  footer: { marginTop: "5px" },
  button: {
    display: "inline-block",
    padding: "8px 20px", // Smaller button
    backgroundColor: "#90ee90",
    color: "#111",
    fontWeight: "600",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "0.2s",
  },
};
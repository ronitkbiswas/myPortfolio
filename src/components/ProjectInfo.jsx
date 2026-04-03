import weatherImg from "../assets/images/weatherApp.jpeg";

export default function Projects() {
  return (
    <div className="projects">
      <h2>✨ My Projects</h2>

      <div className="project-card">
        <h3>WeatherApp ☁️</h3>

        <p>
          An API-based weather app that sets the vibe according to
          real-time weather around you!
        </p>

        <a href="https://ronitkbiswas.github.io/weatherApp/" target="_blank">
         <br></br>
          <img width="200px" src={weatherImg} alt="weather app" />
        </a>

        <a
          className="live-link"
          href="https://ronitkbiswas.github.io/weatherApp/"
          target="_blank"
        >
            <br></br><br></br>
          View it Live →
        </a>
      </div>
    </div>
  );
}
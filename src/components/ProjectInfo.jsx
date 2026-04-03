import lahoreImg from "../assets/images/lahoreWeather.jpg";
import ranaghatImg from "../assets/images/ranaghatWeather.jpg";
import bangaloreImg from "../assets/images/bangaloreWeather.jpg";
import sikkimImg from "../assets/images/sikkimWeather.jpg";
import mainImg from "../assets/images/weatherApp.jpeg";
export default function Projects() {
  return (
    <div className="projects">
      <h2>✨ My Projects</h2>
<br></br>
      <div className="project-card">
        <h2>WeatherApp ☁️</h2>
<span> An API-based weather app that sets the vibe according to
          real-time weather around you !</span>

        <a href="https://ronitkbiswas.github.io/weatherApp/" target="_blank">
         <br></br>
      <img width="125px" src={mainImg} />   
      <img width="150px" src={sikkimImg} alt="weather app"/>
      {/* <img width="150px" src={lahoreImg} alt="weather app" /> */}
      <img width="150px" src={ranaghatImg} alt="weather app"/>
      {/* <img width="150px" src={bangaloreImg} alt="weather app" /> */}
      
        </a>
 

    {/* <div style="display: inline">a</div>
    <div style="display: inline">b</div>
    <div style="display: inline">c</div>  */}
  
        <a
          className="live-link"
          href="https://ronitkbiswas.github.io/weatherApp/"
          target="_blank"
          style={{textDecoration: "none", color:"lightgreen",fontWeight:"bold",fontSize:"17px"}}
        >
            <br></br><br></br>
          View it Live →
        </a>
       
      </div>
    </div>
  );
}
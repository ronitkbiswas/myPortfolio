import "/src/App.css";
import Photo from "./assets/MyPhoto";
import DownloadCV from "./assets/DownloadCV";
import SocialLinks from "./assets/SocialLinks";
import AboutMe from "./AboutMe";
import TechStack from "./assets/TechStack";
import Workstation from "./assets/Workstation";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="body">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div
        className="main"
        style={{ fontSize: "15px", marginTop: "20px", textAlign: "center" }}
      >
        <div className="photo">
          <Photo />
        </div>
        <br></br>
<span style={{fontSize: "27px", fontWeight: "bold"}}>Ronit Kumar Biswas ✨</span>
        <br></br>
        <span style={{fontWeight: "bold", fontSize: "16px"}}>Frontend Developer (React JS)<br></br></span>
        
        
       <DownloadCV />
       
       
        <div>
           
          <AboutMe />
          <br></br><br></br>
        </div> 
        <div>
          <hr></hr>
          <TechStack />
          <br></br><br></br>
        </div>
        <div>
          <div style={{backgroundColor: "grey"}}>
            <hr></hr><br></br>
            <span style={{fontSize:"25px",fontWeight:"bold"}}>✨ My Projects:</span>
          <br></br><br></br>
        
          <span style={{fontSize: "22px", fontWeight: "bold"}}>WeatherApp ☁️</span>
          <br></br>
          <span style={{fontFamily: "monospace" }}>An API based weather app that sets the vive
            <br></br>according to the real time weather around you!</span>
          <br></br>
          
          <br></br>
          <img
            src="/myPhotos/weatherApp.png"
            alt="weatherapp project logo"
            width="400px"
          />
          <br></br>
           <br></br>
          <a style={{fontSize:"17px", textDecoration:"none", color:"lightgreen"}} href="https://ronitkbiswas.github.io/weatherApp/" target="_blank">View it Live...</a>
          <br></br>
          <br></br>
          </div>
          <hr></hr>
<Workstation />
        </div> 
         <div className="sociallinks">
          <hr></hr>
          <SocialLinks />
          <br></br>
          <hr></hr>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default App;

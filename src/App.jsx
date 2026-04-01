import "/src/App.css";
import Photo from "./assets/MyPhoto";
import DownloadCV from "./assets/DownloadCV";
import SocialLinks from "./assets/SocialLinks";
import AboutMe from "./AboutMe";
import TechStack from "./assets/TechStack";
import Workstation from "./assets/Workstation";

function App() {
  return (
    <div className="body">
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
        <span style={{fontWeight: "bold", fontSize: "16px"}}>Frontend 
          Developer (React JS)<br></br></span>
        
        
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
          <hr></hr>
          <br></br>
           <span style={{fontSize:"25px",fontWeight:"bold"}}>✨ My Projects:</span>
           <br></br><br></br>
          <div style={{backgroundColor: "grey"}}>
            <br></br>
            
          <span style={{fontSize: "22px", fontWeight: "bold"}}>WeatherApp ☁️</span>
          <br></br>
          <span style={{fontFamily: "monospace" }}>An API based weather app that sets the vive
            <br></br>according to the real time weather around you!</span>
          <br></br>
          
          <br></br>
     <a target="_blank" href="https://ronitkbiswas.github.io/weatherApp/">   
          <img
            src="/myPhotos/weatherApp.jpeg"
            alt="weatherapp project logo"
            width="200px"
          />
          </a>  
          <br></br>
           <br></br>
          <a style={{fontSize:"18px", textDecoration:"none", color:"lightgreen",fontWeight:"bold"}}
           href="https://ronitkbiswas.github.io/weatherApp/" target="_blank">View it Live...</a>
          <br></br>
          <br></br>
          </div>
          <br></br>
          <hr></hr> 
<Workstation />
        </div> 
         <div className="sociallinks">
          <hr></hr><br></br>
          <SocialLinks />
          <br></br>
        
          <br></br>
        </div>
      </div>
     <footer style={{textAlign:"center"}}>
    
      <span>© {new Date().getFullYear()} All rights reserved.</span>
      <br></br>
      <span style={{fontSize:"13px"}}>Written in JavaScript | Made by Ronit 🔒</span>
      </footer><br></br>
    </div>
    
  );
}
export default App;

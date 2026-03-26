import "/src/App.css";
import Photo from "./assets/MyPhoto";
import DownloadCV from "./assets/DownloadCV";
import SocialLinks from "./assets/SocialLinks";
import AboutMe from "./AboutMe";
import TechStack from "./assets/TechStack";

function App() {
  return (
    <div className="body">
      <div
        className="main"
        style={{ fontSize: "15px", marginTop: "20px", textAlign: "center" }}
      >
        <div className="photo">
          <Photo />
        </div>
        
        <span style={{fontSize: "24px", fontWeight: "bold"
        }}>Ronit Kumar Biswas 🧑‍💻 ✨</span>
        <br></br>
        <span style={{fontWeight: "bold"}}>Passionate Coder, Engineer <br></br>& Restaurant Owner (JB's Flame)🔥</span>
        <br></br>
       
        <div>
          <AboutMe />
        </div>
        <div>
          <TechStack />
        </div>
         <div className="sociallinks">
          <SocialLinks />
        </div>
         <div className="downloadCV">
          <DownloadCV />
          
        </div>
      </div>
    </div>
  );
}
export default App;

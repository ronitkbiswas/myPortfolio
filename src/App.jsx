import "/src/App.css";
import Photo from "./assets/MyPhoto";
import DownloadCV from "./assets/DownloadCV";
import SocialLinks from "./assets/SocialLinks";
import AboutMe from "./AboutMe";

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
        <span>Passionate Coder, Engineer & Restaurant Owner (JB's Flame)🔥</span>
        <br></br><br></br>
        <div className="sociallinks">
          <SocialLinks />
        </div>
        <div>
          <AboutMe />
        </div>
         <div className="downloadCV">
          <DownloadCV />
          
        </div>
      </div>
    </div>
  );
}
export default App;

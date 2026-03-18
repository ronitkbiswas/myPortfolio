import "/src/App.css";
import Photo from "./assets/MyPhoto";
import Bio from "./assets/MyData";
import DownloadCV from "./assets/DownloadCV";
import SocialLinks from "./assets/SocialLinks";

function DisplayTime() {
  const time = new Date().getHours();
  alert(time);
}

function App() {
  return (
    <div className="body">
      <div
        className="main"
        style={{ fontSize: "15px", marginTop: "20px", textAlign: "center" }}
      >
        <div className="photo">
          <Photo />
          <br></br>
        </div>
        <br></br>
        <div className="sociallinks">
          <SocialLinks />
        </div>
        <br></br>
        <div className="bio">
          <Bio />
        </div>
        <div className="downloadCV">
          <DownloadCV />
        </div>
      </div>
    </div>
  );
}
export default App;

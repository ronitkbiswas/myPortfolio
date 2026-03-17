import "/src/App.css";
import Photo from "./assets/MyPhoto";
import Bio from "./assets/MyData";
import DownloadCV from "./assets/DownloadCV";

function App() {
  return (
    <div
      className="main"
      style={{ fontSize: "15px", marginTop: "20px", textAlign: "center" }}
    >
      <div className="photo">
        <Photo />
      </div>
      <div className="bio">
        <Bio />
      </div>
      <div className="downloadCV">
        <DownloadCV />
      </div>
    </div>
  );
}
export default App;

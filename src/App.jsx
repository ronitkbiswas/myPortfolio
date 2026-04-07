import Photo from "./components/MyPhoto";
import DownloadCV from "./components/DownloadCV";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";
import Workstation from "./sections/Workstation";
import AboutMe from "./sections/About";
import Projects from "./components/ProjectInfo";
import Intro from "./components/IntroLine";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (


<div style={{ fontSize: "15px", marginTop: "20px", textAlign: "center" }} >
 <Navbar />
<MobileNavbar />
<Photo /><br></br>
<Intro />
<DownloadCV /> 

<AboutMe />  
<TechStack /><br></br><br></br><hr></hr><br></br>
<Projects /><br></br><hr></hr>
<Workstation /><hr></hr><br></br>
<SocialLinks /><br></br><br></br>
 <Footer /><br></br>

 </div>
);
}

export default App;

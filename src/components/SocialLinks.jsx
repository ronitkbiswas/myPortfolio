
import "/src/App.css";
import linkedinIcon from "../assets/images/linkedin.png";
// import githubIcon from "../assets/images/github.jpg";
import fbIcon from "../assets/images/facebook.png";
export default function SocialLinks() {
  const fb = "https://facebook.com/ronitkbiswas";
  const github = "https://github.com/ronitkbiswas";
  const linkedin = "https://linkedin.com/in/ronitkbiswas/";

  return (
    <div className="socialSection">
      <h2>🌐 Socials</h2>

      <div className="socialIcons">
        <a href={linkedin} target="_blank" rel="noreferrer">
  <img src={linkedinIcon} alt="linkedin" />
</a>

        <a href={github} target="_blank" rel="noreferrer">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  style={{ filter: "invert(1)" }}  alt="github" className="githubIcon" />
</a>

      <a href={fb} target="_blank" rel="noreferrer">
  <img src={fbIcon} alt="facebook" />
</a>
      </div>
    </div>
  );
}
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.jpg";
import fbIcon from "../assets/images/facebook.png";
function SocialLinks() {
  const fb = "https://facebook.com/ronitkbiswas";
  const github = "https://github.com/ronitkbiswas";
  const linkedin = "https://linkedin.com/in/ronitkbiswas/";
  return (
    <>
      <div>
        <span style={{fontSize:"25px",fontWeight:"bold"}}>🌐 Socials</span>
        <br></br><br></br>
        <a href={linkedin} target="_blank">
          <img
            src={linkedinIcon}
            alt="linkedin link logo"
            width="30px"
          />
        </a>
        <span style={{paddingLeft: "5px"}}>  </span> 
        <a href={github} target="_blank">
          <img src={githubIcon} alt="github link logo" width="61px" />
        </a>
        <span style={{paddingLeft: "5px"}}>  </span> 
        <a href={fb} target="_blank">
          <img src={fbIcon} alt="fb link logo" width="30px" />
        </a>
      </div>
    </>
  );
}
export default SocialLinks;

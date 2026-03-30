function SocialLinks() {
  const fb = "https://facebook.com/ronitkbiswas";
  const github = "https://github.com/ronitkbiswas";
  const linkedin = "https://linkedin.com/in/ronitkbiswas/";
  return (
    <>
      <div>
        <span style={{fontSize:"25px",fontWeight:"bold"}}>🌐 Socials:</span>
        <br></br><br></br>
        <a href={linkedin} target="_blank">
          <img
            src="/myPhotos/linkedin.png"
            alt="linkedin link logo"
            width="30px"
          />
        </a>
        <span style={{paddingLeft: "5px"}}>  </span> 
        <a href={github} target="_blank">
          <img src="/myPhotos/github.png" alt="github link logo" width="30px" />
        </a>
        <span style={{paddingLeft: "5px"}}>  </span> 
        <a href={fb} target="_blank">
          <img src="/myPhotos/facebook.png" alt="fb link logo" width="30px" />
        </a>
      </div>
    </>
  );
}
export default SocialLinks;

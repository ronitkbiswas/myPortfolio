function Photo() {
  return (
    <>
      <img
        src="./public/myPhotos/myDP.jpg"
        alt="my profile pic"
        width="150px"
      />
    </>
  );
}

function Bio() {
  return (
    <>
      <span style={{ fontFamily: "monospace" }}>
        Hello 👋 I'm Ronit Kumar Biswas 🧑‍💻 gearing up to become a ReactJS Dev
        soon 😎💻<br></br> I'm from Kolkata 🏠 I have done Applied Electronis &
        Intrumentation Engineering (B.Tech, 2017 passout.) 🎓 I have Founded a
        Restaurant (JB's Flame) which are doing pretty good (meaning
        profitable!) 🔥<br></br> I am currently 31 years old as of 2026 👨 I've
        made this entire web app in react JS! 😎🍾
      </span>
    </>
  );
}

function DownloadCV() {
  return (
    <>
      <button type="button" onClick={console.log("ok")}>
        Download my Resume
      </button>
    </>
  );
}

function App() {
  return (
    <div
      className="main"
      style={{ fontSize: "15px", marginTop: "20px", textAlign: "center" }}
    >
      <Photo />
      <br></br>
      <Bio />
      <br></br>
      <br></br>
      <DownloadCV />
    </div>
  );
}
export default App;

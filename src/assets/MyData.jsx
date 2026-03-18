function Bio() {
  const currentYear = new Date().getFullYear();
  const birthYear = 1995;

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "10px" }}>
        <span style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "20px" }}>Hello 👋</span>
          <br></br> I'm Ronit Kumar Biswas 🧑‍💻 gearing up to become a ReactJS Dev
          soon 😎💻<br></br> From Kolkata 🏠 Applied Electronis & Intrumentation
          Engineer (B.Tech, 2017 passout.) 🎓 <br></br>Have Founded a Restaurant
          (JB's Flame) which are doing pretty good (meaning profitable!) 🔥
          <br></br> Currently {currentYear - birthYear} years old as of{" "}
          {currentYear} 👨
          <br></br>
          <br></br>
          <span>I've made this entire web app in react JS! 😎🍾</span>
          <span style={{ fontSize: "22px" }}>ENJOY ! 🧑‍💻</span>
        </span>
      </div>
    </>
  );
}
export default Bio;

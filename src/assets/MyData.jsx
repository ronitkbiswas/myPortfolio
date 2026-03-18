function Bio() {
  const currentYear = new Date().getFullYear();
  const birthYear = 1995;

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "10px" }}>
        <span style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "20px" }}>Hello 👋</span>
          <br></br> I'm Ronit Kumar Biswas 🧑‍💻💻, From Kolkata 🏠 <br></br>{" "}
          Applied Electronis & Intrumentation Engineer (B.Tech, 2017 passout.)
          🎓 <br></br>Founded a Restaurant, JB's Flame (4.2+)🔥
          <br></br>I'm Currently {currentYear - birthYear} years old, as of{" "}
          {currentYear} 👨
          <br></br>
          <br></br>
          <span>I've made this entire web app in react JS! 😎🍾</span>
          <br></br>
          <span style={{ fontSize: "22px" }}>ENJOY ! 🧑‍💻</span>
        </span>
      </div>
    </>
  );
}
export default Bio;

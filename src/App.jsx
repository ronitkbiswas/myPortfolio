import { me } from "./assets/MyData.jsx";
import "./index.css";

function Ronit() {
  const currentYear = new Date().getFullYear();
  const list = me.map((ronit) => (
    <span key={me.id}>
      <div
        style={{
          textAlign: "center",
          paddingTop: "50px",
          borderRadius: "40px",
        }}
      >
        <img src={ronit.imageUrl} alt={ronit.name} style={{ width: "150px" }} />
      </div>
      <div style={{ textAlign: "center", fontFamily: "cursive" }}>
        <p className="intro">
          <span style={{ fontSize: "25px" }}>Hello 👋</span>
          <br></br> I'm <strong>{ronit.name}</strong> 🧑‍💻 gearing up to become a{" "}
          {ronit.profession} soon 😎💻
          <br></br>
          <br></br> I'm from {ronit.city} 🏠 <br></br> I have done{" "}
          {ronit.degreeIn} ({ronit.highestEducation}, {ronit.passoutYear}{" "}
          passout.) 🎓
          <br></br> <br></br> I have {ronit.accomplishment} (JB's Flame) which
          are doing pretty good (meaning profitable!) 🔥 I am currently{" "}
          {currentYear - ronit.birthYear} years old as of {currentYear} 👨
          <br></br>
          <br></br>
          <span>I've made this entire web app in react JS! 😎🍾</span>
        </p>
      </div>
    </span>
  ));
  return <article>{list}</article>;
}
export default Ronit;

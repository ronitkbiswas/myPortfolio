import { me } from "./assets/MyData.jsx";
import "./index.css";

function Ronit() {
  const currentYear = new Date().getFullYear();
  const list = me.map((ronit) => (
    <span key={me.id}>
      <img src={ronit.imageUrl} alt={ronit.name} style={{ width: "150px" }} />
      <br></br>
      <br></br>
      <div>
        <p className="intro">
          Hello 👋 <br></br> I'm {ronit.name} 🧑‍💻 gearing up to become a{" "}
          {ronit.profession} soon 😎💻 I'm from {ronit.city} 🏠 <br></br> I have
          done {ronit.degreeIn} ({ronit.highestEducation}, {ronit.passoutYear}{" "}
          passout.) 🎓 I have {ronit.accomplishment} (JB's Flame) which are
          doing pretty good (meaning profitable!) 🔥 I am currently{" "}
          {currentYear - ronit.birthYear} years old as of {currentYear} 👨
          <br></br>
          I've made this entire web app in react JS! 😎🍾
        </p>
      </div>
    </span>
  ));
  return <article>{list}</article>;
}
export default Ronit;

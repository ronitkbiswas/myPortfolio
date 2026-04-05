import myDP from "../assets/images/myDP.jpg";
import "/src/App.css";

function Photo() {
  return (
   <img
  src={myDP}
  alt="my profile pic"
  className="profilePic"
/>
  );
}

export default Photo;
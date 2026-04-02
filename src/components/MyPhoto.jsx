import myDP from "../assets/images/myDP.jpg";

function Photo() {
  return (
    <img
      src={myDP}
      alt="my profile pic"
      width="170"
      style={{
        borderRadius: "100px",
        boxShadow: "1px 1px 10px white"
      }}
    />
  );
}

export default Photo;
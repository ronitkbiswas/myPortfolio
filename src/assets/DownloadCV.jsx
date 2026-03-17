import "/src/App.css";
function DownloadCV() {
  return (
    <>
      <button
        className="downloadCVButton"
        type="button"
        onClick={console.log("cv download button pressed")}
      >
        Download my Resume
      </button>
    </>
  );
}
export default DownloadCV;

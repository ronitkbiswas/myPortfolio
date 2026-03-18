import "/src/App.css";
function DownloadCV() {
  return (
    <>
      <button
        className="downloadCVButton"
        type="button"
        onClick={console.log("cv download button pressed")}
        disabled
      >
        Download my Resume (not available yet)
      </button>
    </>
  );
}
export default DownloadCV;

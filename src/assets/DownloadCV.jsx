import "/src/App.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

function DownloadCV() {
  const notify = () => toast(<b>CV not available for download yet!</b>);
  return (
    <>
      <button className="downloadCVButton" type="button" onClick={notify}>
        Download my Resume (not available yet)
      </button>
      <ToastContainer />
    </>
  );
}
export default DownloadCV;

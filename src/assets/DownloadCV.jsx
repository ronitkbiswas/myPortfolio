import "/src/App.css";
import { ToastContainer, toast } from "react-toastify";

function DownloadCV() {
  const notify = () => toast(<b>CV not available for download yet!</b>);
 /**
  * need to add a cv download button as cv is ready for download
  * need to remove the toast
  * just comment everything out what you don't need
  */
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

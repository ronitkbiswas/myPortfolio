import "/src/App.css";
import { ToastContainer, toast } from "react-toastify";

function DownloadCV() {
  const notify = () => toast(<b>Downloading...</b>);
 /**
  * need to add a cv download button as cv is ready for download
  * need to remove the toast
  * just comment everything out what you don't need
  */
  return (
    <>
    {/* <a herf="./cv/ronitkbiswas_2026.pdf">
      <button className="downloadCVButton" type="button" onClick={notify}>
        Download my latest CV ({new Date().getFullYear()})
      </button>
      </a> */}
      <br></br>
<a
style={{fontSize:"16px",textDecoration: "none"}}
  href="/cv/ronitkbiswas_2026.pdf"
  download
  className="downloadCVButton"
  onClick={notify}
>
  Download my latest CV ({new Date().getFullYear()})
</a>
      <br></br><br></br><hr></hr><br></br>
      
      <ToastContainer />
    </>
  );
}
export default DownloadCV;

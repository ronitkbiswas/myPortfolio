import "/src/App.css";
import { ToastContainer, toast } from "react-toastify";

function DownloadCV() {
  const notify = () => toast(<b>Downloading now...</b>);
  return (
    <>
      <br></br><br></br>
<a
style={{fontSize:"16px",textDecoration: "none"}}
  href="/cv/ronitkbiswas_2026.pdf"
  download
  className="downloadCVButton"
  onClick={notify}
>
  Download my latest CV ({new Date().getFullYear()})
  
</a><br></br>
      <br></br><br></br><hr></hr><br></br>
      
      <ToastContainer />
    </>
  );
}

export default DownloadCV;

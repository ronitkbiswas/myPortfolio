import "/src/App.css";
import { ToastContainer, toast } from "react-toastify";
import whatsAppicon from "../assets/images/whatsAppicon.png";
/**
 * 
 * @returns 🔽⏬⬇️⤵️🔻
 */

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
  Download my latest CV ({new Date().getFullYear()}) ⏬
  
</a> <br></br><br></br>
<a href="tel:+919804727175" className="downloadCVButton" style={{fontSize:"16px",textDecoration: "none"}}>📞 Contact Me</a>
<br></br>

<a target="_blank" href="https://api.whatsapp.com/send?phone=+919804727175">
<img style={{paddingTop: "10px", paddingBottom: "5px"}} src={whatsAppicon} width="40px" />
 </a>
       <br></br><hr></hr><br></br>
      
      <ToastContainer />
    </>
  );
}

export default DownloadCV;

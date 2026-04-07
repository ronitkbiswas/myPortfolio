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

<div className="btnContainer">
  <a
    href="/cv/RonitKBiswas-FrontEnd.pdf"
    download
    onClick={notify}
    className="callBtn"
  >
    📄 Download CV ({new Date().getFullYear()})
  </a>

  <a
  href="tel:+919804727175"
  className="callBtn"
>
  <span className="icon">📞</span>
  <span>Call Me</span>
</a>
</div>

<a
  target="_blank"
  href="https://api.whatsapp.com/send?phone=+919804727175"
  className="whatsappFloat"
>
  <img src={whatsAppicon} alt="WhatsApp" />
</a> 
      
      <ToastContainer />
    </>
  );
}

export default DownloadCV;

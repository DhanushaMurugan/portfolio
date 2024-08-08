import React from "react";
import "../style/Fooder.css";
import phoneicon from "../image/telephone.png";
import gmailicon from "../image/gmail.png";
import githubicon from "../image/github1.png";
function Fooder() {
  return (
    <div className="fooder-container">
      <div className="fooder-sub-container">
        <div className="contact-details">
          <h3>Contact Me</h3>
          <div className="contact-details-1">
            <div>
              <img src={phoneicon} alt="phone-icon" width="50vw" />
            </div>
            <div>
              <p>+91 6385499934</p>
            </div>
          </div>
          <div className="contact-details-2">
            <div>
              <img src={gmailicon} alt="gmail-icon" width="36vw" />
            </div>
            <div className="icon-detail">
              <p>mdhanusha7@gmail.com</p>
            </div>
          </div>
          <div className="contact-details-3">
            <div>
              <img src={githubicon} alt="github-icon" width="45vw" />
            </div>
            <div>
              <a href="https://github.com/DhanushaMurugan">
                https://github.com/DhanushaMurugan
              </a>
            </div>
          </div>
        </div>
        <div className="download-card">
          <p></p>
          <button className="fooder-button">Download Resume</button>
        </div>
      </div>
      <div className="fooder-end">
        <h4>Developed by Dhanusha Murugan.</h4>
      </div>
    </div>
  );
}

export default Fooder;

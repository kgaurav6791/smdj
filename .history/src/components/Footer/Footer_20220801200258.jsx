import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.webp";
import Whatsapp from "../../img/whatsapp-logo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content" id="contactdetails">
        <span
          style={{
            textAlign: "center",
            fontSize: "x - large",
            fontWeight: "600",
          }}
        >
          <br /> <br /> <br /> <br />
          <span style={{ fontSize: "27px" }} className="footer-text">
            smsoundservices@gmail.com
          </span>
          <br />
          <div className="phones">
            <img src={Whatsapp} alt="whatsapp icon"></img>
            <span className="footer-text">+91 79054 43167,</span>
            {/* phone only */}
            <img src={Whatsapp} alt="whatsapp icon"></img>
            <span className="footer-text">+91 89571 91776</span>
          </div>
        </span>
        <span></span>
        <div className="f-icons">&copy; Copyright 2021</div>
      </div>
    </div>
  );
};

export default Footer;
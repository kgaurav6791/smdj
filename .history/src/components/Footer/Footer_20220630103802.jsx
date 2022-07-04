import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content" id="contactdetails">
        <span
          style={{ textAlign: "center", fontSize: x - large, fontWeight: 600 }}
        >
          <br /> <br /> <br /> <br />
          smsoundservices@gmail.com
          <br />
          +91 79054 43167
        </span>
        <span></span>
        <div className="f-icons">&copy; Copyright 2021</div>
      </div>
    </div>
  );
};

export default Footer;

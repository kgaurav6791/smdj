import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ textAlign: "center" }}>
          <br /> <br /> <br /> <br />
          Shartendukumar205@gmail.com
          <br />
          +91 79054 43167
        </span>
        <span></span>
        <div className="f-icons">&cpy; Copyright 2021</div>
      </div>
    </div>
  );
};

export default Footer;

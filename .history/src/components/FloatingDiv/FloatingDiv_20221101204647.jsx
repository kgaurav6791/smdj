import React from "react";
import { Link } from "react-scroll";
import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2, type }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      {type === "booknow" && (
        <>
          {" "}
          <img src={img} alt="DJ LUCKNOW" />
          <Link to="contactdetails" smooth={true} spy={true}>
            <span>
          <b><h2 style={{ display:"inline",fontSize:"16px" }}>
              {text1}
              <br />
              {text2}
            </h2></b>
            </span>
          </Link>
        </>
      )}
      {type != "booknow" && (
        <>
          <img src={img} alt="LUCKNOW DJ" />
          <span>
            {text1}
            <br />
            {text2}
          </span>
        </>
      )}
    </div>
  );
};

export default FloatinDiv;

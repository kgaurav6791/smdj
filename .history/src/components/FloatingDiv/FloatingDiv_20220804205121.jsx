import React from "react";
import { Link } from "react-scroll";
import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2, type }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      {type === "booknow" && (
        <>
          <Link to="contactdetails" smooth={true} spy={true}>
            {" "}
            <img src={img} alt="" />
            <span>
              {text1}
              <br />
              {text2}
            </span>
          </Link>
        </>
      )}
      {type != "booknow" && (
        <>
          <img src={img} alt="" />
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

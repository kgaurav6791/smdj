import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2, type }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      {type === "booknow" && (
        <>
          <img src={img} alt="" />
          <span>
            {text1}
            <br />
            {text2}
          </span>
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

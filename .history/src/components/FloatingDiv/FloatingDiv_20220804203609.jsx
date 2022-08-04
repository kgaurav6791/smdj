import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2, name }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      {name === "booknow" && (
        <>
          <img src={img} alt="" />
          <span>
            {text1}
            <br />
            {text2}
          </span>
        </>
      )}
      {name === "booknow" && (
        <></>
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

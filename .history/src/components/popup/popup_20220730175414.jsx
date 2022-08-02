import React from "react";
import "./Popup.css";
const popup = () => {
  return (
    <>
      <div className="popup">
        <button
          className="popup-close-button"
          //   onClick={() => {
          //     setPopupOpen(false);
          //   }
          // }
        >
          Close
        </button>
        <div className="popup-inner">
          <h1>Terms And Conditions</h1>
          <div className="termslist"></div>
        </div>
      </div>
    </>
  );
};

export default popup;

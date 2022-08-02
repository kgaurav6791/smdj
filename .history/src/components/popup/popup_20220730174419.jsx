import React from "react";
import "./Popup.css";
const popup = (popupOpen) => {
  return (
    <>
      <div className="popup">
        <button className="popup-close-button" onClick={() => {}} />
        <div className="popup-inner">
          <h1>Terms And Conditions</h1>
          <div className="termslist"></div>
        </div>
      </div>
    </>
  );
};

export default popup;

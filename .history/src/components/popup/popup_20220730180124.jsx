import React from "react";
import "./Popup.css";
const popup = () => {
  return (
    <>
      <button
        className="button s-button"
        style={{ padding: 0, textDecoration: "bold" }}
        onClick={() => setPopupOpen(!popupOpen)}
      >
        Terms & Conditions
      </button>
    </>
  );
};

export default popup;

import React from "react";
import { useState } from "react";
import "./Popup.css";
const popup = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button
        className="button s-button btn-modal"
        onClick={toggleModal}
        style={{ padding: "10px", textDecoration: "bolder", fontSize: "17px" }}
      >
        Terms & Conditions
      </button>
    </>
  );
};

export default popup;

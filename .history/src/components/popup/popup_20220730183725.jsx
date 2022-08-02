import React from "react";
import { useState } from "react";
import "./Popup.css";
const Popup = () => {
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
        style={{ padding: "10px", textDecoration: "bolder", fontSize: "16px" }}
      >
        Terms & Conditions
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>TERMS AND CONDITIONS</h2>
            <ul>
              <li>
                Administrative permissions is responsibility of customer.{" "}
              </li>
              <li>
                Kindly pay special attention to timing 7:00 pm to 10 pm ordered
                by government.{" "}
              </li>
              <li>
                All charges will be according to event duration and type.{" "}
              </li>
              <li>50% Non</li>
              <li>
                refundable advance will need to be paid at time of booking.{" "}
              </li>
              <li>
                Incase of any dispute of damage of equipments the booking
                person/customer will be solely responsible.{" "}
              </li>
              <li>
                Incase of any machine or equipment malfunction we will not be
                responsible.{" "}
              </li>
              <li>
                We take no guarantee for disruption due to natural calamities
                and acts of God.{" "}
              </li>
              <li>
                Hon'ble Court has the sole and final jurisdiction over all
                dispute.
              </li>
            </ul>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

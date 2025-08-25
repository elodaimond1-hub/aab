import React, { useState } from "react";
import close from "../assets/close.png";
import QR from "../assets/QR.png";

const Toast = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  const showId = () => {
    const num = Math.floor(100000 + Math.random() * 900000);
    setRandomNumber(num);
    setToastVisible(true);
  }

  const closeId = () => {
    setToastVisible(false);
  }

  return (
    <>
        <button className="btn-show" onClick={showId}></button>
        <div className={`overlay ${toastVisible ? 'show' : ''}`}></div>
        <div className={`toast-bottom ${toastVisible ? 'show' : ''}`}>
            <button className="toast-close-btn" onClick={closeId}>
                <img className="toast-close-btn-img" src={close}></img>
            </button>
            <h3 className="toast-title">Удостоверение личности</h3>
            <span className="toast-padding">Покажите QR-код сотруднику</span>
            <img className="qr-img" src={QR}></img>
            <span>или скажите код</span>
            <h2>{randomNumber}</h2>
        </div>
    </>
  );
};

export default Toast;

import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import identity from './assets/identity.jpg';
import buttons from './assets/buttons.jpg';
import close from './assets/close.png';
import QR from './assets/QR.png';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [clickCount, setClickCount] = useState(0); 
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('savedPhoto');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        setSelectedImage(result);
        localStorage.setItem('savedPhoto', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    setClickCount(prev => prev + 1); 
    if (clickCount + 1 >= 5) {     
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
      setClickCount(0);
    }
  };

  const showId = () => {
    const num = Math.floor(100000 + Math.random() * 900000);
    setRandomNumber(num);
    setToastVisible(true);
  }

  const closeId = () => {
    setToastVisible(false);
  }

  const handleShare = async () => {
    const shareImg = localStorage.getItem('savedPhoto');
    if (!shareImg) return alert("Error");

    const doc = new jsPDF();
    doc.addImage(shareImg, "PNG", 10, 20, 190, 257);
    const pdfBlob = doc.output("blob");
    const file = new File([pdfBlob], "54863568563692301235.pdf", { type: "application/pdf" });

    if (navigator.share && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file]
        });
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      alert("Error");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <img src={identity} alt="" className="top" />

        <div className="main_win">
          <input
            ref={fileInputRef}
            className="id1"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="image-preview" onClick={triggerFileInput}>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected ID"
                className="image-preview__image"
              />
            ) : (
              <div className="image-preview__placeholder">
                <span>Нажмите 5 раз, чтобы выбрать изображение удостоверения</span>
              </div>
            )}
          </div>
        </div>

        <div className="separator-line"></div>
        <div className="bottom_btn">
          <img src={buttons} alt="" className="down"/>
          <button className="btn-share" onClick={handleShare}></button>
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
        </div>
      </div>
    </div>
  );
};

export default App;

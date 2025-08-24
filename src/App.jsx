import React, { useState, useEffect, useRef } from 'react';
import identity from './assets/identity.jpg';
import buttons from './assets/buttons.jpg';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState('');
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
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
                <span>Нажмите, чтобы выбрать изображение удостоверения</span>
              </div>
            )}
          </div>
        </div>

        <div className="separator-line"></div>

        <div className="bottom_btn">
          <img src={buttons} alt="" className="down" />
          <button className="btn"></button>
        </div>
      </div>
    </div>
  );
};

export default App;

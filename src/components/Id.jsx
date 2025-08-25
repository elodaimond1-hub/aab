import React, { useState, useEffect, useRef } from 'react';

const Id = () => {
    const [selectedImage, setSelectedImage] = useState('');
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
    
    return (
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
    )
}

export default Id;
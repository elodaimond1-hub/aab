import React from 'react';
import identity from './assets/identity.jpg';
import buttons from './assets/buttons.jpg';
import { Toast, Share, Id } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <img src={identity} alt="" className="top" />
        <Id />
        <div className="separator-line"></div>
        <div className="bottom_btn">
          <img src={buttons} alt="" className="down"/>
          <Share />
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default App;

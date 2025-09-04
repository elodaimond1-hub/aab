import React, { useState } from 'react';
import './App.css'; 
import identity from './assets/identity.jpg';
import back from './assets/back.jpg';
import Tab1 from './tabs/Tab1.jsx'


const App = () => {
  const [activeContent, setActiveContent] = useState("first");
  const [backContent, setBackContent] = useState("main");

  const firstSwitch = () => {
    setActiveContent("first");
  }

  const backSwitch = () => {
    setBackContent("back");
  }

  const mainSwitch = () => {
    setBackContent("main");
  }

  return (
    <div className="app">
      {backContent === "main" && (
        <>
          <button className="btn-to-back" onClick={backSwitch}></button>
          <div className="main">
            <div className="id-btn">
                <img src={identity} className="top"/>
                <button className="btn-switch" onClick={firstSwitch}></button>
                <button className="btn-switch2" onClick={firstSwitch}></button>
            </div>
            {activeContent === "first" && <Tab1 />}
          </div>
        </>
      )}
      {backContent === "back" && (
        <>
          <img src={back} className="btn-to-main" onClick={mainSwitch}></img>
          <span className="back-top-text">Цифровые документы</span>
        </>
      )}
    </div>
  );
};

export default App;
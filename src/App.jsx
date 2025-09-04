import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './App.css'; 
import identity from './assets/identity.jpg';
import back from './assets/back.jpg';
import back_gray from './assets/back_gray.png';
import separator from './assets/separator.png';
import id_icon from './assets/id_icon.png';
import Tab1 from './tabs/Tab1.jsx'


const App = () => {
  const [activeContent, setActiveContent] = useState("first");
  const [backContent, setBackContent] = useState("main");
  const [direction, setDirection] = useState(1);

  const firstSwitch = () => setActiveContent("first");
  const backSwitch = () => { setDirection(1); setBackContent("back"); }
  const mainSwitch = () => { setDirection(-1); setBackContent("main"); }
  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {backContent === "main" && (
          <motion.div key="main" initial={{ x: direction === 1 ? 0 : 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} transition={{ duration: 0.13 }} className="page">
            <button className="btn-to-back" onClick={backSwitch}></button>
            <div className="main">
              <div className="id-btn">
                  <img src={identity} className="top"/>
                  <button className="btn-switch" onClick={firstSwitch}></button>
                  <button className="btn-switch2" onClick={firstSwitch}></button>
              </div>
              {activeContent === "first" && <Tab1 />}
            </div>
          </motion.div>
        )}
        {backContent === "back" && (
          <motion.div key="back" initial={{ x: direction === 1 ? -300 : 0, opacity: 0 }} animate={{ x: 0, opacity: 1   }} exit={{ x: -300, opacity: 0 }}  transition={{ duration: 0.13 }} className="page">
            <img src={back} className="btn-to-main" onClick={mainSwitch}></img>
            <span className="back-top-text">Цифровые документы</span>
            <span className="back-middle-text-header">Мои документы</span>
            <img src={id_icon} className="id-icon-img"></img>
            <span className="back-middle-text" onClick={mainSwitch}>Удостоверение личности</span>
            <img src={back_gray} className="back-gray-img" onClick={mainSwitch}></img>
            <img src={separator} className="separator"></img>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

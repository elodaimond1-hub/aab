import React from "react";
import buttons from '../assets/buttons.jpg';
import { Toast, Share, Id } from '../components';

const Tab1 = () => {
    return (
    <>
        <div className="container">
            <Id />
            <div className="separator-line"></div>
            <div className="bottom-btn">
            <img src={buttons} alt="" className="down"/>
            <Share />
            </div>
        </div>
        <Toast />
    </>
    );
}

export default Tab1;
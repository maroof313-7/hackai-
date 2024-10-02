// src/components/SplashScreen.js
import React from 'react';
import './SplashScreen.css'; // Create a separate CSS file for styles

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <div className="splash-box">
                <div className="logo">StratGen</div>
                <div className="title">Your AI Business Strategy Generator</div>
            </div>
        </div>
    );
};

export default SplashScreen;

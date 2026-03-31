import React from "react";
import "../styles/WelcomeScreen.css";

const WelcomeScreen = ({ onStart }) => (
  <div className="welcome-screen">
    <div className="welcome-overlay" />
    <div className="welcome-card">
      <div className="welcome-content">
        <h1>Welcome to Memoir</h1>
        <p>Your daily practice companion — smart cards, instant feedback, streak tracking.</p>
        <ul className="welcome-features">
          <li>✨ Fast hit cards</li>
          <li>🎯 Adaptive review pacing</li>
          <li>🔥 Streak progress + rewards</li>
        </ul>
        <button className="start-btn" onClick={onStart}>Start learning</button>
      </div>
      <div className="welcome-graphic">
        
          
        </div>
      </div>
    </div>
  
);

export default WelcomeScreen;

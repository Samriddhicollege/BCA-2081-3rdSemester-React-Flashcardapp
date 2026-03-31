import React from "react";
import "../styles/SessionSummary.css";

const SessionSummary = ({ correctCount, sosoCount, forgotCount, total, deckName, onRestart, onHome }) => {
  const score = Math.round((correctCount / total) * 100);
  return (
    <div className="summary-screen">
      <div className="summary-score" style={{ color: score >= 70 ? "#059669" : score >= 40 ? "#D97706" : "#DC2626" }}>
        {score}%
      </div>
      <div className="summary-title">Session complete</div>
      <div className="summary-deck">{deckName}</div>
      <div className="summary-stats">
        <div className="stat-item stat-correct">
          <span className="stat-num">{correctCount}</span>
          <span className="stat-lbl">Easy</span>
        </div>
        <div className="stat-item stat-soso">
          <span className="stat-num">{sosoCount}</span>
          <span className="stat-lbl">So-so</span>
        </div>
        <div className="stat-item stat-forgot">
          <span className="stat-num">{forgotCount}</span>
          <span className="stat-lbl">Forgot</span>
        </div>
      </div>
      <div className="summary-actions">
        <button className="btn-restart" onClick={onRestart}>Study again</button>
        <button className="btn-home" onClick={onHome}>Back to decks</button>
      </div>
    </div>
  );
};

export default SessionSummary;
import React from "react";
import "../styles/FlashCard.css";

const FlashCard = ({ card, isRevealed, color, onReveal }) => {
  return (
    <div className={`flashcard ${isRevealed ? "revealed" : ""}`} onClick={!isRevealed ? onReveal : undefined}>
      <div className="flashcard-inner">
        <div className="flashcard-front" style={{ borderColor: color + "44" }}>
          <div className="card-badge" style={{ background: color + "22", color }}>
            Question
          </div>
          <div className="card-question">{card.question}</div>
          <div className="card-tap-hint">tap to reveal →</div>
        </div>
        <div className="flashcard-back" style={{ borderColor: color + "88", background: color + "11" }}>
          <div className="card-badge" style={{ background: color + "33", color }}>
            Answer
          </div>
          <div className="card-answer">{card.answer}</div>
          <div className="card-pronunciation" style={{ color }}>{card.pronunciation}</div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
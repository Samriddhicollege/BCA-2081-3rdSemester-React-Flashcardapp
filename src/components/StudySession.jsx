import React from "react";
import FlashCard from "./FlashCard";
import RatingButtons from "./RatingButtons";
import ProgressBar from "./ProgressBar";
import SessionSummary from "./SessionSummary";
import { useFlashcard } from "../hooks/useFlashcard";
import "../styles/StudySession.css";

const StudySession = ({ deck, onBack, onComplete, streak }) => {
  const {
    currentCard, currentIndex, total, isRevealed,
    sessionDone, correctCount, sosoCount, forgotCount,
    reveal, rate, skip, restart,
  } = useFlashcard(deck.cards);

  if (sessionDone) {
    return (
      <SessionSummary
        correctCount={correctCount}
        sosoCount={sosoCount}
        forgotCount={forgotCount}
        total={total}
        deckName={deck.name}
        onRestart={restart}
        onHome={() => onComplete(correctCount)}
      />
    );
  }

  const done = currentIndex;
  const review = total - (correctCount + sosoCount + forgotCount);

  return (
    <div className="study-screen">
      <div className="study-header">
        <button className="back-btn" onClick={onBack}>← back</button>
        <div className="study-deck-name" style={{ color: deck.color }}>{isRevealed ? "Card revealed" : "Study session"}</div>
        <div className="study-pill">{isRevealed ? "Answer" : deck.name}</div>
      </div>

      <div className="study-meta">
        <span>Vocabulary · card {currentIndex + 1}</span>
        <span>{currentIndex + 1} / {total}</span>
      </div>

      <ProgressBar current={currentIndex} total={total} color={deck.color} />

      <div className="card-area">
        <FlashCard
          card={currentCard}
          isRevealed={isRevealed}
          color={deck.color}
          onReveal={reveal}
        />
      </div>

      {!isRevealed ? (
        <div className="study-actions">
          <button className="btn-skip" onClick={skip}>Skip</button>
          <button className="btn-hint" onClick={reveal}>Hint</button>
          <button className="btn-know" onClick={() => rate("easy")}>I know it</button>
        </div>
      ) : (
        <>
          <div className="rating-section">
            <p className="rating-prompt">How well did you know this?</p>
            <RatingButtons onRate={rate} />
          </div>

          <div className="session-progress-box">
            <div className="session-progress-title">Session progress</div>
            <div className="session-progress-values">
              <div>
                <div className="progress-num">{done}</div>
                <div className="progress-label">done</div>
              </div>
              <div>
                <div className="progress-num">{correctCount}</div>
                <div className="progress-label">correct</div>
              </div>
              <div>
                <div className="progress-num">{review}</div>
                <div className="progress-label">review</div>
              </div>
            </div>
          </div>

          <div className="streak-reminder" style={{ borderColor: deck.color }}>
            You&apos;re on a {streak}-day streak. Keep it up!
          </div>
        </>
      )}

      <div className="card-counter">
        {currentIndex + 1} of {total}
      </div>
    </div>
  );
};

export default StudySession;
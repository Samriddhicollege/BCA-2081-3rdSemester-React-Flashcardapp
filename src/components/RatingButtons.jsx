import React from "react";
import "../styles/RatingButtons.css";

const RATINGS = [
  { id: "forgot", label: "Forgot", emoji: "✕" },
  { id: "soso",   label: "So-so",  emoji: "~" },
  { id: "easy",   label: "Easy",   emoji: "✓" },
];

const RatingButtons = ({ onRate }) => (
  <div className="rating-row">
    {RATINGS.map((r) => (
      <button
        key={r.id}
        className={`rating-btn rating-${r.id}`}
        onClick={() => onRate(r.id)}
      >
        <span className="rating-emoji">{r.emoji}</span>
        <span className="rating-label">{r.label}</span>
      </button>
    ))}
  </div>
);

export default RatingButtons;
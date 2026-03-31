import React from "react";
import "../styles/DeckSelector.css";

const DeckSelector = ({ decks, streak, onSelect }) => (
  <div className="deck-screen">
    <div className="deck-header">
      <div>
        <div className="deck-title">Study session</div>
        <div className="deck-subtitle">Select a deck and get started</div>
      </div>
      {streak > 0 && (
        <div className="streak-badge">
          <span className="streak-flame">◆</span> {streak} day streak
        </div>
      )}
    </div>
    <div className="deck-section-label">Your decks</div>
    <div className="deck-list">
      {decks.map((deck) => (
        <button key={deck.id} className="deck-card" onClick={() => onSelect(deck)}>
          <div className="deck-icon" style={{ background: deck.color + "22", color: deck.color }}>
            {deck.icon}
          </div>
          <div className="deck-info">
            <div className="deck-name">{deck.name}</div>
            <div className="deck-subject">{deck.subject}</div>
          </div>
          <div className="deck-meta">
            <div className="deck-count" style={{ color: deck.color }}>
              {deck.cards.length} cards
            </div>
            <div className="deck-arrow">→</div>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default DeckSelector;
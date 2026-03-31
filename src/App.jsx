import React, { useState } from "react";
import DeckSelector from "./components/DeckSelector";
import StudySession from "./components/StudySession";
import WelcomeScreen from "./components/WelcomeScreen";
import { useStreak } from "./hooks/useStreak";
import { DECKS } from "./data/decks";
import "./styles/global.css";

const App = () => {
  const [activeDeck, setActiveDeck] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const { streak, updateProgress } = useStreak();

  const handleDeckSelect = (deck) => setActiveDeck(deck);

  const handleSessionComplete = (correctCount) => {
    if (activeDeck) {
      updateProgress(activeDeck.id, correctCount);
    }
    setActiveDeck(null);
  };

  const handleBack = () => setActiveDeck(null);

  const handleStart = () => setIsStarted(true);

  if (!isStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (activeDeck) {
    return (
      <StudySession
        deck={activeDeck}
        streak={streak}
        onBack={handleBack}
        onComplete={handleSessionComplete}
      />
    );
  }

  return <DeckSelector decks={DECKS} streak={streak} onSelect={handleDeckSelect} />;
};

export default App;
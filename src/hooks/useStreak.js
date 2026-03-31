import { useState } from "react";

export const useStreak = () => {
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("memoir-streak");
    return saved ? JSON.parse(saved) : 0;
  });
  const [unlockedLevel, setUnlockedLevel] = useState(() => {
    const saved = localStorage.getItem("memoir-unlocked");
    return saved ? JSON.parse(saved) : 1;
  });
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem("memoir-best-score");
    return saved ? JSON.parse(saved) : 0;
  });

  const updateProgress = (deckId, score) => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("memoir-streak", JSON.stringify(newStreak));

    if (deckId >= unlockedLevel) {
      const next = deckId + 1;
      setUnlockedLevel(next);
      localStorage.setItem("memoir-unlocked", JSON.stringify(next));
    }

    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem("memoir-best-score", JSON.stringify(score));
    }
  };

  return { streak, unlockedLevel, bestScore, updateProgress };
};
import { useState, useCallback } from "react";

export const useFlashcard = (cards) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [results, setResults] = useState([]);
  const [sessionDone, setSessionDone] = useState(false);

  const currentCard = cards[currentIndex];
  const progress = currentIndex;
  const total = cards.length;

  const reveal = useCallback(() => setIsRevealed(true), []);

  const rate = useCallback(
    (rating) => {
      const newResults = [...results, { cardId: currentCard.id, rating }];
      setResults(newResults);
      if (currentIndex + 1 >= cards.length) {
        setSessionDone(true);
      } else {
        setCurrentIndex((i) => i + 1);
        setIsRevealed(false);
      }
    },
    [currentIndex, cards.length, currentCard, results]
  );

  const skip = useCallback(() => {
    if (currentIndex + 1 >= cards.length) {
      setSessionDone(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setIsRevealed(false);
    }
  }, [currentIndex, cards.length]);

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setIsRevealed(false);
    setResults([]);
    setSessionDone(false);
  }, []);

  const correctCount = results.filter((r) => r.rating === "easy").length;
  const sosoCount = results.filter((r) => r.rating === "soso").length;
  const forgotCount = results.filter((r) => r.rating === "forgot").length;

  return {
    currentCard,
    currentIndex,
    total,
    progress,
    isRevealed,
    sessionDone,
    results,
    correctCount,
    sosoCount,
    forgotCount,
    reveal,
    rate,
    skip,
    restart,
  };
};
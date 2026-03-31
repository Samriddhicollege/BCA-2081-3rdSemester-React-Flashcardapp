## Project Title

> Memoir – Smart Flashcard Learning Companion
Your daily practice companion: smart cards, instant feedback, and streak tracking.

---

## Student Information

* **Name:** Matina Shrestha
* **Roll Number:** 15
* **Course / Program:** BCA
* **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information

* **Instructor Name:** Mr. Dipak Shrestha
* **Course Title:** React Development / Full Stack Development
* **College Name:** Samriddhi College

---

## Project Overview

> Memoir is a modern, interactive flashcard application built to facilitate active recall and spaced repetition. Unlike static note-taking apps, Memoir engages users through a 3D-flipping card interface, adaptive rating systems, and gamified progress tracking.

The project demonstrates a deep understanding of React Custom Hooks, Advanced CSS Transitions, and Browser Storage APIs.
---

## Objectives

* Master Component Architecture: Breaking the UI into modular, reusable pieces (Cards, Progress Bars, Buttons) to follow professional Atomic Design principles.

* Implement Custom Logic: Using Custom Hooks (useFlashcard, useStreak) to separate the "brain" of the app from its visual "body."

* Ensure Data Persistence: Utilizing LocalStorage so that user streaks, scores, and unlocked levels are saved even after the browser is closed.

* Create High-Fidelity UI: Bridging the gap between web and mobile apps using 3D CSS transforms, glassmorphism, and smooth animations.

* Optimize Data Flow: Mastering the "React Way" by passing state and functions (props) through a clean, one-way component tree.
---

## Technologies Used



* React.js
* CSS
*  JavaScript
*  LocalStorage


## Key Features

* Interactive 3D Flashcards: A realistic card-flip experience using 3D CSS transforms for seamless study sessions.

*  Adaptive Rating System: Rate your knowledge level (Forgot, So-so, Easy) to get instant feedback and session summaries.

* Persistent Streak Tracking: Never lose progress. Your study streaks, unlocked levels, and high scores are saved automatically using LocalStorage.

* Curated Subject Decks: Includes pre-built decks for IT, Nature, and Mathematics with specialized formatting.d

---



## Installation & Setup

```bash
# Clone repository
git clone https://github.com/Samriddhicollege/BCA-2081-3rdSemester-React-Flashcardapp.git

# Go to project folder
cd rms-project

# Install dependencies
npm install

# Run frontend
npm start

# Run backend (if applicable)
go run main.go
```

---

## Project Structure

```
/FLASHCARD
│
├── src/
│   ├── components/
       ├── DeckSelector.jsx
       ├── FlashCard.jsx
       ├── ProgressBar.jsx
       ├── RatingButon.jsx
       ├── SessionSummary.jsx
       ├── StudySession.jsx
       ├── WelcomeScreen.jsx
                 
│   ├── hooks/ 
       ├── useFlashcard.js
       ├── useStreak.js
         
│   ├── styles/      
       ├──   DeckSelector.css
       ├── FlashCard.css
       ├── ProgressBar.css
       ├── RatingButon.css
       ├── SessionSummary.sss
       ├── StudySession.css
       ├── WelcomeScreen.css

│   ├── data/    
       ├── decks.js

 ├── App.jsx
 ├── index.css
 ├── main.jsx
├── public/             
└── README.md

---

## GitHub & Live Demo

* **GitHub Repository:** https://github.com/Samriddhicollege/BCA-2081-3rdSemester-React-Flashcardapp.git
* **Live URL (if deployed):** https://memoir-flashcard.vercel.app/

---



---

## Challenges Faced and learning

*3D Perspective: Implementing the 3D flip required careful management of backface-visibility and transform-style to ensure the card didn't flicker during rotations.

*Logic Separation: Moving session logic into custom hooks helped keep the UI components clean and reusable, a practice essential for professional React development.

*Lazy State Initialization: Learned how to optimize performance by initializing state from localStorage using a function, ensuring the disk is only read during the initial mount.
---

## Future Enhancements

* Custom Deck Creator: Allowing users to add, edit, and delete their own flashcard sets.

*Cloud Synchronization: Integrating a backend (Firebase) to sync study progress across multiple devices.

*Spaced Repetition Algorithm: Implementing a version of the Leitner system to show "Forgot" cards more frequently.
---

## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.

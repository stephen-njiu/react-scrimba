import React from "react";
import languages from "./language";
import { useState, useEffect, useRef } from "react";
import clsx from 'clsx'
import { getFarewellText } from "./utils";
import Confetti from 'react-confetti'
import words from "./words";


export default function App(){
// costants
const width = window.innerWidth
const height = window.innerHeight
//
const randomWord = words[Math.floor(Math.random() * words.length)]
// state values
  const [letter, setLetter] = useState(randomWord)
  const [guessedLetter, setGuessedLetters] = useState([]) 
  const [isTimeUp, setIsTimeUp] = useState(false)
  const newGameBtnRef = useRef(null)

const farewellRef = useRef(null);
const lastWrongGuessCountRef = useRef(0);


// static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

// Derived values
  const wrongGuessCount = guessedLetter.filter(lt => !letter.includes(lt)).length

  const isGameWon = letter.split("").every(l => guessedLetter.includes(l))
  const isGameLost = wrongGuessCount >= languages.length -1
  const isGameOver = isGameWon || isGameLost || isTimeUp

  const remainingAttempts = (languages.length - 1) - wrongGuessCount;
  const [timeLeft, setTimeLeft] = useState(60)



  function addGuessedLetter(letter) {
    if(isGameOver) return; // prevent further input if the game is over
    setGuessedLetters(prevLetters => prevLetters.includes(letter)? prevLetters : [...prevLetters, letter])
  }

  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount
    const styles = {
      backgroundColor:lang.backgroundColor,
      color:lang.color
    }
    const className = clsx("chip", isLanguageLost && "lost")
    return (
      <span style={styles}
       key={lang.name} 
       className={className}>
        {lang.name}
        </span>
    )
  })

  const eachLetter = letter.split("").map((l, index) => {
    const wasGuessed = guessedLetter.includes(l);
    const letterClass = isGameOver ? (wasGuessed ? 'correct' : 'wrong') : '';
  
    return (
      <span key={index} className={letterClass}>
        {(isGameOver || wasGuessed) ? l.toUpperCase() : ''}
      </span>
    );
  });
  

  const alphaElements = alphabet.split("").map((a, index) => {
    const isGuessed = guessedLetter.includes(a)
    const isCorrect = isGuessed && letter.includes(a)
    const isWrong = isGuessed && !letter.includes(a)

    const className = clsx({
      correct:isCorrect,
      wrong:isWrong
    })
    return (
    <button className={className} key={index} onClick={
      () => addGuessedLetter(a)}>{a.toUpperCase()}</button>
  )})

const gameStatusClass = clsx("game-status", {
  won:isGameWon,
  lost:isGameLost,
  timeup:isTimeUp
})

// add keyboard press for the users instead of using just the mouse

useEffect(() => {
  function handleKeyPress(e){
    const key = e.key.toLowerCase()
    if(alphabet.includes(key)){
      addGuessedLetter(key)
    }
  }

  window.addEventListener("keydown", handleKeyPress)
  return () => {
    window.removeEventListener("keydown",handleKeyPress)
  }
},[guessedLetter])

useEffect(() => {
  if (isGameOver && newGameBtnRef.current){
    newGameBtnRef.current.focus()
  }
},[isGameOver])

useEffect(() => {
  if (
    wrongGuessCount > 0 &&
    wrongGuessCount !== lastWrongGuessCountRef.current
  ) {
    farewellRef.current = getFarewellText(languages[wrongGuessCount - 1].name);
    lastWrongGuessCountRef.current = wrongGuessCount;
  }
}, [wrongGuessCount]);



function renderText() {
  if (isGameOver) {
    if (isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well Done!</p>
        </>
      )
    } else if (isTimeUp) {
      return (
        <>
          <h2>Time's Up!</h2>
          <p>You took too long. Assembly wins this round ⏱️</p>
        </>
      )
    } else {
      return (
        <>
          <h2>Game Over!</h2>
          <p>You Lose! Better start learning Assembly 🤣</p>
        </>
      )
    }
  } else {
    return (
      guessedLetter.length > 0 && 
      wrongGuessCount > 0  &&
      farewellRef.current &&
      <p className="farewell">
        {farewellRef.current}
      </p>
    )
  }
}




  function startGame(){
    const newWord = words[Math.floor(Math.random() * words.length)];
    setGuessedLetters([]);
    setLetter(newWord);
    setTimeLeft(60);
    setIsTimeUp(false)
  }
  
  useEffect(() => {
    if (isGameOver) return;
  
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);  // Set game over due to time
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [letter]);
  



  return (  
    <main>
      {isGameWon && <Confetti 
        width={width}
        height={height}
        gravity={0.25}
        numberOfPieces={200}
      />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within {languages.length -1} attempts to keep the programming world safe from Assembly</p>
      </header>

      <section className={gameStatusClass}>
        {renderText()}
      </section>

      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {eachLetter}
      </section>
      <section className="all-buttons">
        {alphaElements}
      </section>
      <section className="endgame">
        {isGameOver && <button onClick={startGame} ref={newGameBtnRef}>New Game</button>}
      </section>
      {!isGameOver && (
  <section className="status-bar">
    <p className="time-left">Time Left: {timeLeft}s</p>
    <p className="attempts">Remaining Attempts: {remainingAttempts}</p>
  </section>
)}

    </main>
  )
}


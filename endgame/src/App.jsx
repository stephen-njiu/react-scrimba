import React from "react";
import languages from "./language";
import { useState } from "react";
import clsx from 'clsx'

export default function App(){
// state values
  const [letter, setLetter] = useState("react")
  const [guessedLetter, setGuessedLetters] = useState([])

// static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

// Derived values
  const wrongGuessCount = guessedLetter.filter(lt => !letter.includes(lt)).length

  const isGameWon = letter.split("").every(l => guessedLetter.includes(l))
  const isGameLost = wrongGuessCount >= languages.length -1
  const isGameOver = isGameWon || isGameLost





  function addGuessedLetter(letter) {
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

  const eachLetter = letter.split("").map((l, index) => (
    <span key={index}>
      {guessedLetter.includes(l)?l.toUpperCase():''}
      </span>
  ))

  const alphaElements = alphabet.split("").map((a, index) => {
    const isGuessed = guessedLetter.includes(a)
    const isCorrect = isGuessed && letter.includes(a)
    const isWrong = isGuessed && !letter.includes(a)

    const className = clsx({
      correct:isCorrect,
      wrong:isWrong
    })
    return (
    <button className={className} key={index} onClick={() => addGuessedLetter(a)}>{a.toUpperCase()}</button>
  )})

const gameStatusClass = clsx("game-status", {
  won:isGameWon,
  lost:isGameLost
})

  
  return (  
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly</p>
      </header>
      <section className={gameStatusClass}>

      {isGameOver ? (
        isGameWon ? (
          <>
            <h2>You win!</h2>
            <p>Well done!</p>
          </>
        ) : (
        <>
          <h2>Game Over!</h2>
          <p>You Lose! Better start learning Assembly 🤣</p>
        </>
        )
      ) : (null)}


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
        {isGameOver && <button>New Game</button>}
      </section>
    </main>
  )
}


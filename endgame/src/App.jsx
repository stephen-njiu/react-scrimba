import React from "react";
import languages from "./language";
import { useState } from "react";
import clsx from 'clsx'

export default function App(){

  const [letter, setLetter] = useState("react")
  const [guessedLetter, setGuessedLetters] = useState([])


  const alphabet = "abcdefghijklmnopqrstuvwxyz"


  const wrongGuessCount = guessedLetter.filter(lt => !letter.includes(lt)).length

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



  
  return (  
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly</p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done!</p>
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
        <button>End Game</button>
      </section>
    </main>
  )
}


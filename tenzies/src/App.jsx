import React, { useEffect, useRef } from 'react'
import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App(){

  const width = window.innerWidth
  const height = window.innerHeight

  const [dice, setDice] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null)

  const gameWon = dice.every(die => die.isHeld) && 
  dice.every(die => die.value === dice[0].value)


 useEffect(() => {
    if(gameWon){
      buttonRef.current.focus()
    }
 }, [gameWon])

  function generateAllNewDice () {
    return new Array(10).fill(0)
    .map(() => ({
      value: Math.floor(Math.random() * 10),
      isHeld: false,
      id: nanoid()
      }))    
  }

  function rollDice() {
    if (!gameWon){
      setDice(oldDice => oldDice.map(die =>
          die.isHeld? die :
          {...die, value: Math.floor(Math.random() * 10)}
        ))
      } else{
        setDice(generateAllNewDice())
      }
    }

  function clicked(id){
  setDice(prevDice => prevDice.map(btn => (
    btn.id===id? {...btn,isHeld:!btn.isHeld} : btn
  )))
  }


  const diceElements =dice.map(dieObj => <Die 
    clicked={() => clicked(dieObj.id)} 
    isHeld={dieObj.isHeld} 
    id = {dieObj.id} 
    key= {dieObj.id}
     value={dieObj.value}
      />)

  return (
    <main>
      {gameWon && <Confetti 
        width={width}
        height={height}
        gravity={0.25}
        numberOfPieces={200}
      />}
      {gameWon && (
        <div aria-live='assertive' aria-atomic='true' className='sr-only'>
          <p>Congratulations! You Won! Press New Game button to Play again.</p>
        </div>
)}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button ref={buttonRef} onClick={rollDice} className='roll-dice'>{gameWon?'New Game':'Roll'}</button>
    </main>
  )
}



export default App
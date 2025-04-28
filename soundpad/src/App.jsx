import React from 'react'

import padsData from "./index" // get the data
import Pad from "./Pad" // get the button element



export default function App (){
  // create a unified states which updates all the buttons
  const [pads, setPad] = React.useState(padsData)

  function toggle(id){
    setPad(prevPads => prevPads.map(item =>{
       return item.id === id? {...item, on:!item.on}: item }
      ))
  }


  const buttonElements = pads.map(pad=>(
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />

  ))
  return (


    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}


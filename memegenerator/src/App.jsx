import React, { useState } from "react";
import { useEffect } from "react";

export default function App(){
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0)
  
  useEffect(function() {
    console.log("use effect ran")
  },[count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
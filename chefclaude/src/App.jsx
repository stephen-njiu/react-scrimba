import React from "react";
import Recipe from "./componenets/Recipe";
import Ingredients from "./componenets/Ingredients";



export default function App() {
  
  const [ingredients, setIngredients] = React.useState([])
  
  const [clickRecipe, setRecipe] = React.useState(false)

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    if (!newIngredient){return}
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  function getRecipe(){
    setRecipe(true)
    // console.log(clickRecipe)
  }

  return (
    <main>
      <form action={addIngredient}>
        <input type="text" placeholder="rice" name="ingredient" aria-label="Add ingredient" />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && <Ingredients getRecipe={getRecipe} ingredients={ingredients} />}
      
      {clickRecipe === true && <Recipe />}
    </main>
  )
}
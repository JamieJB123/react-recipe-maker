import { useState } from 'react'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipeFromMistral } from '../ai'

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipe, setRecipe] = useState("")

    async function getRecipe(ingredients) {
        console.log("button clicked")
        const result = await getRecipeFromMistral(ingredients)
        setRecipe(result)
    }

    return (
        <main>
            <form action={submitIngredient}className="ingredient-form">
                <input name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" type="text"></input>
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
            <Ingredients ingredients={ingredients} getRecipe={getRecipe}/>}

            {recipe &&
            <Recipe recipe={recipe}/>}
        </main>
    )
}

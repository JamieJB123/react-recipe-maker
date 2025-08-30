import { useState } from 'react'
import Ingredients from './Ingredients'
import Recipe from './Recipe'

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientElements = ingredients.map((item) => {
        return <li key={item}>{item}</li>
    })

    const [recipeShown, setRecipeShown] = useState(false)

    function getRecipe() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form action={submitIngredient}className="ingredient-form">
                <input name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" type="text"></input>
                <button>+ Add ingredient</button>
            </form>
            <Ingredients ingredientElements={ingredientElements} getRecipe={getRecipe}/>

            {recipeShown &&
            <Recipe />}
        </main>
    )
}

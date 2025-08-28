import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientElements = ingredients.map((item) => {
        return <li key={item}>{item}</li>
    })

    return (
        <main>
            <form action={submitIngredient}className="ingredient-form">
                <input name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" type="text"></input>
                <button>+ Add ingredient</button>
            </form>
            {ingredientElements.length > 0 &&
            <section className="ingredients-section">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientElements}
                </ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
            }
        </main>
    )
}

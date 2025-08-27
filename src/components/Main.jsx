import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log("Form submitted!");
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientElements = ingredients.map((item) => {
        return <li key={item}>{item}</li>
    })


    return (
        <main>
            <form onSubmit={onSubmitHandler}className="ingredient-form">
                <input name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" type="text"></input>
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientElements}
            </ul>
        </main>
    )
}

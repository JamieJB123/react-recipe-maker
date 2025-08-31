export default function Ingredients(props) {
    const ingredientElements = props.ingredients.map((item) => {
        return <li key={item}>{item}</li>
    })
    return (
        <section className="ingredients-section">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientElements}
            </ul>
            { props.ingredients.length > 3 &&
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={() => props.getRecipe(props.ingredients)}>Get a recipe</button>
            </div>
            }
        </section>
    )
}

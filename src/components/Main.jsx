export default function Main() {

    const ingredients = []

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log("Form submitted!");
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
    }

    const ingredientElements = ingredients.map((item) => {
        return <li>{item}</li>
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

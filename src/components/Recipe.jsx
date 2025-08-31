import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
    return (
        <section className="recipe-section" aria-live="polite">
            <h2>Recipe Maker Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </article>
        </section>
    )
}

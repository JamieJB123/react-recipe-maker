import chefImage from '/src/assets/chef-image.png'

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-elements">
                <img src={chefImage} alt="Chef icon" className="header-image"></img>
                <h1 className="header-title">Recipe Maker</h1>
            </div>
        </header>
    )
}

function Header() {
    return (
        <nav className="#ff5252 red accent-2">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">React Shop</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a 
                        href="https://github.com/Yulya163/shop-project" 
                        target="blank" 
                        rel="noreferrer"
                    >Repo
                    </a>
                </li>        
            </ul>
            </div>
        </nav>
    )    
}

export {Header};
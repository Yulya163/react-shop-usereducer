function Footer() {
    return <footer className="page-footer #ff8a80 red accent-1">        
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a 
                className="grey-text text-lighten-4 right" 
                href="https://github.com/Yulya163/shop-project" 
                target="blank" 
                rel="noreferrer"
            >Repo</a>
            </div>
        </div>
    </footer>
}
export {Footer};
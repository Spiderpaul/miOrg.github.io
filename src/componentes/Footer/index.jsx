import "./Footer.css"

const Footer = () => {
    return <footer className="footer">
        <div className="logo">
            <img className="img-logo" src="img/paul-ico.jpg" alt="Logo Paul" />
        </div>
        <div className="redes">
            <a href="#">
                <img src="img/github.png" alt="GitHub" />
            </a>
            <a href="#">
                <img src="img/linkedin.png" alt="GitHub" />
            </a>
            <a href="#">
                <img src="img/curriculum.png" alt="GitHub" />
            </a>
        </div> 
    </footer>
}

export default Footer
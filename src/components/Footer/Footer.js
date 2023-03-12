import "./Footer.css"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer_item">
                <a className="footer_item-item" target="_blank" href="https://www.instagram.com/Mundogamer/" rel="noopener noreferrer"><i
                    className="footer_item-icon fa-brands fa-instagram-square"></i>Seguinos</a>
            </div>
            <div className="footer_item">
                <a className="footer_item-item" href="mundogamer2022@gmail.com" rel="noopener noreferrer"><i
                    className="footer_item-icon fa-solid fa-envelope"></i>Contacto</a>
            </div>
            <div className="footer_item">
                <p className="footer_item-item footer-decoration"><i className="footer_item-icon fa-solid fa-copyright" rel="noopener noreferrer"></i>Desde 2022</p>
            </div>
        </footer>
    )
}

export default Footer
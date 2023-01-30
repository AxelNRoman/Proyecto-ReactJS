import React from "react"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return <div>
        <ul className="nav">
            <li className="nav-item">
                <p className="Word1"> MUNDO GAMER </p>
            </li>
            <div className="nav-item--items">
                <li className="nav-item">
                    <a className="LinkedWord" href="NOSOTROS.HTML">NOSOTROS</a>
                </li>
                <li className="nav-item">
                    <a className="LinkedWord" href="CATÁLOGO.HTML">CATÁLOGO</a>
                </li>
                <li className="nav-item">
                    <CartWidget />
                </li>
            </div>
        </ul>
    </div>
}

export default NavBar
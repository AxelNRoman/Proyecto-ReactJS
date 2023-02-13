import React from "react"
import "./NavBar.css"
import Cart from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return <div>
        <ul className="nav">
            <Link to="/" className="navbar_decoration">
                <p className="Word1"> MUNDO GAMER </p>
            </Link>
            <div className="nav-item--items">
            <li className="nav-item">
                    <Link className="nav-decoration" to={"/category/RPG"}>
                        <button className="LinkedWord" href="RPG">RPG</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-decoration" to={"/category/Carreras"}>
                        <button className="LinkedWord" href="Carreras">Carreras</button>
                    </Link>
                </li>
                <li className="nav-item">
                 <button className="carrito">
                    <Cart quantity={0}/>
                 </button>
                </li>
            </div>
        </ul>
    </div>
}

export default NavBar
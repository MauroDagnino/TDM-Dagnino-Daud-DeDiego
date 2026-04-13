import React from "react";
import './header.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
function Header() {
    return(
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link to={"/Home"} class="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Peliculas"} class="nav-link">Películas</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Series"} class="nav-link">Series</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Favoritos"} class="nav-link">Favoritos</Link>
                </li>
                <li className="nav-item ml-auto">
                    <Link to={"/Cuenta"} class="nav-link">Registro</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Login"} class="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
} 

export default Header;
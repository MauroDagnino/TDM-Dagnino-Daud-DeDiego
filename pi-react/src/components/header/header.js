import React from "react";
import './header.css'
function Header() {
    return(
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="movies.html">Películas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="series.html">Series</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="favorites.html">Favoritas</a>
                </li>
                <li className="nav-item ml-auto">
                    <a className="nav-link" href="register.html">Registro</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="login.html">Login</a>
                </li>
            </ul>
        </nav>
    );
} 

export default Header;
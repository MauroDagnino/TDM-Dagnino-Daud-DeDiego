import React from "react";
import './Header.css'
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header() {
    const sesion = cookies.get("sesion")
    return(
        <><h1>UdeSA Movies</h1>
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Peliculas"} className="nav-link">Películas</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Series"} className="nav-link">Series</Link>
                </li>
                {sesion == null ? (
                    <>
                        <li className="nav-item ml-auto">
                            <Link to={"/Cuenta"} className="nav-link">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Login"} className="nav-link">Login</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link to={"/Favoritos"} className="nav-link">Favoritos</Link>
                        </li>
                        <li className="nav-item ml-auto">
                            <Link to={"/Logout"} className="nav-link">Cerrar sesión</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
        </>
    );
} 

export default withRouter(Header);
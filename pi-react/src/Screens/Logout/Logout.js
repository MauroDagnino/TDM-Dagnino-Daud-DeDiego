import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        cookies.remove('sesion', { path: "/" });
        this.props.history.push("/Login");
    }

    render() {
        return (
            <div className="container mt-5 text-center">
                <h2 className="alert alert-info">Mi Perfil</h2>
                <p>¿Queres cerrar tu sesion?</p>
                <button onClick={() => this.logout()}> Cerrar Sesión </button>
            </div>
        );
    }
}

export default withRouter(Logout);
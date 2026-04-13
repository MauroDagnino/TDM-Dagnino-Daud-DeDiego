import React, { Component } from "react";
import "./FormCuenta.css"

class FormCuenta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enviado: false,
            validarEmail: false,
        };
    }

    evitarSubmit(e) {
        e.preventDefault();
        this.setState({ enviado: true });

        if (this.state.password.length >= 6) {
            let emailUsado = localStorage.getItem("emailUsuario");

            if (this.state.email === emailUsado) {
                this.setState({ validarEmail: true });
                console.log("email usado");
                return;
            }

            localStorage.setItem("emailUsuario", this.state.email);
            localStorage.setItem("passwordUsuario", this.state.password);
            console.log(localStorage);

            this.setState({
                email: '',
                password: '',
                enviado: false,
                validarEmail: false
            });

            
        }

        console.log("el formulario se envió");
    }

    controlarEmail(e) {
        this.setState({ email: e.target.value });
        console.log("email: " + this.state.email);
    }

    controlarPassword(e) {
        this.setState({ password: e.target.value });
        console.log("password: " + this.state.password);
    }

    render() {
        return (
            <form className="form-cuenta" onSubmit={(event) => this.evitarSubmit(event)}>

                <div>
                    <label>Correo Electrónico </label>
                    <input
                        className="campo-forms"
                        type="text"
                        placeholder="Ingresá tu email"
                        onChange={(event) => this.controlarEmail(event)}
                        value={this.state.email}
                    />
                    {this.state.email.length === 0 && this.state.enviado ? <p className="error">El campo está vacío</p> : ""}
                    {this.state.validarEmail ? <p className="error">Este correo ya está asociado a una cuenta</p> : ""}
                </div>

                <div>
                    <label>Contraseña </label>
                    <input
                        className="campo-forms"
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        onChange={(event) => this.controlarPassword(event)}
                        value={this.state.password}
                    />
                    {this.state.password.length === 0 && this.state.enviado ? <p className="error">El campo está vacío</p> : ""}
                </div>

                {this.state.password.length !== 0 && this.state.password.length < 6 && this.state.enviado ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : ""}

                <input className="boton" type="submit" value="crear cuenta" />

                <a className="ya-tengo-cuenta" href="/login">¿Ya tenés cuenta? Iniciar sesión</a>

            </form>
        )
    }
}

export default FormCuenta
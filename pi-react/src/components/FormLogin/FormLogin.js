import React, { Component } from "react";
import "../FormCuenta/FormCuenta.css"

 
class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enviado: false,
            credencialesIncorrectas: false,
        };
    }
 
    evitarSubmit(e) {
        e.preventDefault();
        this.setState({ enviado: true });
 
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            return;
        }
 
        let emailGuardado = localStorage.getItem("emailUsuario");
        let passwordGuardada = localStorage.getItem("passwordUsuario");
 
        if (this.state.email === emailGuardado && this.state.password === passwordGuardada) {
            document.cookie = "sesion=" + this.state.email + "; path=/";
            console.log("sesión creada");
 
            this.setState({
                email: '',
                password: '',
                enviado: false,
                credencialesIncorrectas: false,
            });
 
        } else {
            this.setState({ credencialesIncorrectas: true });
            console.log("credenciales incorrectas");
        }
    }
 
    controlarEmail(e) {
        this.setState({ email: e.target.value });
    }
 
    controlarPassword(e) {
        this.setState({ password: e.target.value });
    }
 
    render() {
        return (
            <div className="conetenedor-padre">
                <article>
                    <h2>Iniciar sesión</h2>
                    <form className="form-cuenta" onSubmit={(event) => this.evitarSubmit(event)}>
 
                        <div>
                            <label>Correo Electrónico</label>
                            <input
                                className="campo-forms"
                                type="text"
                                placeholder="Ingresá tu email"
                                onChange={(event) => this.controlarEmail(event)}
                                value={this.state.email}
                            />
                            {this.state.email.length === 0 && this.state.enviado ? <p className="error">El campo está vacío</p> : ""}
                        </div>
 
                        <div>
                            <label>Contraseña</label>
                            <input
                                className="campo-forms"
                                type="password"
                                placeholder="Ingresá tu contraseña"
                                onChange={(event) => this.controlarPassword(event)}
                                value={this.state.password}
                            />
                            {this.state.password.length === 0 && this.state.enviado ? <p className="error">El campo está vacío</p> : ""}
                        </div>
 
                        {this.state.credencialesIncorrectas ? <p className="error">Credenciales incorrectas</p> : ""}
 
                        <input className="boton" type="submit" value="Iniciar sesión" />
 
                        <a className="ya-tengo-cuenta" href="/Cuenta">¿No tenés cuenta? Registrarse</a>
 
                    </form>
                </article>
            </div>
        )
    }
}
 
export default FormLogin
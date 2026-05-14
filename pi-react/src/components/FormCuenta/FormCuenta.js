import { useState } from "react";
import "./FormCuenta.css"

function FormCuenta(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [validarEmail, setValidarEmail] = useState(false);

    function evitarSubmit(e) {
        e.preventDefault();
        setEnviado(true);

        if (password.length >= 6) {
            let emailUsado = localStorage.getItem("emailUsuario");

            if (email === emailUsado) {
                setValidarEmail(true)
                console.log("email usado");
                return;
            }

            localStorage.setItem("emailUsuario", email);
            localStorage.setItem("passwordUsuario", password);
            console.log(localStorage);

            setEmail("")
            setPassword("")
            setValidarEmail(false)
            setEnviado(false)
            window.location.href = "/login";
            
        }
        return (
        console.log("el formulario se envió")
        )
    }

    function controlarEmail(e) {
        setEmail(e.target.value);
        return (
        console.log("email: " + email)
        )
    }

    function controlarPassword(e) {
        setPassword(e.target.value);
        return (
        console.log("password: " + password)
        )
    }

    return (
            <form className="form-cuenta" onSubmit={(event) => evitarSubmit(event)}>

                <div>
                    <label>Correo Electrónico </label>
                    <input
                        className="campo-forms"
                        type="text"
                        placeholder="Ingresá tu email"
                        onChange={(event) => controlarEmail(event)}
                        value={email}
                    />
                    {email.length === 0 && enviado ? <p className="error">El campo está vacío</p> : ""}
                    {validarEmail ? <p className="error">Este correo ya está asociado a una cuenta</p> : ""}
                </div>

                <div>
                    <label>Contraseña </label>
                    <input
                        className="campo-forms"
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        onChange={(event) => controlarPassword(event)}
                        value={password}
                    />
                    {password.length === 0 && enviado ? <p className="error">El campo está vacío</p> : ""}
                </div>

                {password.length !== 0 && password.length < 6 && enviado ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : ""}

                <input className="boton" type="submit" value="crear cuenta" />

                <a className="ya-tengo-cuenta" href="/login">¿Ya tenés cuenta? Iniciar sesión</a>

            </form>
        )

}

export default FormCuenta
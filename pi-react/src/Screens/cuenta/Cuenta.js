import React from "react";
import FormCuenta from "../../components/FormCuenta/FormCuenta";


function Cuenta() {
    return (
        <section className="conetenedor-padre">
            <article className="articulo-formulario">
                <h2>Crear cuenta</h2>
                <FormCuenta/>
            </article>
            </section>
    )
}

export default Cuenta
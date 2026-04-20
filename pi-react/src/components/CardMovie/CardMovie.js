import React, { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Cookies from "universal-cookie"

const cookies = new Cookies()

class CardMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "",
            clase: "Oculto",
            textoBoton: "Ver menos",
            favorito: false
        }
    }
    ocultar() {
        if (this.state.clase === "oculto") {
            this.setState({
                clase: "",
                textoBoton: "Ver menos"
            })
        } else {
            this.setState({
                clase: "oculto",
                textoBoton: "Ver mas"
            })
        }
    }

    agregarFavP() {
        let idFav = this.props.id
        let storage = localStorage.getItem("favoritosP")
        if (storage != null) {
            let storageParse = JSON.parse(storage)
            storageParse.push(idFav)
            let storageString = JSON.stringify(storageParse)
            localStorage.setItem("favoritosP", storageString)
            this.setState({ favorito: true })
        } else {
            let arrayIDs = []
            arrayIDs.push(idFav)
            let arrayString = JSON.stringify(arrayIDs)
            localStorage.setItem("favoritosP", arrayString)
            this.setState({ favorito: true })
        }

    }

    sacarFavP() {
        let idFav = this.props.id
        let storage = localStorage.getItem("favoritosP")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let storageFiltrado = storageParseado.filter(id => id !== idFav)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritosP", storageString)
            this.setState({ favorito: false })
        }
    }
    componentDidMount() {
        let storage = localStorage.getItem("favoritosP")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let estaEnFav = storageParseado.includes(Number(this.props.id))

            this.setState({
                favorito: estaEnFav
            })
        }
    }



    render() {
        const cookie= cookies.get("sesion")
        return (
            <article className="single-card-movie">
                <img src={this.props.foto} className="card-img-top"
                    alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>

                    <section className={this.state.clase}>

                        <p className="card-text">{this.props.desc}</p>
                    </section>
                    <button className='more' onClick={() => this.ocultar()}>
                        {this.state.textoBoton}
                    </button>

                    <Link to={"/DetallePeli/" + this.props.id}><button className="btn btn-primary">Ver detalle</button></Link>

                     {cookie ? (
                       <>
                         <button className={this.state.favorito === true ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => this.agregarFavP()}>Agregar a Favoritos</button>
                         <button className={this.state.favorito === false ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => this.sacarFavP()}>Quitar de Favoritos</button>
                       </>
                    ) : (
                      <p></p>
                    )
                    }
        </div>
      </article>
        )
    }
}

export default CardMovie
import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import Cookies from "universal-cookie";

const cookies = new Cookies()

class DetalleSerie extends Component {
    constructor(props) {
      super(props)
      this.state = {
        personaje: "",
        favorito: false
      }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))

    }

    agregarFavS() {
    let idFav = this.props.match.params.id
    let storage = localStorage.getItem("favoritosS")
    if (storage != null) {
        let storageParse = JSON.parse(storage)
        storageParse.push(Number(idFav))
        localStorage.setItem("favoritosS", JSON.stringify(storageParse))
        this.setState({ favorito: true })
    } else {
        let arrayIDs = [Number(idFav)]
        localStorage.setItem("favoritosS", JSON.stringify(arrayIDs))
        this.setState({ favorito: true })
    }
}

sacarFavS() {
    let idFav = this.props.match.params.id
    let storage = localStorage.getItem("favoritosS")
    if (storage !== null) {
        let storageParseado = JSON.parse(storage)
        let storageFiltrado = storageParseado.filter(id => id !== Number(idFav))
        localStorage.setItem("favoritosS", JSON.stringify(storageFiltrado))
        this.setState({ favorito: false })
    }
}

    render() {
        const cookie = cookies.get("sesion")
        return (
            <>
                {this.state.personaje ? (
                    <>
                        <h2 className="alert alert-warning">{this.state.personaje.original_title}</h2>
                        <section className="row">
                            <img className="col-md-6" src={"https://image.tmdb.org/t/p/w342" + this.state.personaje.poster_path} alt=""/>
                            <section className="col-md-6 info">
                                <h3>Descripción</h3>
                                <p className="description">{this.state.personaje.overview}</p>
                                <p className="mt-0 mb-0" id="release-date"><strong>Genero:</strong>{this.state.personaje.genres[0].name}</p>
                                <p className="mt-0 mb-0" id="release-date"><strong>Rating:</strong>{this.state.personaje.vote_average}</p>
                                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.state.personaje.release_date}</p>
                                <p className="mt-0 mb-0" id="episodes"><strong>Duracion:</strong>{this.state.personaje.runtime}</p>
                                {cookie ? (
                                  <>
                                    <button className={this.state.favorito === true ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => this.agregarFavS()}>Agregar a Favoritos</button>
                                    <button className={this.state.favorito === false ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => this.sacarFavS()}>Quitar de Favoritos</button>
                                  </>
                                ) : (
                                  <p></p>
                                )}
                            </section>
                            
                        </section>
                    </>
                ) : (
                    <Loader/>
                )}
            </>
        )
    }
}

export default DetalleSerie
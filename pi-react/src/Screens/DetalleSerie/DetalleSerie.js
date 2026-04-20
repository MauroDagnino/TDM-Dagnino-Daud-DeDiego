import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personaje: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState({ personaje: data }))
            .catch(error => console.log(error))

        
    }

    render() {
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
                                <button className="btn alert-primary">Favoritos</button>
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
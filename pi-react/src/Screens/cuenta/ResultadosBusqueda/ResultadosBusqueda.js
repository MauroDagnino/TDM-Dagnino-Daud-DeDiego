import React, { Component } from 'react';
import Resultado from '../../../components/resultados/resultados';
import Loader from '../../../components/loader/loader'

class ResultadosBusqueda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: true
    };
  }

  componentDidMount() {
    const {busqueda,type} = this.props.match.params;

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ2ZTNlZjc5Y2YzYTFjMDllZTlkOWVhZjlhMDg4MyIsIm5iZiI6MTc3NDkwNjE5NS44MDQsInN1YiI6IjY5Y2FlYjUzZGQ5ZGQ2ZDliODFlZDRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L5lPgxUWAbh07oUV2MgXYG8EeHDPg1RYU8e8u9koL-4'
    }
    };

    fetch(`https://api.themoviedb.org/3/search/${type}?query=${busqueda}`, options)
    .then(res => res.json())
    .then(res => this.setState({ 
      resultados: res.results,
      cargando: false
    }))
    .catch(err => console.error(err));

}

    render() {
        if (this.state.cargando) {
            return <Loader/>
        }
        return (
        <div>
            {this.state.resultados.map(pelicula => (
            <Resultado>
                key={pelicula.id}
                title={pelicula.title}
                poster_path={pelicula.poster_path}
            </Resultado>
            ))}
        </div>
        );
  }
}
  
export default ResultadosBusqueda
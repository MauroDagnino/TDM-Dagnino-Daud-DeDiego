import React, { Component } from 'react';
import Resultado from '../../components/Resultados/Resultados';
import Loader from '../../components/Loader/Loader'
import CardNMP from '../../components/CardMNP/CardMNP';
import CardSAT from '../../components/CardSAT/CardSAT';

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
      const {type} = this.props.match.params
        if (this.state.cargando) {
            return <Loader/>
        }
        return (
    <div>
      {this.state.resultados.map((item) => (
        type === 'movie' ? (
          <CardNMP
            key={item.id}
            id={item.id}
            nombre={item.title}
            foto={"https://image.tmdb.org/t/p/w342" + item.poster_path}
            desc={item.overview}
          />
        ) : (
          <CardSAT
            key={item.id}
            id={item.id}
            nombre={item.name}
            imagen={"https://image.tmdb.org/t/p/w342" + item.poster_path}
            desc={item.overview}
          />
        )
      ))}
    </div>
  );
}
}
export default ResultadosBusqueda
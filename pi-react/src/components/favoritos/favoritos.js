import React, { Component } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import CardSAT from '../CardSAT/CardSAT';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function tieneSession() {
  return cookies.get('sesion') !== undefined;
}

class Favoritos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      series: []
    };
  }

  componentDidMount() {
    if (!tieneSession()) {
      this.props.history.push('/Login');
      return;
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ2ZTNlZjc5Y2YzYTFjMDllZTlkOWVhZjlhMDg4MyIsIm5iZiI6MTc3NDkwNjE5NS44MDQsInN1YiI6IjY5Y2FlYjUzZGQ5ZGQ2ZDliODFlZDRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L5lPgxUWAbh07oUV2MgXYG8EeHDPg1RYU8e8u9koL-4'
      }
    };

    const idsPeliculas = JSON.parse(localStorage.getItem('favoritosP')) || [];
    idsPeliculas.map(id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then(res => res.json())
        .then(data => {
            this.setState(prev => {
        if (prev.peliculas.find(p => p.id === data.id)) return prev
        return { peliculas: [...prev.peliculas, data] }
    })
        });
    });

    const idsSeries = JSON.parse(localStorage.getItem('favoritosS')) || [];
    idsSeries.map(id => {
      fetch(`https://api.themoviedb.org/3/tv/${id}`, options)
        .then(res => res.json())
        .then(data => {
            this.setState(prev => {
        if (prev.series.find(s => s.id === data.id)) return prev
        return { series: [...prev.series, data] }
    })
    });
    });
  }

  render() {
    return (
      <div>
        <h2>Películas favoritas</h2>
        <section className='cards'>
        {this.state.peliculas.length === 0
          ? <p>No tenés películas favoritas.</p>
          : this.state.peliculas.map(p => (
            <CardMovie
              key={p.id}
              id={p.id}
              nombre={p.title}
              foto={"https://image.tmdb.org/t/p/w342" + p.poster_path}
              desc={p.overview}
            />
          ))
        }
        </section>

        <h2>Series favoritas</h2>
        <section className='row cards'>
        {this.state.series.length === 0
          ? <p>No tenés series favoritas.</p>
          : this.state.series.map(s => (
            <CardSAT
              key={s.id}
              id={s.id}
              nombre={s.name}
              imagen={"https://image.tmdb.org/t/p/w342" + s.poster_path}
              desc={s.overview}
            />
          ))
        }
        </section>
      </div>
    );
  }
}

export default Favoritos;
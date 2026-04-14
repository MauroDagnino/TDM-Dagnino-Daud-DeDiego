import React, { Component } from 'react';

class Resultado extends Component {
  render() {
    return (
      <div>
        <img 
          src={`https://image.tmdb.org/t/p/w300${this.props.poster_path}`} 
          alt={this.props.title} 
        />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Resultado;

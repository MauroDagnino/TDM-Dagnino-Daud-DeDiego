import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './search.css'

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            type: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/ResultadoBusqueda/${this.state.type}/${this.state.search}`)
    }

    controlarCambios(e) {
        this.setState({
            search: e.target.value
        })
    }

    cambiarTipo(e) {
        this.setState({ 
            type: e.target.value 
        })
    }

    render() {
        return(
            <div className='buscador'>
                <form className='buscadorForm' onSubmit={(event) => this.onSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(e) => this.controlarCambios(e)}
                        value={this.state.search}
                    />
                    <select
                    value={this.state.type}
                    onChange={(e) => this.cambiarTipo(e)}
                    >
                        <option value="movie">Películas</option>
                        <option value="tv">Series</option>
                    </select>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search) 
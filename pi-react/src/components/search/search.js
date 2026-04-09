import React, {Component} from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/ResultadoBusqueda/${this.props.search}`)
    }

    controlarCambios(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return(
            <div className=''>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(e) => this.controlarCambios(e)}
                        value={this.state.search}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search) 
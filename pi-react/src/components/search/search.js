import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();
        
    }

    render() {
        return(
            <div className='search'>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(e) => this.setState({ search: e.target.value })}
                        value={this.state.search}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }
}

export default Search
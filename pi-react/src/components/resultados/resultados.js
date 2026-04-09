import React, {Component} from "react";
import Search from "../search/search";

class Resultados extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ2ZTNlZjc5Y2YzYTFjMDllZTlkOWVhZjlhMDg4MyIsIm5iZiI6MTc3NDkwNjE5NS44MDQsInN1YiI6IjY5Y2FlYjUzZGQ5ZGQ2ZDliODFlZDRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L5lPgxUWAbh07oUV2MgXYG8EeHDPg1RYU8e8u9koL-4'
            }
        };

        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                {this.state.datos == '' ? 'Cargando...' : this.state.datos}
            </div>
        );
    }
}

export default Resultados;

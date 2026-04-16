import CardNMP from "../../components/CardMNP/CardMNP";
import { Component } from "react"
import Loader from "../Loader/Loader";
class PeliculasScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personajes: [],
            personajesCopia: [],
            paginaDos: 2
        }
    }
    evitarEnvio(evento){
        evento.preventDefault();
        this.filtrarPersonajes(this.state.valor)
    }

    cambioDelInput(evento){
        this.setState({valor: evento.target.value});
    }
    
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    personajes: data.results,
                    personajesCopia: data.results,
                    paginaDos: data.page + 1
                })
            })
            .catch(error => console.log(error))
    }
    
    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.paginaDos}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    personajes: this.state.personajes.concat(data.results),
                    personajesCopia: this.state.personajes.concat(data.results),
                    paginaDos: data.page + 1
                }
            ))
    }
    filtrarPersonajes(valorInput){
        valorInput = this.state.valor.toLowerCase();
        let filtrarBichos = this.state.personajesCopia.filter(
            personaje => personaje.title.toLowerCase().includes(valorInput)
        )
        
        this.setState({
            personajes: filtrarBichos
        })
    }
    render() {
        console.log(this.state)
        return (
                <>
                <form onSubmit={(e) => this.evitarEnvio(e)}>
                        <label>Nombre: </label>
                        <input type="text" onChange={(evento)=>this.cambioDelInput(evento)} value={this.state.valor}></input>
                        <input type="submit" value="submit"></input>
                </form>
                <h2 className="alert alert-primary">Peliculas</h2>
                <section className="row cards" id="now-playing">
                    {
                        this.state.personajes.length > 0 ? (
                            this.state.personajes.map((personaje) => (
                                <CardNMP
                                    id={personaje.id}
                                    nombre={personaje.title}
                                    foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview} />
                            ))
                        ) : (
                            <Loader/>
                        )

                    }
                    </section>
                    <button onClick={() => this.cargarMas()}>Mas personajes</button>
                </>

                
            )
    }
}
export default PeliculasScreen
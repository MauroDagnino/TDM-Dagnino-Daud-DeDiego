import CardSerie from "../CardSeries/CardSeries"
import CardSAT from "../CardSAT/CardSAT"
import { Component } from "react"
import Loader from "../Loader/Loader"
class SeriesC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            airing: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    popular: data.results
                })
            })
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    airing: data.results
                })
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <>
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <section className="row cards" id="tv-show">
                    {
                        this.state.popular.length > 0 ? (
                            this.state.popular.map((personaje) =>
                                <CardSerie
                                    id = {personaje.id}
                                    nombre={personaje.original_name}
                                    imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
                                />
                            )
                        ) : (<Loader/>)


                    }
                </section>
                <h2 className="alert alert-warning">TV shows airing today</h2>
                <section className="row cards" id="on-air-today">
                    {
                        this.state.airing.length > 0 ? (
                            this.state.airing.map((personaje) =>
                                <CardSAT
                                    id = {personaje.id}
                                    nombre={personaje.original_name}
                                    imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
                                />
                            )
                        ) : (<Loader/>)


                    }
                </section>
            </>

        )
    }
}
export default SeriesC
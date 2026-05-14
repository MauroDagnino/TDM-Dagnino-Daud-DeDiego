import { useState, useEffect } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Cookies from "universal-cookie"

const cookies = new Cookies()

function CardSerie(props) {
  const [data, setData] = useState("")
  const [clase, setClase] = useState("Oculto")
  const [textoBoton, setTextoBoton] = useState("Ver menos")
  const [favorito, setFavorito] = useState(false)

  useEffect((props) => {
        let storage = localStorage.getItem("favoritosS")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let estaEnFav = storageParseado.includes(Number(props.id))
            setFavorito(estaEnFav)
        }
    }, [])

    function ocultar() {
    if (clase === "Oculto") {
      setClase("")
      setTextoBoton("Ver más")
    } else {
      setClase("Oculto")
      setTextoBoton("Ver menos")
    }
  }

  function agregarFavS(props) {
    let idFav = props.id
    let storage = localStorage.getItem("favoritosS")
    if (storage != null) {
            let storageParse = JSON.parse(storage)
            storageParse.push(idFav)
            let storageString = JSON.stringify(storageParse)
            localStorage.setItem("favoritosS", storageString)
            setFavorito(true)
        } else {
            let arrayIDs = []
            arrayIDs.push(idFav)
            let arrayString = JSON.stringify(arrayIDs)
            localStorage.setItem("favoritosS", arrayString)
            setFavorito(true)
        }
  }

    function sacarFavS(props) {
        let idFav = props.id
        let storage = localStorage.getItem("favoritosS")
        if (storage !== null) {
            let storageParseado = JSON.parse(storage)
            let storageFiltrado = storageParseado.filter(id => id !== idFav)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritosS", storageString)
            setFavorito(false)
        }
    }
    const cookie= cookies.get("sesion")
    return (
      <article className="single-card-tv">

        <img src={props.imagen} className="card-img-top"
          alt="..." />
        <div className="cardBody">
          <h5 className="card-title">{props.nombre}</h5>
          <section className={clase}>

            <p className="card-text">{props.desc}</p>
          </section>
          <button className='more' onClick={() => ocultar()}>
            {textoBoton}
          </button>

          <Link to={"/DetalleSerie/" + props.id}><button className="btn btn-primary">Ver detalle</button></Link>

          {cookie ? (
            <>
              <button className={favorito === true ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => agregarFavS(props)}>Agregar a Favoritos</button>
              <button className={favorito === false ? "btn alert-primary oculto" : "btn alert-primary"} onClick={() => sacarFavS(props)}>Quitar de Favoritos</button>
            </>
          ) : (
            <p></p>
          )
          }
        </div>
      </article>
        )
    }


export default CardSerie
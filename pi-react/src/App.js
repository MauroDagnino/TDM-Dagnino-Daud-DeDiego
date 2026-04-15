
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React from 'react';
import Search from './components/Search/Search';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Error from './components/NotFound/NotFound';
import Cuenta from './Screens/Cuenta/Cuenta';
import Login from './Screens/Login/Login';
import Peliculas from './Screens/PeliculasScreen/PeliculasScreen';
import Series from './Screens/SeriesScreen/SeriesScreen';
import ResultadosBusqueda from './Screens/ResultadosBusqueda/ResultadosBusqueda';
import Favoritos from './components/Favoritos/Favoritos';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Search />
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route path="/Peliculas" component={Peliculas}/>

          <Route path="/Series" component={Series}/>
          <Route path="/Favoritos" component={Favoritos}/>
          <Route path="/Cuenta" component={Cuenta}/>
          <Route path = "/Login" component = {Login}/>
          <Route path="/ResultadoBusqueda/:type/:busqueda" component = {ResultadosBusqueda} />
          <Route component={Error} />

        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
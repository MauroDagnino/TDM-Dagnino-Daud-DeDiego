
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import React from 'react';
import Search from './components/search/search';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Error from './components/notFound/notFound';
import Cuenta from './Screens/cuenta/Cuenta';
import Login from './Screens/Login/Login';
import Peliculas from './Screens/PeliculasScreen/PeliculasScreen';
import Series from './Screens/SeriesScreen/SeriesScreen';
import ResultadosBusqueda from './Screens/cuenta/ResultadosBusqueda/ResultadosBusqueda';

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
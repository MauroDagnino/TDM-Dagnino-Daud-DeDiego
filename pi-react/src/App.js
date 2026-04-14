
import './App.css';
import Home from './screens/Home/home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import React from 'react';
import Search from './components/search/search';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Error from './components/notFound/notFound';
import Cuenta from './screens/cuenta/Cuenta';
import Login from './screens/login/Login';
import Peliculas from './screens/PeliculasScreen/PeliculasScreen';
import Series from './screens/SeriesScreen/SeriesScreen';

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
          <Route path="/ResultadoBusqueda/:busqueda" />
          <Route component={Error} />

        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
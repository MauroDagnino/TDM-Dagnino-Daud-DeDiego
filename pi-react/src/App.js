
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

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Search />
        <Switch>

          <Route exact path="/" component={Home} />
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
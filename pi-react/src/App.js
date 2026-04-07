import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import React from 'react';
import Search from './components/search/search';
import {Route, Link, Switch} from 'react-router-dom';
import Error from './components/notFound/notFound';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
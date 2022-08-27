import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={ () => <Home /> } />
        <Route exact path="/About" component={() => <About /> } />
        <Route exact path="/Contact" component={() => <Contact /> } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

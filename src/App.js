import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faPaperPlane, faMobileAlt, faMehRollingEyes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faAddressCard, faPaperPlane, faMobileAlt, faMehRollingEyes)

function App() {
  return (
    <Container fluid="true" className="App">
        <Navigation />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
    </Container>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Feature from './components/Feature/Feature';
import Corevalues from './components/Corevalues/Corevalues';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Benefits from './components/Redevelopment/Benefits';
import Potential from './components/Redevelopment/Potential';
import List from './components/Redevelopment/List';
import Faqs from './components/BuyersGuide/Faqs';
import Tips from './components/BuyersGuide/Tips';
//import $ from 'jquery';


class App extends Component {
  
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          
          <Route path="/feature" component={Feature} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/corevalues" component={Corevalues} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route path="/benefits" component={Benefits} />
          <Route path="/potential" component={Potential} />
          <Route path="/list" component={List} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/tips" component={Tips} />
          <Route path="/home" component={Home} />

        </Switch>
        <Route exact path="/" component={Home} />
        <Footer />
      </Router>


    );
  }
}

export default App;

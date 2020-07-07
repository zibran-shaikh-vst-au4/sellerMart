import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';

import About from './components/About/About';

import Testimonials from './components/Testimonials/Testimonials';

import Contact from './components/Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Corevalues from './components/Corevalues/Corevalues';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Benefits from './components/Redevelopment/Benefits';
import Potential from './components/Redevelopment/Potential';
import List from './components/Redevelopment/List';
import Faqs from './components/BuyersGuide/Faqs';
import Tips from './components/BuyersGuide/Tips';
import { Lines } from 'react-preloaders';
//import $ from 'jquery';


const App = () => {

  
  useEffect(() => {

    Aos.init({ duration: 2000, disable: "mobile", /* disable: 'phone', disable: 'tablet'  */})
  }, [])

  return (
    <Fragment>
      <Lines color='#D0A24C' background="#231f20" animation="slide-down" time={1000}/>
      <Router>

        <Navigation />
        <Switch>


          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/corevalues" component={Corevalues} />
          <Route path="/testimonials" component={Testimonials} />
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

    </Fragment>
  );

}


export default App;

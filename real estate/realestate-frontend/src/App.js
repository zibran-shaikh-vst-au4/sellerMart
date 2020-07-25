import React, { Fragment } from 'react';
import Home from "./layouts/dashboard";
import Admin from "./views/Admin/Admin"
import Content from "./views/Contentmanagement/content";
import ContentEdit from "./views/Contentmanagement/contentEdit.js";
import Projects from "./views/Projects/Projects";
import CoreValues from "./views/CoreValues/CoreValues";
import Redevelopement from './views/Redevelopment/Redevelopment';
import BuyersGuide from './views/BuyersGuide/BuyersGuide'
import ContactUs from './views/ContactUs/ContactUs'
import AuthRoute from './components/AuthRoute';
import GuestRoute from './components/GuestRoute';
/* import Sidebar from "./components/Sidebar/Sidebar" */

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./layouts/signup";
import "./assets/css/material-dashboard-react.css?v=1.9.0";

/* const hist = createBrowserHistory(); */

const App = () => {

    return (
        <Fragment>
            <Router /* hist={hist} */>

                <Switch>
                    
                    <AuthRoute path="/dashboard" component={Home} />
                    <GuestRoute path="/admin" component={SignIn} />
                    <AuthRoute  path="/adminmanagement" component={Admin}/>
                    <AuthRoute exact path="/contentmanagement" component={Content}/>
                    <AuthRoute  path="/contentmanagement/edit/:id" component={ContentEdit}/>
                    <AuthRoute  path="/projects" component={Projects}/>
                    <AuthRoute  path="/corevalues" component={CoreValues}/>
                    <AuthRoute  path="/redevelopment" component={Redevelopement}/>
                    <AuthRoute  path="/buyersguide" component={BuyersGuide}/>
                    <AuthRoute  path="/contactus" component={ContactUs}/>


                
                </Switch>
                <Route exact path="/" component={Home}></Route>
               

            </Router>
        </Fragment>


    )

}

export default App;
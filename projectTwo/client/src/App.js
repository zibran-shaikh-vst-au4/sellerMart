import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'
import ManageProducts from './components/products/ManageProducts'
import Marketplace from './components/marketplace/Marketplace'
import Shopping from './components/Shopping/Shopping'
import Login from './components/Auth/Login'
import GuestRoute from "./components/GuestRoute";
import Register from './components/Auth/Register'
import forgetpassword from './components/Auth/forgetpassword'
import home from './components/Home/home'
import AuthRoute from './components/AuthRoute'
import ResetPassword from './components/Auth/resetPassword'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
toast.configure();

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>

        <AuthRoute path="/home" component={home} />
        <GuestRoute path="/login" component={Login} />
        <GuestRoute path="/register" component={Register} />
        <GuestRoute path="/change-password/:slug" component={ResetPassword} />
        <GuestRoute path="/forget-password" component={forgetpassword} />
        <AuthRoute path="/stats" component={Stats} />
        <AuthRoute path="/manage" component={ManageProducts} />
        <AuthRoute path="/marketplace" component={Marketplace} />
        <AuthRoute path="/shopping" component={Shopping} />
      </Switch>
      <Route exact path="/" component={home}>
      </Route>
    </Router>
  );
}

export default App;

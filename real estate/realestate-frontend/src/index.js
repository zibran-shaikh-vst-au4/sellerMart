import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./redux/reducers/rootReducer";
import "bootstrap/dist/css/bootstrap.css"

// core components\
import App from './App'


let loginStatus = () => {
  // return localStorage.getItem('token')?true:false;
  if (localStorage.getItem('token') && (typeof localStorage.getItem('token') !== 'undefined')) {
      return true;
  }
  else {
      return false;
  }
}
let loginDetail = () => {
  return localStorage.getItem('admin') ? localStorage.getItem('admin') : null;
}
const initialStates = {
  auth: {
      loggedIn: loginStatus(),
      admin: loginDetail()
  }
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(rootReducer, initialStates ,  composeEnhancer(applyMiddleware(thunk)) );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

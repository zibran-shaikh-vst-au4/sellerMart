import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

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
    return localStorage.getItem('user') ? localStorage.getItem('user') : null;
}
const initialStates = {
    auth: {
        loggedIn: loginStatus(),
        user: loginDetail()
    }
};

const store = createStore(rootReducer, initialStates, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

export const addCart = (carts) => {
    return (dispatch) => {
        axios.post('http://localhost:3010/cart', carts)
            .then(response => {
                console.log(response);
                console.log(response.data.message);
                NotificationManager.success(response.data.message);
            })
            .catch(error => {
                console.log(error)
            })
        dispatch({
            type: 'ADD_CART',
            carts: carts
        })
    }
}

export const fetchCartRequest = () => {
    return {
        type: 'FETCH_CART_REQUEST'
    }
}



export const fetchCartSuccess = (carts) => {
    return {
        type: 'FETCH_CART_SUCCESS',
        carts: carts
    }
}



export const fetchCartFailure = (error) => {
    return {
        type: 'FETCH_CART_FAILURE',
        error: error
    }
}

export const fetchCart = () => {
    return (dispatch) => {
        dispatch(fetchCartRequest)
        axios.get('http://localhost:3010/cart')
            .then(response => {
                const carts = response.data
                dispatch(fetchCartSuccess(carts))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCartFailure(errorMsg))
            })
    }
}

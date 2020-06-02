import axios from 'axios'

export const addAllProducts = (allproducts) => {
    return (dispatch) => {

        axios.post('http://localhost:3010/allproduct', allproducts)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        dispatch({
            type: 'ADD_ALL_PRODUCT',
            allproducts: allproducts
        })
    }
}




export const fetchAllProductsRequest = () => {
    return {
        type: 'FETCH_ALL_PRODUCTS_REQUEST'
    }
}



export const fetchAllProductsSuccess = (allproducts) => {
    return {
        type: 'FETCH_ALL_PRODUCTS_SUCCESS',
        allproducts: allproducts
    }
}



export const fetchAllProductsFailure = (error) => {
    return {
        type: 'FETCH_ALL_PRODUCTS_FAILURE',
        error: error
    }
}


export const fetchAllProducts = () => {
    return (dispatch) => {
        dispatch(fetchAllProductsRequest)
        axios.get('http://localhost:3010/allproduct')
            .then(response => {
                const allproducts = response.data
                dispatch(fetchAllProductsSuccess(allproducts))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchAllProductsFailure(errorMsg))
            })
    }
}


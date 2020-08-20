import axios from 'axios'

export const addProject = (products) => {
    return (dispatch) => {

        axios.post('http://localhost:3010/product', products)
            .then(response => {
                console.log(response)
            
            })
            .catch(error => {
                console.log(error.response)
            })
        dispatch({
            type: 'ADD_PRODUCT',
            products: products
        })
    }
}


export const fetchProductsRequest = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST'
    }
}



export const fetchProductsSuccess = (products) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        products: products
    }
}



export const fetchProductsFailure = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        error: error
    }
}


export const fetchProducts = () => {
    return (dispatch) => {


        dispatch(fetchProductsRequest)
        axios.get('http://localhost:3010/product')
            .then(response => {
                const products = response.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductsFailure(errorMsg))
            })
    }
}

export const fetchProductsDelete = (id) => {
    return {
        type: 'FETCH_PRODUCTS_DELETE',
        id: id
    }
}

export const deleteProducts = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3010/product/${id}`)
            .then(response => {
                console.log(response);
                //dispatch(fetchProductsDelete(product))
            })
    }
}


// export const editProducts = (id) => {
//     return (dispatch) => {
//         axios.put(`http://localhost:3010/product/${id}`)
//             .then(response => {
//                 console.log(response);
//                 //dispatch(fetchProductsDelete(product))
//             })
//     }
// }


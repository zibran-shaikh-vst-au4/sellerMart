const initSate = {
    loading: false,
    products: [],
    error: ''
}

const productReducer = (state = initSate, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return {
                ...state
            }
        }
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                loading: false,
                products: action.products,
                error: ''
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                loading: false,
                products: [],
                error: action.error
            }
        // case 'FETCH_PRODUCTS_DELETE': console.log(action);
        //     break;
        default: return state
    }
    // switch (action.type) {
    //     case 'ADD_PRODUCT':
    //         console.log("new product", action.products)
    // }
    // return state;
}
export default productReducer;
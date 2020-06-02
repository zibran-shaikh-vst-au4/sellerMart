const initSate = {
    loading: false,
    carts: [],
    error: ''
}

const cartReducer = (state = initSate, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_CART': {
            return {
                ...state
            }
        }
        case 'FETCH_CART_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_CART_SUCCESS':
            return {
                loading: false,
                carts: action.carts,
                error: ''
            }
        case 'FETCH_CART_FAILURE':
            return {
                loading: false,
                carts: [],
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
export default cartReducer;

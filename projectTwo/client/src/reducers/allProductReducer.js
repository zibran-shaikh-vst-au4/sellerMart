const initSate = {
    loading: false,
    allproducts: [],
    items: [],
    error: ''
}

const allProductReducer = (state = initSate, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_ALL_PRODUCT': {
            return {
                ...state
            }
        }
        case 'FETCH_ALL_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_ALL_PRODUCTS_SUCCESS':
            return {
                loading: false,
                allproducts: action.allproducts,
                error: ''
            }
        case 'FETCH_ALL_PRODUCTS_FAILURE':
            return {
                loading: false,
                allproducts: [],
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
export default allProductReducer;
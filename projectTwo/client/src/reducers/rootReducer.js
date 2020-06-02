import allProductReducer from './allProductReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import AuthReducer from './AuthReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    product: productReducer,
    allproduct: allProductReducer,
    cart: cartReducer,
    auth: AuthReducer
})
export default rootReducer;
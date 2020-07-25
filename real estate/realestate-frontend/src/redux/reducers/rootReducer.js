import AuthReducer from './AuthReducer'
import sliderReducer from "./sliderImageReducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
        auth: AuthReducer,
        slide: sliderReducer
})
const stateMapper = state => state

export {
        rootReducer,
        stateMapper
}
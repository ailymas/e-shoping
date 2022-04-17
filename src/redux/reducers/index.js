import {combineReducers } from 'redux'
import {ProductReducer, ProductSelectedReducer} from './Reducers'

const reducers = combineReducers({
    allProducts:ProductReducer,
    Product: ProductSelectedReducer
})
export default reducers
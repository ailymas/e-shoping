import {ActionsType} from '../constants/Action-type'


const initialState = {
    products:[]

}

export const ProductReducer = (state = initialState, {type, payload})=>{
    switch (type){
        case ActionsType.SET_PRODUCTS:
            return {...state, products:payload }
        case ActionsType.SELECTED_PRODUCTS:
            return state
        default:
            return state

    }
}
export const ProductSelectedReducer=(state=initialState, {type, payload})=>{
    switch (type){
        case ActionsType.SELECTED_PRODUCTS:
            return {...state, ...payload}
        default:
            return state
    }
}
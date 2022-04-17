import {ActionsType} from '../constants/Action-type'

export const  SetProduct=(product)=>{
    return {
        type:ActionsType.SET_PRODUCTS,
        payload:product
    }

}
export const  SelectedProduct = (product)=>{
    return{
        type:ActionsType.SELECTED_PRODUCTS,
        payload:product
    }
}
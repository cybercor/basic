import { ADD_CART, CHANGE_MESSAGE, DELETE_ITEM, DELETE_MESSAGE, UPDATE_ITEM } from "./ActionType"

export const addCart=(product,quatity)=>{
    return{
        type:ADD_CART,
        product:product,
        quatity:quatity
    }
}
export const changeMessage=(message)=>{
    return{
        type:CHANGE_MESSAGE,
        message:message
    }
}
export const deleteItem=(product)=>{
    return{
        type:DELETE_ITEM,
        product:product
    }
}
export const updateItem=(product,quatity)=>{
    return{
        type:UPDATE_ITEM,
        product,
        quatity,
    }
}
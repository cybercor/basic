import {LIST_ALL,SAVE_FORM, DIS_PLAY, OPEN_FORM, CLOSE_FORM, UPDATE_STATUS, DELETE, EDIT_ITEM, RESET_FORM, FILTER_TABLE, SEARCH_FORM, SORT_FORM} from './ActionType'

export const listAll=()=>{
    return{
        type:LIST_ALL
    }
}
export const saveForm=(product)=>{
    return{
        type:SAVE_FORM,
        product:product
    }
}

export const display=()=>{
    return{
        type:DIS_PLAY,
    }
}
export const openForm=()=>{
    return{
        type:OPEN_FORM,
    }
}
export const closeForm=()=>{
    return{
        type:CLOSE_FORM,
    }
}
export const updateStatus=(id)=>{
    return{
        type:UPDATE_STATUS,
        id:id,
    }
}
export const deleleItem=(id)=>{
    return{
        type:DELETE,
        id:id,
    }
}
export const editItem=(product)=>{
    return{
        type:EDIT_ITEM,
        product:product,
    }
}
export const resetForm=()=>{
    return{
        type:RESET_FORM
    }
}
export const filterTable=(filter)=>{ //filterName,filterStatus
    return{
        type:FILTER_TABLE,
        filter:filter
    }
}
export const searchForm=(keyword)=>{
    return{
        type:SEARCH_FORM,
        keyword:keyword
    }
}
export const sortForm=(sort)=>{ //sortBy,sortValue
    return{
        type:SORT_FORM,
        sort:sort
    }
}
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from './index'

export const addProduct = (item) => (dispatch) => {
    dispatch({
        type: CART_ADD_ITEM,
        payload: item
    })
}
export const removeProduct = (itemID) => (dispatch) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: itemID
    })
}
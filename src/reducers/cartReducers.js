import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../actions/index'

const userProducts = {
    products: []
}

export const userCartReducer = (state = userProducts, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return { products: action.payload };
        case CART_REMOVE_ITEM:
            return { products: action.payload };
        default:
            return state;
    }
}
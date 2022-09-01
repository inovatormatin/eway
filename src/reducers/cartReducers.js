import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DEACREASE_QUANTITY,
} from "../actions/index";

export const initialState = {
  productList : [],
  totalAmount : 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, productList : action.payload };
        // case BLOGS_REQUEST_SUCCESS:
        //     return { ...state, loading: false, blogs: action.payload, error: null };
        // case BLOGS_REQUEST_FAIL:
        //     return { ...state, loading: false, blogs: null, error: action.payload };
        default:
            return state;
    }
}

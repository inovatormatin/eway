import { combineReducers } from "redux";
import {
    userLoginReducer,
    userSignupReducer,
} from './userReducers'
import { getallBlogsReducer } from './blogReducers'
import { getallProductsReducer } from './productReducers'
import { cartReducer } from './cartReducers'

const rootReducer = combineReducers({
    userLogin : userLoginReducer,
    userSignup : userSignupReducer,
    getallBlogs : getallBlogsReducer,
    getallProducts : getallProductsReducer,
    cart : cartReducer
});

export default rootReducer;
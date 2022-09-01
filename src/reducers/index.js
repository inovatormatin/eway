import { combineReducers } from "redux";
import {
    userLoginReducer,
    userSignupReducer,
} from './userReducers'
import { getallBlogsReducer } from './blogReducers'
import { getallProductsReducer } from './productReducers'
import { userCartReducer } from './cartReducers'

const rootReducer = combineReducers({
    userLogin : userLoginReducer,
    userSignup : userSignupReducer,
    userCart : userCartReducer,
    getallBlogs : getallBlogsReducer,
    getallProducts : getallProductsReducer,
});

export default rootReducer;
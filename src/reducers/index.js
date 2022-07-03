import { combineReducers } from "redux";
import {
    userLoginReducer,
    userSignupReducer
} from './userReducers'
import { getallBlogsReducer } from './blogReducers'
import { getallProductsReducer } from './productReducers'

const rootReducer = combineReducers({
    userLogin : userLoginReducer,
    userSignup : userSignupReducer,
    getallBlogs : getallBlogsReducer,
    getallProducts : getallProductsReducer,
});

export default rootReducer;
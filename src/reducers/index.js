import { combineReducers } from "redux";
import {
    userLoginReducer,
    userSignupReducer,
} from './userReducers'
import {
    getSearchResult
} from './utilsReducers'
import { getallBlogsReducer } from './blogReducers'
import { getallProductsReducer } from './productReducers'
import { cartReducer } from './cartReducers'

const rootReducer = combineReducers({
    userLogin : userLoginReducer,
    userSignup : userSignupReducer,
    getallBlogs : getallBlogsReducer,
    getallProducts : getallProductsReducer,
    cart : cartReducer,
    searchKeyword : getSearchResult
});

export default rootReducer;
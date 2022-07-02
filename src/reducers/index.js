import { combineReducers } from "redux";
import {
    userLoginReducer,
    userSignupReducer
} from './userReducers'

const rootReducer = combineReducers({
    userLogin : userLoginReducer,
    userSignup: userSignupReducer,
});

export default rootReducer;
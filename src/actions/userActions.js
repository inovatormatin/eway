import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_LOGOUT,
} from './index'
import axios from 'axios'
import { toast } from 'react-toastify';
import { login, getuser, signup } from '../constant/routes'

export const userLogin = (email, password) => async (dispatch) => {
    // initialise login process
    dispatch({
        type: USER_LOGIN_REQUEST,
    })

    // login request
    const loginConfig = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const response = await axios.post(
        login,
        {
            email,
            password
        },
        loginConfig
    ).then(res => res.data)
    .catch(error => error.response.data.error);

    if(response.success === true) {
        // store tokken
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: response.authtokken,
        });

        // detail request
        const getuserConfig = {
            headers: {
                'auth-token' : response.authtokken
            }
        }
        const user = await axios.get(getuser, getuserConfig)
        .then(res => res.data)
        .catch(error => error.response.data.error);

        if(user._id){
            // store user info
            dispatch({
                type: USER_DETAIL_SUCCESS,
                payload: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                }
            });
            toast.success(`Welcome ${user.name}`);
        } else {
            dispatch({
                type : USER_DETAIL_FAIL,
                payload : user,
            });
            toast.error(user);
        }
    } else {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: response,
        });
        toast.error(response);
    } 
};

export const userSignup = (userInfo) => async (dispatch) => {
    dispatch({
        type: USER_SIGNUP_REQUEST,
    })

    // signUp request config
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    // sending request
    const response = await axios.post(signup, userInfo, config)
    .then(res => res.data)
    .catch(error => error.response.data.error);

    if(response.success === true){
        // store user info
        dispatch({
            type: USER_SIGNUP_SUCCESS,
        });
        toast.success('Account created.');
    } else {
        dispatch({
            type : USER_SIGNUP_FAIL,
            payload : response,
        });
        toast.error(response);
    }
};

export const userLogout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT
    });
};
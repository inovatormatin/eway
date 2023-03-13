// login action { getting authtokken }
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

// login action { getting user info. }
export const USER_DETAIL_SUCCESS = 'USER_DETAIL_SUCCESS';
export const USER_DETAIL_FAIL = 'USER_DETAIL_FAIL';

// Signup action
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

// user Logout
export const USER_LOGOUT = 'USER_LOGOUT';

// get all blogs
export const BLOGS_REQUEST = 'BLOGS_REQUEST';
export const BLOGS_REQUEST_SUCCESS = 'BLOGS_REQUEST_SUCCESS';
export const BLOGS_REQUEST_FAIL = 'BLOGS_REQUEST_FAIL';

// get all products
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_REQUEST_SUCCESS = 'PRODUCTS_REQUEST_SUCCESS';
export const PRODUCTS_REQUEST_FAIL = 'PRODUCTS_REQUEST_FAIL';

// cart action by user
export const FETCH_CART = 'FETCH_CART';
export const GET_CART_BY_ID = 'GET_CART_BY_ID';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAN_CART = 'CLEAN_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const MODIFY_CART = 'MODIFY_CART';

// Utils action
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const SEARCH_FAIL = 'SEARCH_FAIL';
const eway = "https://ewayserver.herokuapp.com/api/";

// auth routes
export const login = eway + 'users/login';
export const signup = eway + 'users/signup';
export const getuser = eway + 'users/getuser';

// blog routes
export const addblog = eway + 'blogs/addblog';
export const getallblogs = eway + 'blogs/getallblogs';
export const getblogbyid = eway + 'blogs/getblogbyid';
export const updateblog = eway + 'blogs/updateblog/'; // blog id required
export const deleteblog = eway + 'blogs/deleteblog/'; // blog id required

// product routes
export const addproduct = eway + 'products/addblog';
export const getallproducts = eway + 'products/getallproducts';
export const updateproduct = eway + 'products/updateproduct/'; // product id required
export const deleteproduct = eway + 'products/deleteproduct/'; // product id required
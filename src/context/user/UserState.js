import UserContext from "./userContext";
import React, { useState } from "react";
import axios from "axios";
import { getuser } from "../../constant/routes";
const UserState = (props) => {
    // to chech wether user logged in or not
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // logged in user info
    const [user, setUser] = useState({
        userid: "",
        name: "",
        email: ""
    });

    // store user info
    const userInfo = (data) => {
        const { _id, name, email } = data;
        setUser(prevState => ({ ...prevState, userid: _id }));
        setUser(prevState => ({ ...prevState, name: name }));
        setUser(prevState => ({ ...prevState, email: email }));
    }

    // get user by auth-token
    const getuserbyauth = async () => {
        const response = await axios.get(getuser, {
            headers: {
                'auth-token': localStorage.getItem('authtoken')
            }
        })
        .then((res) => { return res }).catch((err) => console.error(err.response.data.error));
        userInfo(response.data);
        console.log(response.data, isUserLoggedIn);
    }

    return (
        <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, user, getuserbyauth }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;
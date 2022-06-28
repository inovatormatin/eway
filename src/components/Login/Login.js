import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import './login.css'
import axios from 'axios'
import { GrClose } from "react-icons/gr"
import { login, signup } from '../../constant/routes'
import { toast } from 'react-toastify'
import userContext from '../../context/user/userContext'

const Login = ({ update }) => {
    const userInfo = useContext(userContext);
    const navigate = useNavigate(); // navigation
    const [form, setForm] = useState(true); // conditionaly render login logout form
    // login form initialstate
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    // signup form initialstate
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        checkpassword: ""
    });

    // login user
    const loginuser = async (e) => {
        e.preventDefault();
        const response = await axios.post(login, loginData)
            .then((res) => { return res }).catch((err) => console.error(err.response.data.error));
        if (response) {
            update(false)
            navigate('/')
            localStorage.setItem('authtoken', response.data.authtokken)
            userInfo.setIsUserLoggedIn(true)
            userInfo.getuserbyauth()
            toast.success('Welcome')
        } else {
            toast.error('Wrong credentials ! Try again');
        }
    };

    // register user
    const registeruser = async (e) => {
        e.preventDefault();
        if (signupData.password === signupData.checkpassword) {
            const response = await axios.post(signup, signupData)
                .then((res) => { return res }).catch((err) => console.error(err.response.data.error));
            if (response) {
                navigate('/')
                setForm(true)
                toast.success('Account Created ! Please login')
            } else {
                toast.error('Wrong credentials ! Try again');
            }
        } else {
            toast.error('Password did not match');
        }
    }

    const onchangeoflogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const onchangeofsignup = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    return (
        <div className='loginBox'>
            <header>
                <h2>My Account</h2>
                <GrClose onClick={() => update(false)} />
            </header>
            {form ?
                <div className='form' onSubmit={loginuser}>
                    <form method='post'>
                        <h4>
                            Login Form
                        </h4>
                        <input type="email" name='email' value={loginData.email} placeholder='Enter your email id' onChange={onchangeoflogin} required />
                        <input type="password" name='password' value={loginData.password} placeholder='Password' onChange={onchangeoflogin} required />
                        <button type='submit'>Login Account</button>
                    </form>
                    <span>Don't have account ?</span>
                    <button onClick={() => setForm(false)}>Register Now</button>
                </div>
                :
                <div className='form'>
                    <form method='post' onSubmit={registeruser}>
                        <h4>
                            Register Form
                        </h4>
                        <input type="text" name='name' value={signupData.name} placeholder='Enter your username' onChange={onchangeofsignup} required />
                        <input type="email" name='email' value={signupData.email} placeholder='Enter your email id' onChange={onchangeofsignup} required />
                        <input type="password" name='password' value={signupData.password} placeholder='Enter your Password' onChange={onchangeofsignup} required />
                        <input type="password" name='checkpassword' value={signupData.checkpassword} placeholder='Confirm Password' onChange={onchangeofsignup} required />
                        <button type='submit'>Register Account</button>
                    </form>
                    <span>Already have an account ?</span>
                    <button onClick={() => setForm(true)}>Login Account</button>
                </div>
            }
        </div>
    );
}

export default Login;
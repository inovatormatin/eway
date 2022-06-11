import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './login.css'
import { GrClose } from "react-icons/gr"

const Login = ({update}) => {
    const navigate = useNavigate();
    const [form, setForm] = useState(true);
    // login user
    const loginuser = (e) => {
        e.preventDefault();
        update(false)
        navigate('/');
    }
    // register user
    const registeruser = (e) => {
        e.preventDefault();
        update(false)
        navigate('/');
    }
    return (
        <div className='loginBox'>
            <header>
                <h2>My Account</h2>
                <GrClose onClick={() => update(false)}/>
            </header>
            {form ?
                <div className='form'>
                    <form method='post'>
                        <h4>
                            Login Form
                        </h4>
                        <input type="email" name='email' placeholder='Enter your email id' />
                        <input type="password" name='password' placeholder='Password' />
                        <button onClick={(e) => loginuser(e)}>Login Account</button>
                    </form>
                    <span>Don't have account ?</span>
                    <button onClick={() => setForm(false)}>Register Now</button>
                </div>
                :
                <div className='form'>
                    <form method='post'>
                        <h4>
                            Register Form
                        </h4>
                        <input type="text" name='username' placeholder='Enter your username' />
                        <input type="email" name='email' placeholder='Enter your email id' />
                        <input type="password" name='password' placeholder='Enter your Password' />
                        <input type="password" name='password' placeholder='Confirm Password' />
                        <button onClick={(e) => registeruser(e)}>Register Account</button>
                    </form>
                    <span>Already have an account ?</span>
                    <button onClick={() => setForm(true)}>Login Account</button>
                </div>
            }
        </div>
    );
}

export default Login;
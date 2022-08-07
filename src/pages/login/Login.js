import React from 'react';
import './login.css';
 import { useState, useRef } from 'react';
const Login = () => {

    return (
        <div className='login'>
            <div className='top'>
                <div className='wrapper'>
            <span className='logo'> TuniFlix </span>  
             
            </div>
            </div>
            <div className='container'>
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' ></input>
                    <input type="password" placeholder='password'  ></input>
                    <button className='logButton' >Sign In</button>
                    <span>New to TuniFlix<b>Sign up now!</b></span>
                    <small>This page is protected by Google to ensure you're not a bot.
                        <b>Learn more.</b>
                    </small>
                </form>
             
            </div>
        </div>
    );
}

export default Login;

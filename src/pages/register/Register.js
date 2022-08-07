import React from 'react';
import './register.css';
 import { useState, useRef } from 'react';
const Register = () => {
    const [email,setEmail]=useState("");
    const emailRef=useRef();
    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
            <span className='logo'> TuniFlix </span>  
            <button className="loginButton">Sign In</button>
            </div>
            </div>
            <div className='container'>
                <h1> Unlimited movies,TV shows ,and more.</h1> 
                <h2>Watch Anywhere.Cancel Anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='input'>
                    <input type="email" placeholder='Enter your Email' ref={emailRef}></input>
                    <button className='registerButton'> Let's get started!</button>
                </div>
            </div>
        </div>
    );
}

export default Register;

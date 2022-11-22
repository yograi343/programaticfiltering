import React from 'react';
import './login2.css';
import logo from "../../asssets/logo1.jpg"

const Login2 = () => {
    return (
        <div className='box'>
            <div className='app-login'>
                <div className='app-container'>
                    <div className='app-component'>
                    <div className='app-component-part'>
                        <img src={logo} className="logo-diacto" alt='logo'/>
                        <h2 className='white'>DIACTO</h2>
                        <h4 className='white'>Data in Action!</h4>
                    </div>
                    </div>
                    <div className='app-component2'>
                        <div className='app-part'>
                        <div className='app-partright'>
                        <form className='app-component-form'>
                        <div className='title-1'>Login Page</div>
                                <input type="text" placeholder='Domain Name' className='input-section'/>
                                <input type="text" placeholder='User Name' pattern="[a-z0-9._%+-]$" className='input-section'/>
                                <input type="Password" placeholder='Enter Password' className='input-section'/>
                                <button type="button" className='btn'>Login</button>
                                <div className='form-footer'>
                            <h5 className='footer-text'>Not a Customer?</h5>
                            <button type="button" className='btn1'>Signin</button>
                        </div>
                        </form>   
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Login2;

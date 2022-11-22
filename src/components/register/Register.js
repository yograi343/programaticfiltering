import React from 'react';
import './register.css';
import logo from "../../asssets/logo1.jpg"

const Register = () => {
    return (
        <div className='box'>
            <div className='app-login'>
                <div className='app-container'>
                    <div className='app-component'>
                    <div className='app-component-part'>
                        <img src={logo} className="logo-diacto" alt='logo'/>
                        <h2 className='white'>DIACTO</h2>
                        <h4 className='white'> Data in Action!</h4>
                    </div>
                    </div>
                    <div className='app-component2'>
                        <div className='app-part'>
                        <div className='app-partright'>
                        <form className='app-component-form'>
                        <div className='title-1'>Register Page</div>
                            <div className='form-row top'>
                                <input type="text" placeholder='First Name' className='input-section2'/>
                                <input type="text" placeholder='Last Name' className='input-section2'/>
                            </div>
                            <div className='form-row'>
                                <input type="email" placeholder='Work email' className='input-section2'/>
                                <input type="text" placeholder='Domain Name' className='input-section2'/>
                            </div>
                            <div className='form-row'>
                                <input type="text" placeholder='Job title' pattern="[a-z0-9._%+-]$" className='input-section2'/>
                                <input type="tel" placeholder='Enter Phone No.' className='input-section2'/>
                            </div>
                            <button type="button" className='btn'>Sign in</button>
                            <div className='form-footer'>
                            <h5 className='footer-text'>Already a Customer?</h5>
                            <button type="button" className='btn1'>Log in</button>
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

export default Register

import React from 'react';
import "./password.css";
import logo from '../../asssets/logo1.jpg'

const Password = () => {
    const workEmail="yogesh@abc.com";
    return (
        <div>
            <div className='login-page'>
            <img src={logo} alt='diacto-logo'/>
            <div className='form'>
                <form className='setup-page-form'>
                    <p className='setup-title'> Hi, {workEmail}. Please create your password.</p>
                    <p className='label-setup'>Enter Password</p>
                    <div><input className='input-setup' type="password" name="password" /></div>
                    <p className='label-setup'>Repeat Password</p>
                    <div><input  className='input-setup'type="password" name="password" /></div>
                    <div className='rght'><input type="submit" value="Submit" className='login-button'/></div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Password

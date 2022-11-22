import React from 'react';
import Navbar from '../navbar/Navbar';
import './config.css';

const Config = () => {
    return (
        <div>
            <Navbar/>

            <div className='config-page'>
                <div className='title-container'>
                    <div className='title'>
                        <h2>Configure Credentials</h2>
                        <div className='title-button'>
                        <button type='button' className='config-button'>Edit</button>
                        </div>
                    </div>
                </div>
                <div className='form'>
                    <form className='page-form'>
                        <label className='form-label'>Domain Name</label>
                        <div className='gap'><input type="text" className='input-text' name="orgUrl" placeholder='Enter Domain Name' /></div>
                        <label className='form-label'>Client ID</label>
                        <div className='gap'><input type="text" className='input-text' name="user" placeholder='Enter Client ID'/></div>
                        <label className='form-label'>Client Secret</label>
                        <div className='gap'><input type="password" className='input-text' name="password" placeholder='Enter Client Secret'/></div>
                        <div className='gap'><input type="submit" value="Submit" className='config-button'/></div>
                    </form>
                    </div>
                </div>
        </div>
    )
}

export default Config;

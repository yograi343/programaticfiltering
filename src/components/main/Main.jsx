import React from 'react';
import Navbar from '../navbar/Navbar';
import './main.css';
import Content from '../content/Content'

const Main = () => {
    return (
    <div className='main-page'>
        <div className='gradient-bg'>
                <Navbar/>
        </div>
        <div className='dashboard-space'>
            <Content/>
        </div>
    </div>
    )
}

export default Main;

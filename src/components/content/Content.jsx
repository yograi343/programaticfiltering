import React from 'react';
import './content.css';

const userName="Yogesh Rai";

const Content = () => {
    return (
        <div className='content-box'>
                <h1>Hi {userName},</h1>
                <h2>Welcome to the Dashboards by Diacto.</h2>
                <h2>This is the one stop shop for managing your users and viewing your important KPI's.</h2>
        </div>
    )
}

export default Content

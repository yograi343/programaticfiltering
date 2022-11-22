import React from 'react';
import './dashboard.css';
import Navbar from '../navbar/Navbar';


const Dashboards =()=> {

    return (
      <div>
          <Navbar/>
          <iframe src="https://public.domo.com/embed/pages/AnDAz" className='page' marginheight="0" marginwidth="0" frameborder="0" title='Dashboard Name'></iframe>
      </div>
    )
}
export default Dashboards;

import React, {useState} from 'react';
import {RiUser3Fill, RiArrowDownSFill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../asssets/logo.jpg';
import './navbar.css';



const Navbar = () => {
    const [toggleUser,setToggleUser] = useState(false);
    const [toggleSideBar,setToggleSideBar] = useState(false);
    const [childOpen,setChildOpen] =useState(false);
    const childOpener=()=>{
        setChildOpen(!childOpen);
    }
    const toggleFunc = ()=>{
        setToggleUser(!toggleUser);
    }
    const toggleSideFunc =()=>{
        setToggleSideBar(!toggleSideBar);
    }
    const userName='Diacto-User';
    return (
        <>
        <div className='navbar'>
            <div className='navbar-logo' >
                <RiMenu3Line className='menu' onClick={toggleSideFunc}/>
                <img src={logo} alt='logo' className='logo-menu'/>
            </div>
            <div className='navbar-links-profile'>
                <RiUser3Fill className='navbar-links-profile-logo'/>
                <p className='gap1'>{userName}</p>
                {toggleUser
                    ?<RiCloseLine className='navbar-links-profile-logo' onClick={toggleFunc}/>
                    :<RiArrowDownSFill className='navbar-links-profile-logo' onClick={toggleFunc}/>
                }
            </div>
            {toggleUser &&
                <div className='logout-page'>
                    <div className='logout-user'><p>Edit User</p></div>
                    <div><button type='button'>Log Out</button></div>
                </div>
            }
            {toggleSideBar &&
                <div className='sidebar'>
                    <p className='sidebar-btn'><a href='/main'>Home</a></p>
                    <p className='sidebar-btn'><a href='/config'>Configure</a></p>
                    <p className='sidebar-btn'><a href='/manage'>Manage Users</a></p>
                    <p className='sidebar-btn' onClick={childOpener}>Dashboards</p>
                    {childOpen &&
                        <div className='sidebar1'>
                            <p className='sidebar-btn1' id="dashboardPage" value= "Z4OA2"><a href="/dashboards">Dashboard2</a></p>
                            <p className='sidebar-btn1' id="dashboardPage" value= "r0ZW4"><a href="/dashboards" >Dashboard1</a></p>
                        </div>
                    } 
                </div>
            }
        </div>
        </>
    )
}

export default Navbar;

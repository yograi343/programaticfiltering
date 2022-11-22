import React from 'react';
import './edituser.css';
import Navbar from "../navbar/Navbar"

const Edituser = () => {
    const firstName="Yogesh";
    const email ="abc@gmail.com";
    const phone="9999999999"
    const lastName="Rai";
    return (
        <div>
            <Navbar/>
            <div className='edit-user-page-title'>
                <p>Edit/Add User</p>
                <button type='button' className='save-bt'>Save</button> 
            </div>
            <form className='edit-user-form'>
                <div className='edit-user-form-line'>
                    <label>
                        <p>First Name</p>
                        <input type="text" name="fName" value={firstName} />
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input type="text" name="Lname" value={lastName}/>                                  
                    </label>
                </div>
                <div className='edit-user-form-line'>
                <label> 
                        <p>Phone</p>
                        <input type="tel" name="phone" value={phone}/>
                    </label>
                    <label>
                        <p>Email ID</p>
                        <input type="email" name="email" value={email}/>
                    </label> 
                </div>
                </form>
            <table>
                <tr>
                <th>Users</th>
                <th>Filter</th>
                </tr>
                <tr>
                <td><div className='user-bt'>Goku</div></td>
                <td className='manage-action'>
                    <div><button className='add-bt'>Edit</button></div>
                    <div><button className='delete-bt'>Delete</button></div>
                    <button oclassName='add-bt'>+</button>
                </td>
                </tr>
                <tr>
                <td><div className='user-bt'>Luffy</div></td>
                <td className='manage-action'>
                    <div><button className='add-bt'>Edit</button></div>
                    <div><button className='delete-bt'>Delete</button></div>
                    <button  className='add-bt'>+</button>
                </td>
                </tr>
                <tr>
                <td><div className='user-bt'>Zoro</div></td>
                <td className='manage-action'>
                    <div><button className='add-bt' >Edit</button></div>
                    <div><button className='delete-bt'>Delete</button></div>
                    <button  className='add-bt'>+</button>
                </td>
                </tr>
            </table>
        </div>
    )
}

export default Edituser

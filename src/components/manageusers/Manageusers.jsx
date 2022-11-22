import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import './manage.css';
import Modal from 'react-modal';
import { RiCloseLine } from 'react-icons/ri';

Modal.setAppElement('#root');

const Manageusers =()=> {
    const firstName="Yogesh";
    const email ="abc@gmail.com";
    const phone="9999999999"
    const lastName="Rai";
    
    const [toggleEdituser, setToggleEdituser]=useState(false);
    const modalIsOpen =()=>{
        setToggleEdituser(true);
    }
    const closeModal = ()=>{
        setToggleEdituser(false);
    }

    const [toggleDeleteuser, setToggleDeleteuser]=useState(false);
    const deleteIsOpen =()=>{
        setToggleDeleteuser(true);
    }
    const closeDeleteModal = ()=>{
        setToggleDeleteuser(false);
    }

    
    return (
        <div>
            <Navbar/>
            <div className='table-page'>
                <table>
                    <tr>
                    <th>Users</th>
                    <th>Role</th>
                    <th>Dashboards</th>
                    <th>Action</th>
                    </tr>
                    <tr>
                    <td><div className='user-bt'>Goku</div></td>
                    <td>Admin</td>
                    <td>2</td>
                    <td className='manage-action'>
                        <div><button className='add-bt'onClick={modalIsOpen}>Edit</button></div>
                        <div><button className='delete-bt' onClick={deleteIsOpen}>Delete</button></div>
                    </td>
                    </tr>
                    <tr>
                    <td><div className='user-bt'>Luffy</div></td>
                    <td>User</td>
                    <td>3</td>
                    <td className='manage-action'>
                        <div><button className='add-bt' onClick={modalIsOpen}>Edit</button></div>
                        <div><button className='delete-bt' onClick={deleteIsOpen}>Delete</button></div>
                    </td>
                    </tr>
                    <tr>
                    <td><div className='user-bt'>Zoro</div></td>
                    <td>User</td>
                    <td>4</td>
                    <td className='manage-action'>
                        <div><button className='add-bt' onClick={modalIsOpen}>Edit</button></div>
                        <div><button className='delete-bt' onClick={deleteIsOpen}>Delete</button></div>
                    </td>
                    </tr>
                </table>
                <div className='bt-section'>
                    <button onClick={modalIsOpen}>+</button>
                </div>
                <Modal isOpen={toggleEdituser} className='edit-user-page'>
                    <RiCloseLine className='edit-profile-logo' onClick={closeModal}/>
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
                            <div><button className='add-bt'onClick={modalIsOpen}>Edit</button></div>
                            <div><button className='delete-bt'>Delete</button></div>
                            <button onClick={modalIsOpen} className='add-bt'>+</button>
                        </td>
                        </tr>
                        <tr>
                        <td><div className='user-bt'>Luffy</div></td>
                        <td className='manage-action'>
                            <div><button className='add-bt' onClick={modalIsOpen}>Edit</button></div>
                            <div><button className='delete-bt'>Delete</button></div>
                            <button onClick={modalIsOpen} className='add-bt'>+</button>
                        </td>
                        </tr>
                        <tr>
                        <td><div className='user-bt'>Zoro</div></td>
                        <td className='manage-action'>
                            <div><button className='add-bt' onClick={modalIsOpen}>Edit</button></div>
                            <div><button className='delete-bt'>Delete</button></div>
                            <button onClick={modalIsOpen} className='add-bt'>+</button>
                        </td>
                        </tr>
                    </table>
                </Modal> 
                <Modal isOpen={toggleDeleteuser} className='edit-user-page'>
                    <RiCloseLine className='edit-profile-logo' onClick={closeDeleteModal}/>
                    <div className='deleteWarning'>
                        <p>Are you sure you want to delete the user?</p>

                        <div>
                            <div><button className='add-bt' onClick={closeDeleteModal}>No</button></div>
                            <div><button className='delete-bt'>Yes</button></div>
                        </div>
                    </div>
                </Modal>
                </div>   
                
        </div>
    )
  //}
}
export default Manageusers;
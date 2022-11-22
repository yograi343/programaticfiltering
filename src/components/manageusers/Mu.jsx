import React, { useRef,useState } from 'react'
import Navbar from '../navbar/Navbar';
import './manage.css';
import Modal from 'react-modal';
import { RiCloseLine } from 'react-icons/ri';

Modal.setAppElement('#root');
const Mu =()=> {
    const lists=[
        {
            id:0,
            firstName:"Yogesh",
            lastName:"Rai",
            phone:"89898989889",
            role:"Admin",
            dashboard:3
        },
        {
            id:1,
            firstName:"Dhruvi",
            lastName:"Shah",
            phone:"90909090909",
            role:"User",
            dashboard:3
        },
        {
            id:2,
            firstName:"Sowmiya",
            lastName:"Subramanian",
            phone:"90909090909",
            role:"User",
            dashboard:2
        }
    ]
    const [list2, setList] =useState(lists);
    
    const [toggleAdduser, setToggleAdduser]=useState(false);
    const addIsOpen =()=>{
        setToggleAdduser(true);
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
                <form>
                <table>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Dashboards</th>
                    <th>Action</th>
                    </tr>
                    {
                        list2.map((current)=>(
                            <tr>
                                <td><div className='user-bt'>{current.firstName}</div></td>
                                <td>{current.lastName}</td>
                                <td>{current.phone}</td>
                                <td>{current.role}</td>
                                <td>{current.dashboard}</td>
                                <td className='manage-action'>
                                    <button className='add-bt' type="button" >Edit</button>
                                    <button className='delete-bt' type="button" onClick={deleteIsOpen}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }    
                </table>
                </form>
                <div className='bt-section'>
                    <button onClick={addIsOpen}>+</button>
                </div>
                
                {/*Adding a new user model will be opened*/}
                <Modal isOpen={toggleAdduser} className='edit-user-page'>
                    <AddList setList={setList} setToggleAdduser={setToggleAdduser}/>
                </Modal> 
                
                {/*delete tab will get opened */}
                <Modal isOpen={toggleDeleteuser} className='edit-user-page'>
                    <RiCloseLine className='edit-profile-logo' onClick={closeDeleteModal}/>
                    <div className='deleteWarning'>
                        <p>Are you sure you want to delete the user?</p>
                        <div>
                            <div><button className='add-bt' onClick={closeDeleteModal}>No</button></div>
                            <div><button className='delete-bt' onClick={() => handleDelete(this.current.id)}>Yes</button></div>
                        </div>
                    </div>
                </Modal>
                </div>  
        </div>   
    )
    function handleDelete(id) {
        const newlist = list2.filter((li) => li.id !== id)
        setList(newlist)
    }
}
function AddList({setList, setToggleAdduser}){
    const fnameRef =useRef();
    const lnameRef =useRef();
    const phnRef =useRef();
    const roleRef =useRef();
    const dashboardRef =useRef();
    

    function handleSubmit(event){
        event.preventDefault();
        const firstName= event.currentTarget.elements.fname.value;
        const lastName= event.currentTarget.elements.lname.value;
        const phone= event.currentTarget.elements.phone.value;
        const role= event.currentTarget.elements.role.value;
        const dashboard= event.currentTarget.elements.dash.value;
        const newList =[
            {
                id:5,
                firstName,
                lastName,
                phone,
                role,
                dashboard
            }
        ]
        setList((prevList)=>{
            return prevList.concat(newList);
        })
        fnameRef.current.value="";
        lnameRef.current.value="";
        phnRef.current.value="";
        roleRef.current.value="";
        dashboardRef.current.value="";
    }
    function closeModal2(){
        setToggleAdduser(false);
    }
    return(
        <form className='addform' onSubmit={handleSubmit}>
            <RiCloseLine className='edit-profile-logo' onClick={closeModal2}/>
            <input type="text" id="fname" placeholder="Enter first Name" ref={fnameRef} required/>
            <input type="text" id="lname" placeholder="Enter  last Name" ref={lnameRef} required/>
            <input type="tel" id="phone" placeholder="Enter Phone no." ref={phnRef} required/>
            <input type="text" id="role" placeholder="Enter Role" ref={roleRef} required/>
            <input type="number" id="dash" placeholder="Enter Dashboard" ref={dashboardRef} required/>
            <button type="submit" className='add-bt'>Add</button>
        </form>
    )
}
export default Mu;     
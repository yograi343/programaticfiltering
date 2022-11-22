import React from 'react';
import './App.css';
import {Main,Config, Dashboards,Login2,Mangeuser,Register, Password, Edituser,Mu} from './components'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className='App'>
        <BrowserRouter>
            <Routes>
            <Route index element={<Login2/>} />
            <Route path="Register" element={<Register/>}/>
            <Route path="Register/Password" element={<Password/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="config" element={<Config/>}/>
            <Route path="manage" element={<Mangeuser/>}/>
            <Route path="Dashboards" element={<Dashboards/>}/>
            <Route path="manage/edituser" element={<Edituser/>}/>
            <Route path="mu" element={<Mu/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;

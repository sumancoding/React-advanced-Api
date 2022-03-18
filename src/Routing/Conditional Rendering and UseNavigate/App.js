import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import DashBoard from './DashBoard'
import Login from './Login'
import Logout from './Logout';
import Nav from './Nav';

const App = () => {
  let isLogged = true; //checks if user is logged in or not
  let data = {
    'st': 'User not Logged In'
  }  
  //THis message in seen in Login when redirecting with state name and 
  //now this can be accesed in Login Page using UseLocation

  return (
    <div>
      <Nav />
      <Routes>
        <Route path= '/' element={<h1>Welcome to Registration and Login Page</h1>}/>
        <Route path= '/dashboard' element={isLogged ? <DashBoard /> : <Navigate to='/login' replace state={data}/>}/>
         <Route path= '/login' element={<Login/>}/>
         <Route path= '/logout' element={<Logout/>}/>
      </Routes>
    </div>
  )
}

export default App


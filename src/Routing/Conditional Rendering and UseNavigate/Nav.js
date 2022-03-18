import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
   <ul>
    <li><NavLink to='/dashboard' style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>DashBoard</NavLink></li>
     <li><NavLink to='/login'  style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>LogIn</NavLink></li>
   
   </ul>
    </div>
  )
}

export default Nav

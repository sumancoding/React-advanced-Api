import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
   <ul>
    <li><NavLink to='/' style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>Home</NavLink></li>
     <li><NavLink to='/about'  style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>About</NavLink></li>
       <li><NavLink to='/contact'  style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>Contact Us</NavLink></li>
      
   </ul>
   {/* Outlet helps in child to be rendered in Parent */}
   <Outlet/>
    </div>
  )
}

export default Layout;

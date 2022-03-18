import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
   <ul>
    <li><NavLink to='/' style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>Home</NavLink></li>
     <li><NavLink to='/about'  style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>About</NavLink></li>
    <li><NavLink to='/contact'  style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>Contact Us</NavLink></li>
    <li><NavLink to='/post/mobile'  style={({isActive})=> {return {color : isActive ? 'red' : ''}}}>Post</NavLink></li>
   </ul>
    </div>
  )
}

export default Nav

import React from 'react'

import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Layout from './Layout';

const App = () => {
  
  return (
    <div>
      <Routes> 
        {/* When doing nesting we need opening and closing tag */}
        <Route path='/' element={<Layout/>} >   
        <Route path='about' element={<About/>}/> 
        <Route path='contact' element={<Contact/>}/> 
        {/* for the home component we can give index instead of '/'. Index root shares its parent path */}
         <Route index element={<Home/>}/> 
        </Route>

       
      </Routes>
    </div>
  )
}

export default App


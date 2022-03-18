import React from 'react'
import Nav from './Nav'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Post from './Post';

const App = () => {
  return (
    <div>
      <Nav />
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/>
          {/* we need to use segment for dynamic page */}
        <Route path='/post/:category' element={<Post/>}/>
        <Route path='*' element={<h1>Page Error !!!!</h1>}/> 
    </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    let location= useLocation() //This has been acccessed from App file via state
    console.log(location);
      return (
    <div>
      <h1> Login Page</h1>
      <h2>{location.state.st}</h2>
    </div>
  )
}

export default Login

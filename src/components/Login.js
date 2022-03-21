import React, {useState} from 'react'

const Login = () => {
  const[username, setUsername] = useState('');
   const[showProfile, setShowProfile] = useState('');
  return (
    <div>
      <input type="text" placeholder='Enter your name....' onChange={(e) => {
        setUsername(e.target.value)
      }} /> <br /> <br />
      <input type="text" placeholder='Password .....' /> <br /> <br />
    <button onClick={() => {
      setShowProfile(true)
    }}>LogIn</button>

    {showProfile && <h1>{username}</h1>}
    </div>
  )
}

export default Login

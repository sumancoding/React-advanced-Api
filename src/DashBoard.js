import React from 'react'
import {useNavigate} from 'react-router-dom'; //UseNavigate is similar to useLocation use to navigate

const DashBoard = () => {
  let navigate = useNavigate();
  let data= {
    'name': 'Suman'
  }
  return (
    <div>
      <h1>DashBoard Page</h1>  
      <button onClick={() => {navigate('/logout', {state:data})} }>Logout</button>
    </div>
  )
}

export default DashBoard

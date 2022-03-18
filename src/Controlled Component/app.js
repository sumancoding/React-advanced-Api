//In controlled component, input fields are contolled directly via state 
import React, {useState} from 'react'

const App = () => {
  const[val, setVal] = useState('');
  const[item, setItem] =useState('');
  return (
    <div>
      <h1> Controlled Component </h1>
      <input type="text" placeholder='Enter...' value={val} onChange={(e) => setVal(e.target.value)} /> <br />  <br />
      <input type="text" value={item} onChange={(e) => {
        setItem(e.target.value)
      }}/>
      <h3> {val}</h3>
    </div>
  )
}

export default App
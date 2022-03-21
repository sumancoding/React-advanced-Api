import React, {useState, UseEffect} from 'react'


const App = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[mobile, setMobile] = useState('');
  function saveUser() {
    console.log({name, email, mobile});
    let data = {name, email, mobile}
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method:'POST',
      headers:{
        "Accept": "application/json",
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)}).then((res) => {
console.log(res);
      })
    }
  
  return (
    <div>
      <h1>Post API</h1>
      <input type="text" value={name} onChange={(e) => {
      setName(e.target.value)
      }} name='name' /> <br /> <br />
       <input type="text" value={email}  onChange={(e) => {
      setEmail(e.target.value)
      }} name='email' /> <br /> <br />
        <input type="text" value={mobile}  onChange={(e) => {
      setMobile(e.target.value)
      }} name='mobile' /> <br /> <br />
        <button type='button' onClick={saveUser}>Save new item</button>
    </div>
  )
}

export default App

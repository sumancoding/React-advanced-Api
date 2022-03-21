import React, {useEffect, useState} from 'react'

const App = () => {
  const[data, setData] = useState([]);
useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries').then((res)=> {
res.json().then((result) => {
//console.log(result);
setData(result);
})
  })
}, []);
console.log(data)
function deleteUser(id) {
fetch(`'https://api.openbrewerydb.org/breweries${id}`, {
  method: 'DELETE'
}).then((res) => {
  res.json().then((resp) =>{
    console.log(resp)
  })
})
}
  return (
    <div>
      <h1>Call API</h1>
      <table border='1'>
        <tr>
          <td>Id</td>
          <td>Name</td>
            <td>City</td>
              <td>State</td>
        </tr>
        {data.map((item) => 
         <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
            <td>{item.city}</td>
              <td>{item.state}</td>
              <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
        </tr>)}
      </table>
    </div>
  )
}

export default App

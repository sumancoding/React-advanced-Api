//Unlike controlled component, input fields arenot contolled via state , either via Ref or Javascript
import React, {useRef} from 'react'

const App = () => {
  let inputRef = useRef(null);  //One instance can be contrlled via useRef
   let inputRef2 = useRef(null);
   let input3= document.getElementById('input3').value //Other than useRef
   console.log('input value 3',input3)  
  return (
    <div>
     <form onSubmit={(e) => {
       e.preventDefault()
       console.log('Input field value :', inputRef.current.value)
     console.log('Input field value :', inputRef2.current.value)
     }}>
        <h1> UnControlled Component </h1>
      <input type="text" placeholder='Enter your name...' ref={inputRef} /> <br /> <br />
       <input type="text" placeholder='Enter your email address...'  ref={inputRef2}/> <br /> <br />
       <input type="text" id='input3'/>
       <button>Submit</button>
     </form>

    </div>
  )
}

export default App



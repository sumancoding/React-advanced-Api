//Advanced version of useRef .Used we nned to use in 2 different component
import React, {useRef} from 'react'

const App = () => {
  let inputRef= useRef(null);
  function handleInput() {
    console.log('Function called')
    //inputRef.current.value ='1000';  //value can be added like this 
   //inputRef.current.focus()   //focus is a funtion, dont use it like a property 
   //inputRef.current.style.color= 'red' //style change  
   inputRef.current.style.display= 'none'
  }
  return (
    <div>
      <h1> Use Ref in Functional Component</h1>
      <input type="text" ref={inputRef} />  
      {/* THis is the DOM you want to mainpulate with ref property */}
      <button onClick={handleInput}> Handle Input </button>
    </div>
  )
}

export default App

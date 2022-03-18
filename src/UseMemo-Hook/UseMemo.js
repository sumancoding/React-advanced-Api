//useMemo enhances performance

import React, {useState, useMemo} from 'react'

const App = () => {
  const[count, setCount] = useState(0);
  const[item, setItem]= useState(10)

  const multiCountMemo = useMemo(function multiCount() {
    console.log('Multi Count')
    return count* 5
  }, [count] )  //so that when it updates only when count is updated not item 
  return (
    <div>
      <h1> UseMemo : {count} </h1>
      <button onClick= {() => {
        setCount(count+1)
      }}> Update Count </button>
      <h2> Item state: {item} </h2>
       <button onClick= {() => {
        setItem(item * 10)
      }}> Update Item </button>

     <h2> {multiCountMemo}</h2>


    </div>
  )
}

export default App



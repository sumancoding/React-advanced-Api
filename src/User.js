import React, {useEffect,useRef} from 'react'

const User = ({count}) => {
    const lastVal= useRef();
    useEffect(() => {lastVal.current= count})
    const previousProps= lastVal.current 
  return (
    <div>
      <h1>curent Val {count}</h1>
      <h2>Previous Val {previousProps}</h2>
    </div>
  )
}

export default User

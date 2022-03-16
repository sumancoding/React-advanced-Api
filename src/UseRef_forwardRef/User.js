import React, {forwardRef} from 'react'

const User = (props, ref) => {
  return (
    <div>
    <input type='text' ref={ref}></input>
    </div>
  )
}

export default forwardRef(User);  //Ref is recieved 




 
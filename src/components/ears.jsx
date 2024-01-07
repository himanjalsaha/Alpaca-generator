import React from 'react'
import "./App.css"
function Ears({onearchange}) {
  return (
    <div className='button_holder'> 
            <button onClick={()=>onearchange("default")}>default</button>
            <button onClick={()=>onearchange("tilt-backward")}>tilt backwards</button>
            <button onClick={()=>onearchange("tilt-forward")}>tilt forward</button>
           
    </div>
  )
}

export default Ears
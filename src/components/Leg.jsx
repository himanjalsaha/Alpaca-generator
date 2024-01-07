import React from 'react'
import "./App.css"
function Leg({onlegchange}) {
  return (
    <div className='button_holder'> 
    <button onClick={()=>onlegchange("default")}>default</button>
    <button onClick={()=>onlegchange("bubble-tea")}>bubble</button>
    <button onClick={()=>onlegchange("cookie")}>cookie</button>
    <button onClick={()=>onlegchange("game-console")}>game-console</button>
    <button onClick={()=>onlegchange("tilt-backward")}>tilt-backwards</button>
    <button onClick={()=>onlegchange("tilt-forward")}>tilt-forward</button> 
</div>
  )
}

export default Leg
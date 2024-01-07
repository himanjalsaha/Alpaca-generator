import React from 'react'
import "./App.css"
function BG({onbgchange}) {
  return (
    <div className='button_holder'> 
    <button onClick={()=>onbgchange("blue50")}>blue50</button>
    <button onClick={()=>onbgchange("blue60")}>blue60</button>
    <button onClick={()=>onbgchange("blue70")}>blue70</button>
    <button onClick={()=>onbgchange("green50")}>green50</button>
    <button onClick={()=>onbgchange("green60")}>green60</button>
    <button onClick={()=>onbgchange("blue70")}>green70</button> 
</div>
  )
}

export default BG
import React from 'react'
import "./App.css"
function Accesories({onaccchange}) {
  return (
    <div className='button_holder'> 
    <button onClick={()=>onaccchange("earings")}>earings</button>
    <button onClick={()=>onaccchange("flower")}>flower</button>
    <button onClick={()=>onaccchange("glasses")}>glasses</button>
    <button onClick={()=>onaccchange("headphone")}>headphone</button>
    
</div>
  )
}

export default Accesories
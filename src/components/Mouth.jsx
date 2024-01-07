import React from 'react'

function Mouth({onmouthchange}) {
  return (
    <div className='button_holder'> 
    <button onClick={()=>onmouthchange("astonished")}>astonished</button>
           <button onClick={()=>onmouthchange("default")}>default</button>
           <button onClick={()=>onmouthchange("eating")}>eating</button>
           <button onClick={()=>onmouthchange("laugh")}>laugh</button>
           <button onClick={()=>onmouthchange("tongue")}>tongue</button>     
   </div>
  )
}

export default Mouth
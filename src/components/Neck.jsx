import React from 'react'

function Neck({onChangeNeck}) {
  return (
    <div className='button_holder'> 
     <button onClick={()=>onChangeNeck("bend-backward")}>bend-backwards</button>
            <button onClick={()=>onChangeNeck("bend-forward")}>bend-forward</button>
            <button onClick={()=>onChangeNeck("thick")}>thick</button>
            <button onClick={()=>onChangeNeck("default")}>default</button>
            
           
    </div>
  )
}

export default Neck
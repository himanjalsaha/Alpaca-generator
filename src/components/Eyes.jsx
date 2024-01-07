import React from 'react'
import "./App.css"
function Eyes({onchangeeye}) {
  return (
    <div className='button_holder'> 
    <button onClick={()=>onchangeeye("default")}>default</button>
    <button onClick={()=>onchangeeye("angry")}>angry</button>
    <button onClick={()=>onchangeeye("naughty")}>naughty</button>
    <button onClick={()=>onchangeeye("panda")}>panda</button>
    <button onClick={()=>onchangeeye("smart")}>smart</button>
    <button onClick={()=>onchangeeye("star")}>star</button>



   
</div>
  )
}

export default Eyes
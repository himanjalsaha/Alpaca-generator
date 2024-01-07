import React from 'react'
import bang from "../alpaca/hair/bang.png"
function Hair({onChangeHair}) {

  return (
    <div className='button_holder'> 
     <button onClick={() => onChangeHair('bang')}>bang</button>
            <button onClick={() => onChangeHair('curls')}>curls</button>
            <button onClick={() => onChangeHair('elegant')}>elegant</button>
            <button onClick={() => onChangeHair('fancy')}>fancy</button>
            <button onClick={() => onChangeHair('quiff')}>quiff</button>
            <button onClick={() => onChangeHair('short')}>short</button> 
    </div>
  )
}

export default Hair
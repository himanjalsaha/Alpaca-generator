import React, { useEffect, useState } from 'react'
import './App.css'
import blue50 from '../alpaca/backgrounds/blue50.png'
import nose from '../alpaca/nose.png'
import default_mouth from '../alpaca/mouth/default.png'
import default_eyes from '../alpaca/eyes/default.png'
import default_neck from '../alpaca/neck/default.png'
import default_ears from "../alpaca/ears/default.png"
import default_hair from "../alpaca/hair/default.png"
import defult_leg from "../alpaca/leg/default.png"
import earings from '../alpaca/accessories/earings.png'
import flower from '../alpaca/accessories/flower.png'
import Ears from './ears'
import Hair from './Hair'
import Neck from './Neck'
import Mouth from './Mouth'
import Eyes from './Eyes'
import Leg from './Leg'
import Accesories from './Accesories'
import BG from './BG'
import domtoimage from 'dom-to-image';
function Alpaca() {
        const [showcomponent , setShowcomponent] = useState(null)
        const [hairType, setHairType] = useState('default');
        const [eartype, seteartype] = useState("default");  
        const [LegType, setLegtype]  = useState("default")
        const [MouthtType , SetMouthtype] = useState("default")
        const [eyeType , setEyetype] = useState("default")
        const [Necktype ,  Setnecktype] = useState("default")
        const [BGtype,setBg] = useState("blue50")
        const [acctype,setacctype] = useState("")

        const handleHairChange = (newHairType) => {
            setHairType(newHairType);
          };

        const handlearchange = (neweartype) =>{
            seteartype(neweartype)
        }

        const handlelegChenge=(newlegtype)=>{
            setLegtype(newlegtype)
        }

        const handleMouthchange=(newmouthtype)=>{
            SetMouthtype(newmouthtype)
        }

        const handleEyechange = (neweyetype)=>{
            setEyetype(neweyetype)
        }

        const handleNeckchange = (newnecktype) =>{
            Setnecktype(newnecktype)
        }

        const handleBgChange=(newbg)=>{
            setBg(newbg)
        }

        const handleAccchange=(newacc)=>{
            setacctype(newacc)

        }
    

        const compmap={
            1:<Ears on onearchange={handlearchange}/>,
            2:<Hair onChangeHair={handleHairChange}/>,
            3:<Eyes onchangeeye={handleEyechange}/>,
            4:<Mouth onmouthchange={handleMouthchange} />,
            5:<Neck onChangeNeck={handleNeckchange}/>,
            6:<Leg onlegchange={handlelegChenge}/>,
            7:<Accesories onaccchange={handleAccchange}/>,
            8:<BG onbgchange={handleBgChange}/>
        }
        const handleClick= (something)=>{
            setShowcomponent(something)            
        }

        const handleDownload = () => {
            const imageContainer = document.getElementById('image-container'); // id of the container
  domtoimage.toPng(imageContainer)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'composed_image.png';
      link.click();
    })
    .catch((error) => {
      console.error('Error generating image:', error);
    });
          };
          
       

  return (
    <div className='parent'>
 
   
        <div className='container'>
      

            <div id='image-container' className='image-container'>
             
                <img src={require(`../alpaca/backgrounds/${BGtype}.png`)} alt="" />
                <img src={require(`../alpaca/ears/${eartype}.png`)} alt="" />
      
                <img src={require(`../alpaca/neck/${Necktype}.png`)} alt="" />
                <img src={nose} alt="" />
      
                <img src={require(`../alpaca/mouth/${MouthtType}.png`)} alt="" />
                {acctype && <img src={require(`../alpaca/accessories/${acctype}.png`)} alt="" />} 

                <img src={require(`../alpaca/hair/${hairType}.png`)} alt="" />
                <img src={require(`../alpaca/eyes/${eyeType}.png`)} alt="" />
                <img src={require(`../alpaca/leg/${LegType}.png`)} alt="" />

            </div>
            <div>
            <h2 className='heading'>Accesorize your alpaca</h2>
            <div className='button_holder'>  
          
            <button onClick={()=>handleClick(1)} value="Ears">Ears</button>
            <button onClick={()=>handleClick(2)}>hair</button>
            <button  onClick={()=>handleClick(3)} >eyes</button>
            <button onClick={()=>handleClick(4)}>mouth</button>
            <button  onClick={()=>handleClick(5)}>neck</button>
            <button  onClick={()=>handleClick(6)}>Leg</button>
            <button  onClick={()=>handleClick(7)}>Accesories</button>
            <button  onClick={()=>handleClick(8)}>Background</button>
       

        </div>
        <hr/>
        {showcomponent  && <h2 className='heading'>style</h2> }


        {showcomponent && compmap[showcomponent]}
        <div className='download'>
        {showcomponent && <button onClick={handleDownload}>download</button>}

        </div>




       

            </div>
           
        
        </div>
          
    </div>
  )
}

export default Alpaca
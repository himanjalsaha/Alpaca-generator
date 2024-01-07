import React, { useDebugValue, useEffect, useState } from 'react'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import './App.css';
import DataFetching from './DataFetcheing';
function Signup() {
    const navigate = useNavigate()
    const [err,setErr]= useState(false)
    const [user ,Setuser] = useState("")
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value   
        console.log(username,email,password);
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's display name
      await updateProfile(userCredential.user, {
        displayName: username
      });
      Setuser(userCredential.user)
    //   navigate("/")
    
      console.log(user);
          
        }
        catch(err){
            setErr(true)

        }
        }

        useEffect(()=>{
           
            if (user) {
                console.log(user);
                navigate('/');
              }

        },[user,navigate])


  return (
    <div className='container'>
       <div className='App-header'>
        <form  onSubmit={handleSubmit} className='signup_form'>
            <text>Signup</text>
            <input placeholder='username'/> 
            <input type='email' placeholder='email'/> 
            <input type='password' placeholder='password'/> 
            <button type='submit'>Signup</button>
        </form>
        {err && <span>something went wrong</span>}

        
       </div>
    </div>
  )
}

export default Signup
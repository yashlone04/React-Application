import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
    var[fname,setFname]=useState();
    var[email,setEmail]=useState();
    var go=useNavigate();
    var getFname=(event)=>{
        setFname(event.target.value);
    }

    var getEmail=(event)=>{
        setEmail(event.target.value);
    }
    var handleSubmit=(event)=>{
      event.preventDefault();
      if(fname && email){
        setUser({fname,email})
        go('/dashboard')
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type='text' name='fname' onChange={getFname}/><br/>
        
        <label>Email</label>
        <input type='email' name='email' onChange={getEmail}/><br/>
        <input type='submit' value="Submit"/>

      </form>
    </div>
  )
}

export default Login

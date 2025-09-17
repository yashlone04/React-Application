import React from 'react'
import { useState } from 'react'

const ControlledInputForms = () => {
    var[uname,setUname] = useState();
    var[email,setEmail] = useState();
    var[age,setAge] = useState();
    var[people,SetPeople] = useState([]);

    var handleSubmit = (event) =>{
        event.preventDefault();
        
        if(uname && email && age){
            var person={uname,email,age}
            SetPeople((p)=>{return[...p,person]})
            setUname('');
            setEmail('');
            setAge('');
        }
    }

    var changeUname = (event) =>{
        setUname(event.target.value);
    }
    var changeEmail = (event) =>{
        setEmail(event.target.value);
    }
    var changeAge = (event) =>{
        setAge(event.target.value);
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Controlled Input Forms</label>
        <br /><br />
        <input type="text" placeholder='Enter your name' onChange={changeUname} value={uname}/>
        <br /><br />
        <input type="email" placeholder='Enter your email' onChange={changeEmail} value={email}/>
        <br /><br />
        <input type="number" placeholder='Enter your age' onChange={changeAge} value={age}/>
        <br /><br />
        <input type="submit" />
        <br /><br />
        
        </form>
      <h2>{uname}---{email}---{age}</h2>
        <h2>List of People</h2>
        {people.map((person)=>{
            return <h3>{person.uname}---{person.email}----{person.age}</h3>
        })}
    </div>
  )
}

export default ControlledInputForms

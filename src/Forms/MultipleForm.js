import React from 'react'
import { useState } from 'react';

const MultipleInputForm = () => {
  var [person, setPerson] = useState({uname:"", email:"", age:"", phone:""})
  var [people, setPeople] = useState([]);
  var getData=(event)=>{
    var key=event.target.id;
    var data=event.target.value;
    console.log(key, data);
    setPerson({...person, [key]:data})
    console.log(person);
  }
  var handleSubmit=(event)=>{
    event.preventDefault();
    if(person.uname && person.email && person.age && person.phone)
      {
        setPeople((p)=>{return [...p, person]})
      }
      setPerson({uname:"", email:"", age:"", phone:""})
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input type="text" id="uname" onChange={getData} value={person.uname}/><br />

        <label>User Email</label>
        <input type="email" id="email" onChange={getData} value={person.email}/><br />

        <label>User Age</label>
        <input type="number" id="age" onChange={getData} value={person.age}/><br />

        <label>User Phone</label>
        <input type="number" id="phone" onChange={getData} value={person.phone}/><br />

        <button type="submit">Submit</button>
      </form>
      <h2>{person.uname}------{person.email}------{person.age}------{person.phone}</h2>
      {people.map((person)=>{
        return(
          <div key={person.uname}>
            <h1>{person.uname}------{person.email}------{person.age}------{person.phone}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default MultipleInputForm
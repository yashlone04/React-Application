import React from 'react'

const UseStateData = () => {
    var name="Nishant";
    var ChangeName=()=>{
        name="Rathod";
        console.log(name);
    }
    console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}

export default UseStateData
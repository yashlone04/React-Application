import React, { useRef } from 'react'

export const UseRefHook = () => {
    var h1Container = useRef(null);
    var divContainer = useRef(null);
    var formContainer = useRef(null);
    var changeH1 = () => {
        console.log(h1Container);
        h1Container.current.style.color = "blue";
        h1Container.current.style.backgroundColor = "pink";
    }
    var changeDiv=()=>{
        divContainer.current.style.border="2px solid red";
    }

    var loadData=()=>{
        formContainer.current.children[0].value="ABC";
        formContainer.current.children[1].value="DEF";
        formContainer.current.children[2].value="GHI";
    }
  return (
    <div ref={divContainer} onClick={changeDiv}>
      <h1 ref={h1Container} onClick={changeH1}>Welcome to UseRef Hook</h1>
      <form ref={formContainer}>
        <input type="text" id="first" /> <br />
        <input type="text" id="second" /> <br />
        <input type="text" id="third" /> <br />
      </form>
      <button onClick={loadData}>Load</button>
    </div>
  )
}





import React from 'react'
import { useState } from 'react'

export const UseStateCounter = () => {
    var [counter, setCounter] = useState(0);
    var increment = () => {
        counter = counter + 1;
        setCounter(counter + 1);
    }
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
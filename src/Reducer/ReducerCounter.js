import React from 'react'
import { useReducer } from 'react'

export const ReducerCounter = () => {
    var reducer = (count, action) => {
        console.log(count, "count");
        console.log(action, "Action");
        switch(action.type){
            case 'ADD':
                return count+1;
            case 'SUB':
                return count-1;
            default:
                return 0;
        }
    }
    var [count,dispatchCount] = useReducer(reducer,0);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>{dispatchCount({type:'ADD'})}}>+</button>
        <button onClick={()=>{dispatchCount({type:'SUB'})}}>-</button>
    </div>
  )
}


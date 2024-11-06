import React, { useReducer } from 'react'

const initialState={
  count:0
}
const reducer = (state,action)=>{
  switch(action.type){
    case "increment":
      return {count:state.count+1};
      break;
    case "decrement":
      return {count:state.count-1};
      break;
    default:
      throw new Error();
      break;

  }
}
const UseReducer = () => {
  const [state, dispatch]  = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <p>Jubed Alam</p>
        <span>{state.count}</span>
      </div>
      <div>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      </div>
      <div>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      </div>      
    </div>
  )
}

export default UseReducer
import React, { useMemo, useState } from 'react'

const UseMemo2 = () => {
    const [count, setCount] =   useState(0);
    const [todos, setTodos] =useState([]);
    const calculation=  useMemo(()=>firstCalculation(count),[count]);
    const calculation2=  useMemo(()=>secondCalculation2(count),[count]);
    const increase1 =   ()=>{
        console.log('increase1');
        setCount(count+1);
    }
    const addTodo   =   ()=>{
        setTodos((todo)=>[...todo,'new todo']);
    }

  return (
    <div>
        <div>
            <button onClick={increase1}>Increase1</button>
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
            {todos.map((elem, index)=><p key={index}>{elem}</p>)}
        </div>
        <hr />
        <div>
        <span>Count:{count}</span><br/>
        <span>calculation:{calculation}</span>
        <span>calculation2:{calculation2}</span>
        </div>
    </div>
  );
};

const firstCalculation  =(num)=>{
    console.log('calculation1...');    
    for(let i=0;i<=1000000000;i++){
        num+=1
    }
    return num;
}
const secondCalculation2  =(num)=>{
    console.log('calculation2...');    
    for(let i=0;i<=1000000000;i++){
        num+=1
    }
    return num;
}

export default UseMemo2
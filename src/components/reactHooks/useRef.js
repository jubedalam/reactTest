import React, { useEffect, useRef, useState } from 'react'

// const UseRef = () => {
//     const inputElement  =   useRef();
//     const handleChange  =   (event)=>{
//         inputElement.current.focus();
//     }
//   return (
//     <div>
//         <input ref={inputElement} />
//         <button onClick={handleChange}>Click me to focus</button>
//     </div>
//   )
// }

const UseRef = () => {
    const [inputElement, setInputElement]   =   useState("");
    const [inputElement2, setInputElement2]   =   useState("");
    const count  =   useRef(0);
        useEffect(()=>{
            count.current=count.current+1;
        })

   
  return (
    <div>
        <input value={inputElement} type="text" onChange={(e)=>setInputElement(e.target.value)} />
        <input value={inputElement2} type="text" onChange={(e)=>setInputElement2(e.target.value)} />
        <p>{count.current}</p>
    </div>
  )
}

export default UseRef
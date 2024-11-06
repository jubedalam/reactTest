import React, { useEffect, useRef, useState } from 'react'

const UseRef2 = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const a=useRef(0);
// var a=0;
  useEffect(() => {
    a.current=a.current+1;
    previousInputValue.current = inputValue;
    console.log("the value of a is ",a.current);
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default UseRef2
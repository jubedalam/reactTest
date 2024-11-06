import { useCallback, useState } from "react";
import CallbackTodo from "./callbackTodo";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  return (
    <>
      <CallbackTodo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallback
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../TodoAtom";

function Todoitem() {
  const [inputValue, setInputValue] = useState("");

  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
    console.log(inputValue);
  };

  return (
    <div>
      <h3>TO-DO-LIST</h3>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>+</button>
    </div>
  );
}

let id = 0;
const getId = () => {
  return id++;
};

export default Todoitem;

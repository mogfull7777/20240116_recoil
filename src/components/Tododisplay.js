import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../TodoAtom";

function Tododisplay({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItme) => listItme === item);
  // Todoitem의 값을 어떻게 받아오는거지?
  // Todoitem.js ---> TodoAtom.js ---> App.js ---> Tododisplay.js
  const editorItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const editorComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" onChange={editorItem} value={item.text} />
      <input
        type="checkbox"
        onChange={editorComplete}
        value={item.isComplete}
      />
      {/* false에서 true로 */}
    </div>
  );
}

export default Tododisplay;

// 수정한걸 그 자리에 재 배열해주는 함수.
const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

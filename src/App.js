import "./App.css";
import Todoitem from "./components/Todoitem";
import { useRecoilValue } from "recoil";
import { todoListState } from "./TodoAtom";
import Tododisplay from "./components/Tododisplay";

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);

  return (
    <div className="App">
      <Todoitem />
      {todoList.map((todoList) => (
        <Tododisplay key={todoList.id} item={todoList} />
      ))}
    </div>
  );
}

export default App;

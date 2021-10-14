import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import todosOperations from "./redux/todos.operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;

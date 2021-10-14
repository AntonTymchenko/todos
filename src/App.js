import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import todosOperations from "./redux/todos.operations";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todos.isModalOpen);
  const data = useSelector((state) => state.todos.items);

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, []);
  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
    console.log("data APP", data);
  }, [status]);

  return (
    <div className="App">
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;

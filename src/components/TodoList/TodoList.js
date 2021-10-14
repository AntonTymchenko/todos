import Todo from "../Todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import todosOperations from "../../redux/todos.operations";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const onDeleteTodo = (id) => dispatch(todosOperations.deleteTodo(id));

  return (
    <ul className={styles.list}>
      {todos.map(({ id, body, title, idNew }) => {
        return (
          <li key={idNew || id} className={styles.item}>
            <Todo title={title} text={body} onDelete={() => onDeleteTodo(id)} />
          </li>
        );
      })}
    </ul>
  );
}

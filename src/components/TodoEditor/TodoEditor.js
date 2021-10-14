import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todosOperations from "../../redux/todos.operations";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoEditor.module.css";

function TodoEditor() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const getBodyTodo = (e) => {
    setBody(e.target.value);
  };
  const getTitleTodo = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (body === "" || title === "") {
      return;
    }
    const idNew = uuidv4();
    dispatch(todosOperations.addTodo(title, body, idNew));
    setBody("");
    setTitle("");
  };
  return (
    <form className={styles.decor} onSubmit={handleSubmit}>
      <div className={styles.circle}></div>
      <div className={styles.formInner}>
        <input
          value={title}
          onChange={getTitleTodo}
          placeholder="Title"
          className={styles.inputForm}
        />
        <input
          className={styles.input}
          value={body}
          onChange={getBodyTodo}
          placeholder="Your text"
        />

        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </div>
    </form>
  );
}
export { TodoEditor };

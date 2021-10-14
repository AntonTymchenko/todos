import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todosOperations from "../../redux/todos.operations";
import styles from "./FromForChangeItem.module.css";

export function FromForChangeItem() {
  const dispatch = useDispatch();
  const { title, body } = useSelector((state) => state.todos.itemById);

  const [titleChange, setTitleChange] = useState("");
  const [bodyChange, setBodyChange] = useState("");

  useEffect(() => {
    dispatch(todosOperations.fetchTodoById(1));
    setTitleChange(title);
    setBodyChange(body);
  }, [title]);

  const getChangeTitle = (e) => {
    console.log(e.target.value);
    setTitleChange(e.target.value);
  };
  const getBodyTodo = (e) => {
    setBodyChange(e.target.value);
  };
  const changeItemSubmit = () => {
    dispatch(todosOperations.fetchChangeItem(titleChange, bodyChange));
  };
  return (
    <div>
      <form className={styles.decor} onSubmit={changeItemSubmit}>
        <div className={styles.circle}></div>
        <div className={styles.formInner}>
          <input
            value={titleChange}
            onChange={getChangeTitle}
            placeholder="Title"
            className={styles.inputForm}
          />
          <input
            className={styles.input}
            value={bodyChange}
            onChange={getBodyTodo}
            placeholder="Your text"
          />

          <button type="submit" className={styles.button}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

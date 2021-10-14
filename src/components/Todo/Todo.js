import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusModal } from "../../redux/todos.actions";
import Modal from "../Modal/Modal";
import styles from "./Todo.module.css";

export default function Todo({ text, onDelete, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const isModalStatus = useSelector((state) => state.todos.isModalOpen);

  const toggleModal = () => {
    dispatch(statusModal(isModalOpen));
    // console.log("isModalStatus", isModalStatus);
    // console.log("isModalOpen", isModalOpen);
    setIsModalOpen((state) => !state);
  };
  return (
    <>
      <div className={styles.titleText}>
        <h3>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div>
        <button type="button" className={styles.button} onClick={toggleModal}>
          Редактировать
        </button>
        <button type="button" className={styles.button} onClick={onDelete}>
          Удалить
        </button>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </>
  );
}

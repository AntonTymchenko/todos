import styles from "./Todo.module.css";

export default function Todo({ text, onDelete, title }) {
  return (
    <>
      <div className={styles.titleText}>
        <h3>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <button type="button" className={styles.button} onClick={onDelete}>
        Удалить
      </button>
    </>
  );
}

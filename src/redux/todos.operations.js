import axios from "axios";
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
} from "./todos.actions";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// GET @ /tasks
const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get("/posts");
    console.log(data);

    dispatch(fetchTodosSuccess(data.splice(0, 10)));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
};

// POST @ /tasks
const addTodo = (title, body, idNew) => (dispatch) => {
  const todo = {
    title,
    body,
    idNew,
  };
  dispatch(addTodoRequest());
  console.log(todo);

  axios
    .post("/posts", todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch((error) => dispatch(addTodoError(error.message)));
};

// DELETE @ /tasks/:id
const deleteTodo = (todoId) => (dispatch) => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/posts/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch((error) => dispatch(deleteTodoError(error.message)));
};

// PATCH @ /tasks/:id

const todosOperations = {
  fetchTodos,
  addTodo,
  deleteTodo,
};
export default todosOperations;

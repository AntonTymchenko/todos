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
  fetchTodosBiIdRequest,
  fetchTodosByIdSuccess,
  fetchTodosByIdError,
  fetchChangeTodosRequest,
  fetchChangeTodosSuccess,
  fetchChangeTodosError,
} from "./todos.actions";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// GET @ /tasks
const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get("/posts");

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

const fetchTodoById = (todoId) => (dispatch) => {
  dispatch(fetchTodosBiIdRequest());

  axios
    .get(`/posts/1`)
    .then(({ data }) => {
      dispatch(fetchTodosByIdSuccess(data));
    })
    .catch((error) => dispatch(fetchTodosByIdError(error.message)));
};

const fetchChangeItem = (title, body) => (dispatch) => {
  dispatch(fetchChangeTodosRequest());

  axios
    .put(`/posts/1`, { id: 1, title: title, body: body })
    .then((response) => response.json())
    .then((json) => console.log("json", json));
};

const todosOperations = {
  fetchTodos,
  addTodo,
  deleteTodo,
  fetchTodoById,
  fetchChangeItem,
};
export default todosOperations;

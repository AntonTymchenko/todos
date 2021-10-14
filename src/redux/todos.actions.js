import { createAction } from "@reduxjs/toolkit";

export const fetchTodosRequest = createAction("todos/fetchTodosRequest");
export const fetchTodosSuccess = createAction("todos/fetchTodosSuccess");
export const fetchTodosError = createAction("todos/fetchTodosError");

export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSuccess = createAction("todos/addTodoSuccess");
export const addTodoError = createAction("todos/addTodoError");

export const deleteTodoRequest = createAction("todos/deleteTodoRequest");
export const deleteTodoSuccess = createAction("todos/deleteTodoSuccess");
export const deleteTodoError = createAction("todos/deleteTodoError");

export const fetchTodosBiIdRequest = createAction(
  "todos/fetchTodosByIdRequest"
);
export const fetchTodosByIdSuccess = createAction(
  "todos/fetchTodosByIdSuccess"
);
export const fetchTodosByIdError = createAction("todos/fetchTodosByIdError");

export const fetchChangeTodosRequest = createAction(
  "todos/fetchChangeTodosRequest"
);
export const fetchChangeTodosSuccess = createAction(
  "todos/fetchChangeTodosSuccess"
);
export const fetchChangeTodosError = createAction(
  "todos/fetchChangeTodosError"
);

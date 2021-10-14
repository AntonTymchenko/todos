import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoSuccess,
  deleteTodoSuccess,
  fetchTodosSuccess,
  fetchTodosByIdSuccess,
  statusModal,
  fetchChangeTodosSuccess,
} from "./todos.actions";

const items = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const itemById = createReducer([], {
  [fetchTodosByIdSuccess]: (_, { payload }) => payload,
});

const isModalOpen = createReducer(false, {
  [statusModal]: (_, { payload }) => payload,
});
const change = createReducer(
  {},
  {
    [fetchChangeTodosSuccess]: (state, { payload }) => state,
  }
);

export default combineReducers({
  items,
  itemById,
  isModalOpen,
  change,
});

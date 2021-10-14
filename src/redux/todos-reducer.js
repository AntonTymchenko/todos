import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoSuccess,
  deleteTodoSuccess,
  fetchTodosSuccess,
} from "./todos.actions";

const items = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  items,
});

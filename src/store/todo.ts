import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../models/todo';
import { RootState } from './store';

const initialTodos: Todo[] = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Buy bread', done: true },
  { id: 3, title: 'Buy cheese', done: false },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodos,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const selectTodos = (state: RootState) => state.todos;
export const todoActions = todoSlice.actions;
export default todoSlice.reducer;

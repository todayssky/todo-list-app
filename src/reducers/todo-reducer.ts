import { produce } from 'immer';
import { Todo } from '../models/todo';

type Action =
  | { type: 'ADD_TODO'; title: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number };

const todoReducer = (todos: Todo[], action: Action) =>
  produce(todos, (draft) => {
    switch (action.type) {
      case 'ADD_TODO':
        let maxId = 0;
        if (draft.length > 0) {
          maxId = Math.max(...draft.map((todo) => todo.id));
        }
        draft.push({ id: maxId + 1, title: action.title, done: false });
        break;
      case 'TOGGLE_TODO':
        const todo = draft.find((todo) => todo.id === action.id);
        if (todo) {
          todo.done = !todo.done;
        }
        break;
      case 'REMOVE_TODO':
        return draft.filter((todo) => todo.id !== action.id);
    }
  });

export default todoReducer;

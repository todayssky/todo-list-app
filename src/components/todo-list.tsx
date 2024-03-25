import TodoArticle from './todo-article';
import {} from '../models/todo';
import { selectTodos } from '../store/todo';
import { useAppSelector } from '../store/store';

export default function TodoList() {
  const todos = useAppSelector(selectTodos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoArticle key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

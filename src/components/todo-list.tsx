import TodoArticle from './todo-article';
import { Todo } from '../modles/todo';

export default function TodoList({
  todos,
  handleRemove,
  handleToggle,
}: {
  todos: Todo[];
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoArticle key={todo.id} todo={todo} handleRemove={handleRemove} handleToggle={handleToggle} />
      ))}
    </div>
  );
}

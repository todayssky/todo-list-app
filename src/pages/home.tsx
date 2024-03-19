import styled from 'styled-components';
import TodoList from '../components/todo-list';
import TodoCreateForm from '../components/todo-form';
import { useCallback, useState } from 'react';
import { produce } from 'immer';

const Layout = styled.div`
  width: 726px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

const Title = styled.header`
  font-size: 24px;
  font-weight: bold;
  color: #474344;
`;

export function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '할일1',
      done: false,
    },
    {
      id: 2,
      title: '할일2',
      done: false,
    },
  ]);

  const handleCreate = useCallback((title: string) => {
    setTodos((prevTodos) => {
      let maxId = 0;
      if (prevTodos.length > 0) {
        maxId = Math.max(...prevTodos.map((todo) => todo.id));
      }
      return produce(prevTodos, (draft) => {
        draft.push({
          id: maxId + 1,
          title,
          done: false,
        });
      });
    });
  }, []);

  const handleRemove = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id: number) => {
    setTodos((prevTodos) =>
      produce(prevTodos, (draft) => {
        const todo = draft.find((todo) => todo.id === id);
        if (todo) {
          todo.done = !todo.done;
        }
      }),
    );
  }, []);

  return (
    <Layout>
      <Title>To Do List</Title>
      <TodoCreateForm handleCreate={handleCreate} />
      <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle} />
    </Layout>
  );
}

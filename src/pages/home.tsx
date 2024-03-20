import styled from 'styled-components';
import TodoList from '../components/todo-list';
import TodoCreateForm from '../components/todo-form';
import { useCallback, useReducer } from 'react';
import todoReducer from '../reducers/todo-reducer';

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
  const [todos, dispatch] = useReducer(todoReducer, [
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
    dispatch({ type: 'ADD_TODO', title });
  }, []);

  const handleRemove = useCallback((id: number) => {
    dispatch({ type: 'REMOVE_TODO', id });
  }, []);

  const handleToggle = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  }, []);

  return (
    <Layout>
      <Title>To Do List</Title>
      <TodoCreateForm handleCreate={handleCreate} />
      <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle} />
    </Layout>
  );
}

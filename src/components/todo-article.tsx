import styled from 'styled-components';
import { Todo } from '../models/todo';
import React from 'react';
import { useAppDispatch } from '../store/store';
import { todoActions } from '../store/todo';

const Layout = styled.article`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  input {
    margin-right: 1rem;
  }
`;

const Checkbox = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 6px;
  color: #474344;
  border: none;
  background-color: #cebdbe;
  cursor: pointer;
  font-size: 20px;
`;

const Content = styled.span`
  flex: 1;
  color: #474344;
`;

const RemoveButton = styled.button`
  justify-content: flex-end;
  border: none;
  background-color: #fff;
  color: #474344;
  font-size: 20px;
  cursor: pointer;
`;

function TodoArticle({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  const handleToggle = (todoId: number) => {
    dispatch(todoActions.toggleTodo(todoId));
  };

  const handleRemove = (todoId: number) => {
    dispatch(todoActions.removeTodo(todoId));
  };

  return (
    <Layout>
      <Checkbox onClick={() => handleToggle(todo.id)}>{todo.done && '✓'}</Checkbox>
      <Content>{todo.title}</Content>
      <RemoveButton onClick={() => handleRemove(todo.id)}>x</RemoveButton>
    </Layout>
  );
}

export default React.memo(TodoArticle);

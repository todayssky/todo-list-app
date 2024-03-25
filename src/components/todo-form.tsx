import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/store';
import { selectTodos, todoActions } from '../store/todo';

const Layout = styled.form`
  display: flex;
  height: 50px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  color: #474344;
  padding: 0 20px;
  background-color: #f0ebe9;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const TodoCreateButton = styled.button`
  background-color: #cebdbe;
  width: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #474344;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default function TodoCreateForm() {
  const [title, setTitle] = useState('');
  const handleChange = (newValue: string) => {
    setTitle(newValue);
  };

  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const handleCreate = (title: string) => {
    const maxId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 0;
    console.log(maxId);
    dispatch(
      todoActions.addTodo({
        id: maxId,
        title,
        done: false,
      }),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreate(title);
    setTitle(() => '');
  };

  return (
    <Layout onSubmit={handleSubmit}>
      <Input type="text" onChange={(e) => handleChange(e.target.value)} value={title} />
      <TodoCreateButton type="submit">+</TodoCreateButton>
    </Layout>
  );
}

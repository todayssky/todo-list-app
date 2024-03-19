import styled from 'styled-components';
import { Todo } from '../modles/todo';

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

export default function TodoArticle({
  todo,
  handleRemove,
  handleToggle,
}: {
  todo: Todo;
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
}) {
  return (
    <Layout>
      <Checkbox onClick={() => handleToggle(todo.id)}>{todo.done && '✓'}</Checkbox>
      <Content>{todo.title}</Content>
      <RemoveButton onClick={() => handleRemove(todo.id)}>x</RemoveButton>
    </Layout>
  );
}

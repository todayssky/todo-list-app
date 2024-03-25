import styled from 'styled-components';
import TodoList from '../components/todo-list';
import TodoCreateForm from '../components/todo-form';

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
  return (
    <Layout>
      <Title>To Do List</Title>
      <TodoCreateForm />
      <TodoList />
    </Layout>
  );
}

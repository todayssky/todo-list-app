import { useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
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

export default function TodoCreateForm({ handleCreate }: { handleCreate: (title: string) => void }) {
  const [title, setTitle] = useState('');
  const handleChange = (newValue: string) => {
    setTitle(newValue);
  };

  const handleSubmit = () => {
    handleCreate(title);
    setTitle(() => '');
  };
  return (
    <Layout>
      <Input type="text" onChange={(e) => handleChange(e.target.value)} value={title} />
      <TodoCreateButton onClick={handleSubmit}>+</TodoCreateButton>
    </Layout>
  );
}

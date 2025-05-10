import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #4e9af1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: crimson;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
  };

  const onDelete = (index) => {
    setToDos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>투두리스트 ({toDos.length})</Title>
      <form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='오늘의 투두'
        />
        <Button type='submit'>추가</Button>
      </form>
      <hr />
      <List>
        {toDos.map((item, index) => (
          <ListItem key={index}>
            {item}
            <DeleteButton onClick={() => onDelete(index)}>삭제</DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Todo;

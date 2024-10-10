import styled from "styled-components";
import profileImage from "/kosmosticlay.jpeg";
import "./App.css";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  color: #640064;
`;
const Heading2 = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #640064;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 35px;
  margin-right: 10px;
  padding-left: 5px;
`;

const LongStyledInput = styled(StyledInput)`
  width: 330px;
`;

const StyledButton = styled.button`
  background-color: #640064;
  font-weight: bold;
`;

const Result = styled.div`
  color: #640064;
  margin-top: 10px;
  font-weight: bold;
`;

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [user, setUser] = useState(null);

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAge(value);
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (name === "" || age === 0) return;
    setUser({ name, age });
    setName("");
    setAge(0);
  };

  return (
    <Wrapper>
      <Heading1>실습</Heading1>
      <Image src={profileImage} />
      eelz
      <Heading2>사용자 입력 정보</Heading2>
      <Form>
        <Title>이름</Title>
        <LongStyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <Title>나이</Title>
        <div>
          <StyledInput type="number" value={age} onChange={handleAgeChange} />
          <StyledButton onClick={handleAddUser}>사용자 추가</StyledButton>
        </div>
      </Form>
      {user && (
        <Result>
          이름: {user.name}, 나이: {user.age}
        </Result>
      )}
    </Wrapper>
  );
}

export default App;

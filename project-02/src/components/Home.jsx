import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useState } from "react";
import User from "./User";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Form = styled.form`
  width: 300px;
  height: 100%;
  padding: 20px;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 20px;
  }
  div {
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  input {
    height: 30px;
    margin-left: 10px;
    padding: 0 5px;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  width: 95%;
  height: 40px;
  margin-top: 10px;
  font-size: 1.05rem;
  font-weight: bold;
  background-color: #004da5;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #63acff;
    color: #000000;
  }
`;

/* content */
const Content = styled.section`
  height: 100%;
  flex-grow: 1;
  background-color: #a2a2a2;
  padding: 10px;
`;

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    age: 0,
    isMarried: false,
  });
  const { name, age, isMarried } = form;

  const [formList, setFormList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = name === "age" ? Math.max(0, Number(value)) : value;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || age <= 0) return;
    setFormList((prevList) => [...prevList, form]);
    setForm({ name: "", age: 0, isMarried: false });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>project 02</title>
      </Helmet>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <h1>회원 등록</h1>
          <div>
            <label htmlFor="name">이름 :</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">나이 :</label>
            <input
              id="age"
              name="age"
              type="number"
              value={age}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="isMarried">결혼 유무</label>
            <input
              id="isMarried"
              name="isMarried"
              type="checkbox"
              checked={isMarried}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit">등록하기</Button>
        </Form>
        <Content>
          {formList.map((item) => (
            <User key={uuidv4()} user={item} />
          ))}
        </Content>
      </Wrapper>
    </HelmetProvider>
  );
}

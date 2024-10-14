import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isMarried ? "#aefaff" : "#ffdada")};
  border: 1px solid black;
  p {
    margin: 5px 0;
    font-weight: bold;
  }
`;

export default function User({ user }) {
  const { name, age, isMarried } = user;
  return (
    <ContentWrapper isMarried={isMarried}>
      <p>이름: {name}</p>
      <p>나이: {age}세</p>
      <p>결혼 유무: {isMarried ? "O" : "X"}</p>
    </ContentWrapper>
  );
}

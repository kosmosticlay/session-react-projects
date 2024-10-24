import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 50px;
    margin-right: 15px;
  }
`;

const Content = styled.main`
  width: 100%;
  height: calc(100vh - 180px);
  border: 2px solid #dc84ab;
  border-radius: 20px;
  box-shadow: 5px 5px #dc84ab;
`;

function App() {
  return (
    <Wrapper>
      <h1>
        <img src="/kosmosticlay.jpeg" /> useState, useEffect, useRef, useMemo
        실습
      </h1>
      <Content></Content>
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";
import BackBtn from "../components/BackBtn";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h1>Not Found</h1>
      <BackBtn />
    </Wrapper>
  );
}

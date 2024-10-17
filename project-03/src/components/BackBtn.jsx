import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 50px;
  font-weight: bold;
  background-color: #dd85ac;
  cursor: pointer;
`;

export default function BackBtn() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>뒤로 돌아가기</Button>;
}

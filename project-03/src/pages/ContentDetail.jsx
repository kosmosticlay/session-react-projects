import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 2px solid #dd85ac;
  box-shadow: 5px 5px #9c5173;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.3rem;
    gap: 10px;
  }
`;

export default function ContentDetail({}) {
  const { contentId } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const content = queryParams.get("content");
  return (
    <Wrapper>
      <div>
        <p> ✅ ID : {contentId} </p>
        <p> ✅ 내용 : {content} </p>
      </div>
    </Wrapper>
  );
}

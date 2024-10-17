import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const contentList = [
  {
    id: 1,
    description: "컨텐츠1의 내용입니다.",
  },
  {
    id: 2,
    description: "컨텐츠2의 내용입니다.",
  },
  {
    id: 3,
    description: "컨텐츠3의 내용입니다.",
  },
  {
    id: 4,
    description: "컨텐츠4의 내용입니다.",
  },
];

const Wrapper = styled.main`
  padding: 0 50px;
`;

const ContentList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ContentItem = styled.li`
  width: 240px;
  height: 200px;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px #dd85ac;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    background-color: #ffbddb;
    color: black;
    border: 2px solid transparent;
  }
`;

export default function Contents() {
  const [contents, setContents] = useState(contentList);
  return (
    <Wrapper>
      <h1>Contents</h1>
      <ContentList>
        {contents.map((content, idx) => (
          <NavLink
            to={`/contents/${content.id}?content=${content.description}`}
            key={idx}
          >
            <ContentItem>Content {content.id}</ContentItem>
          </NavLink>
        ))}
      </ContentList>
      <Outlet />
    </Wrapper>
  );
}

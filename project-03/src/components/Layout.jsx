import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #dd85ac;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    padding-right: 30px;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const LinkBtn = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => (props.isActive ? "#dd85ac" : "white")};
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  text-underline-offset: 10px;
  cursor: pointer;

  &:hover {
    color: #dd85ac;
  }
`;

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Header>
        <h1 aria-label="로고">
          <Logo src="/kosmosticlay.jpeg" />
          <span>React Router 실습</span>
        </h1>
        <ul>
          <LinkBtn isActive={location.pathname === "/" ? true : undefined}>
            <Link to="/">홈</Link>
          </LinkBtn>
          <LinkBtn isActive={location.pathname.startsWith("/contents")}>
            <Link to="/contents">컨텐츠</Link>
          </LinkBtn>
          <LinkBtn isActive={location.pathname === "/login" ? true : undefined}>
            <Link to="/login">로그인</Link>
          </LinkBtn>
        </ul>
      </Header>
      <Outlet />
    </>
  );
}

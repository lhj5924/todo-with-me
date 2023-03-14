import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {

  const StyledPageBtn = styled.button`
  border: none;
  background-color: antiquewhite;
  margin: 16px;
  font-size: 1rem;
  `

  return (
    <div id="nav-body">
      <span id="title">
        <span id="name">Todo With Me :)</span>
      </span>
      <div id="menu">
        <Link to="/login">
          <StyledPageBtn>로그인 페이지</StyledPageBtn></Link>
        <Link to="/todo">
          <StyledPageBtn>Todo 페이지</StyledPageBtn></Link>
        <Link to="/timer">
          <StyledPageBtn>타이머 페이지</StyledPageBtn></Link>
        <Link to="/quote">
          <StyledPageBtn>오늘의 명언 페이지</StyledPageBtn></Link>
        <Link to="/madeby">
          <StyledPageBtn>만든 사람 페이지</StyledPageBtn></Link>
      </div>
    </div>
  );
}

export default Nav;

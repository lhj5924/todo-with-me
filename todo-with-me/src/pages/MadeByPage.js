import React from 'react';
import styled from 'styled-components';
import nagi from '../img/nagi.png'

const StyledMadeByContainer = styled.main`
width: 100%;
font-size: 1.25rem;
display: grid;
grid-template-rows: 3fr 1fr 1fr;
grid-gap: 0.5rem;
align-items: center;
justify-items: center;
text-align: center;
margin-top: 2rem;
`
const StyledImg = styled.img`
width: 70%;
`
const StyledContact = styled.div`
`
export default function MadeByPage() {

  return (
    <>
    <StyledMadeByContainer>
      <StyledImg src={nagi}></StyledImg>
      <StyledContact>
        <div>HyunJin</div>
        <div>gitHub : lhj5924</div>
        <div>velog.io/@lhj5924</div>
      </StyledContact>
      <footer>
        <div>ToDo With Me :)</div>
        <div>Made by HyunJin Lee</div>
      </footer>
    </StyledMadeByContainer>
    </>
  )
}
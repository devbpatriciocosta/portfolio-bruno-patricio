import React from "react";
import styled from "styled-components";

import Burguer from "./Burguer";
import LeftNav from "./LeftNavBar";

const StyledNavBar = styled.nav`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 80px;
  padding: 10px 0;
  position: fixed;
  background-color: ${props => props.theme.background};
  z-index: 1;

  @media (max-width: 868px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
  }
`

export default function NavBar() {
  return (
    <StyledNavBar>
      <LeftNav />
      <Burguer />
    </StyledNavBar>
  )
}
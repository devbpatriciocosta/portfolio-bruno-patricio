import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledUl = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${(props) => props.theme.background};
    
  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.primary};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }
  
  li:hover:after {
    width: 100%;
  }

    @media (max-width: 502px) {
      flex-flow: column nowrap;
      background: ${(props) => props.theme.background};
      background-color: ${(props) => props.theme.background};
      position: fixed;
      backdrop-filter: blur(14px);
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      gap: 60px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;

      li {
        color: ${props => props.theme.primary};
      }
    }
`

const RightNavBar = ({ open }) => {
  return (
    <StyledUl open={open}>
      <li>
        <Link to='home' smooth={true} offset={0} duration={800} >Home</Link>
      </li>
        <li>
          <Link to='sobre' smooth={true} offset={-10} duration={800} >Sobre</Link>
        </li>
            <li>
              <Link to='projetos' smooth={true} offset={10} duration={800} >Projetos</Link>
            </li>
            <li>
              <Link to='certificado' smooth={true} offset={10} duration={800} >Certificados</Link>
            </li>
              <li>
                <Link to='contato' smooth={true} offset={-70} duration={800} >Contato</Link>
              </li>
    </StyledUl>
  )
}

export default RightNavBar
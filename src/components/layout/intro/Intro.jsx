import styled from "styled-components";

import H1 from "../../../typograph/H1";
import H6 from "../../../typograph/H6";
import Button from "../../buttons/Buttons";

const StyledFlex = styled.div`
  display: flex;
  color: ${(props) => props.theme.background};
  padding-top: 90px;
  width: 100%;
  height: 94vh;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const WIDTH_BREAK = '900px';

const StyledImageIntro = styled.div`
  background-image: url('${(props) => props.image}') ;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  

  @media (max-width: 1077px) {
    display: none;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`

const StyledContainerIntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: ${(props) => props.theme.background};
  padding: 0 140px;
  gap: 0px;

  H1 {
    text-align: left;
  }

  H6 {
    font-weight: lighter;
  }

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 100px);
  }

  overflow-y: auto;
  &:before,
  &:after {
    content: '';
    margin: auto;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`

const StyledContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 80px 0;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`

export default function Intro({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImageIntro image={image} />
        <StyledContainerIntroInfo>
          <H1>Olá! Eu sou <br></br>Bruno Patrício</H1>
          <H6>Web dev and <br></br>passionate learner</H6>
          <StyledContainerButtons>
            <Button>Projetos</Button>
            <Button>Contatos</Button>
            <Button>Certificados</Button>
          </StyledContainerButtons>
        </StyledContainerIntroInfo>
      </StyledFlex>
    </>
  )
}

Intro.defaultProps = {
  image: 'IntroImage.svg'
}
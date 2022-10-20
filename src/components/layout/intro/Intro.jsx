import styled from "styled-components";

import H1 from "../../../typograph/H1";
import H6 from "../../../typograph/H6";

const StyledFlex = styled.div`
  display: flex;
  color: ${(props) => props.theme.background};
  padding-top: 90px;
`

const WIDTH_BREAK = '900px';

const StyledImageIntro = styled.div`
  background-image: url('${(props) => props.image}') ;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 94vh;
`

const StyledContainerIntroInfo = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 0 90px;
  gap: 10px;
  height: 70vh;

  H1 {
    text-align: left;
  }

  H6 {
    font-weight: lighter;
  }

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 100px);
  }

  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &:before,
  &:after {
    content: '';
    margin: auto;
  }
`

export default function Intro({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImageIntro image={image} />
        <StyledContainerIntroInfo>
          <H1>Olá! Eu sou <br></br>Bruno Patrício</H1>
          <H6>Web dev and passionate learner</H6>
        </StyledContainerIntroInfo>
      </StyledFlex>
    </>
  )
}

Intro.defaultProps = {
  image: 'IntroImage.svg'
}
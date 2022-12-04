import styled from "styled-components";

import H6 from "../../../typograph/H6";

const WIDTH_BREAK = '900px';

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

const StyledImageIntro = styled.div`
  background-image: url('${(props) => props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 90.5vh;
  

  @media (max-width: 977px) {
    display: none;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`

const StyledContainerIntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90.5vh;
  background-color: ${(props) => props.theme.background};

  H1 {
    text-align: center;
  }

  H6 {
    font-weight: lighter;
  }
`

const StyledInfo = styled.div`
    width: auto;
    padding: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default function Intro({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImageIntro image={image} />
        <StyledContainerIntroInfo>
          <StyledInfo>
            <H6>Passionate developer looking for a great team to build Apps and WebPages together. I'm always looking forward to learning new technologies and overcome new challenges. Happy to relocate for any great opportunity.</H6>
          </StyledInfo>
        </StyledContainerIntroInfo>
      </StyledFlex>
    </>
  )
}

Intro.defaultProps = {
  image: 'AboutImage.svg'
}
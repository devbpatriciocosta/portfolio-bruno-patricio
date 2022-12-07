import styled from "styled-components";
import { Link } from "react-scroll";

import IconImages from "../../iconImages/IconImages";
import H1 from "../../../typograph/H1";
import H6 from "../../../typograph/H6";
import Button from "../../buttons/Buttons";

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
  margin-top: 60px;
  color: #fec350;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const StyledContainerButtons = styled.div`
  display: flex;
  gap: 15px;
  margin: 80px 0;
  justify-content: center;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledIconContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 10px;
`

export default function Intro({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImageIntro image={image} />
        <StyledContainerIntroInfo>
          <StyledInfo>
            <H1>Olá! Eu sou <br></br>Bruno Patrício</H1>
            <H6>Web dev and passionate learner</H6>
          </StyledInfo>
          <StyledContainerButtons>
            <Link to='works' smooth={true} offset={14} duration={800} >
              <Button>Projetos</Button>
            </Link>
            <Link to='contato' smooth={true} offset={-70} duration={800} >
              <Button>Contato</Button>
            </Link>
            <Link to='certificado' smooth={true} offset={10} duration={800} >
              <Button>Certificados</Button>
            </Link>
          </StyledContainerButtons>
          <StyledIconContainer>
            <IconImages imageName="JsIcon" type="svg" />
            <IconImages imageName="HtmlIcon" type="svg" />
            <IconImages imageName="CssIcon" type="svg" />
            <IconImages imageName="GitHubIcon" type="svg" />
          </StyledIconContainer>
          <StyledIconContainer>
            <IconImages imageName="ReactIcon" type="svg" />
            <IconImages imageName="NextIcon" type="svg" />
            <IconImages imageName="NodeIcon" type="svg" />
            <IconImages imageName="MongoDBIcon" type="svg" />
          </StyledIconContainer>
        </StyledContainerIntroInfo>
      </StyledFlex>
    </>
  )
}

Intro.defaultProps = {
  image: 'IntroImage.svg'
}
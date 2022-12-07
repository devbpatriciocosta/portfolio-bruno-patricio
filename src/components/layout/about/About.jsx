import styled from "styled-components";

import H1 from '../../../typograph/H1'
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
  color: #fec350;

  H1 {
    text-align: center;
  }

  H6 {
    font-weight: lighter;
  }
`

const StyledInfo = styled.div`
    width: auto;
    padding: 100px 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function AboutMe({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImageIntro image={image} />
        <StyledContainerIntroInfo>
            <H1>Sobre</H1>
          <StyledInfo>
            <H6>Desenvolvedor apaixonado à procura de uma grande equipe para construir aplicativos e páginas da Web juntos. Estou sempre ansioso para aprender novas tecnologias e superar novos desafios. Feliz por se mudar para qualquer grande oportunidade.</H6>
          </StyledInfo>
        </StyledContainerIntroInfo>
      </StyledFlex>
    </>
  )
}

AboutMe.defaultProps = {
  image: 'AboutImage.svg'
}
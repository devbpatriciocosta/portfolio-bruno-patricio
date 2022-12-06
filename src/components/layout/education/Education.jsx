import styled from "styled-components";
import H1 from "../../../typograph/H1";
import H6 from "../../../typograph/H6";

const MainContainer = styled.div`
    padding: 50px;
    background-color: ${(props) => props.theme.background};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const EducationTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.primary};
`

const EducationContainer = styled.div`
    background-color: ${(props) => props.theme.primary};
    color: black;
    border-radius: 30px;
    height: 100px;
    width: 550px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

  @media (max-width: 1164px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 550px;
    height: auto;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 365px;
    height: auto;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 300px;
    height: auto;
  }
`

export default function Education() {
    return (
        <MainContainer> 
            <EducationTitle>
               <H1> Education </H1> 
            </EducationTitle>
            <EducationContainer>
                <H6>Web Developer certification in: <br></br>
JavaScript | HTML5 | CSS3 | ReactJS | NodeJS | NextJS | Styled-Components | SQL/NoSQL</H6>
            </EducationContainer>
            <EducationContainer>
                <H6>Conhecimento certificado por SejaDev, Alura e D.I.O</H6>
            </EducationContainer>
            <EducationContainer>
                <H6>English Fluency Certified by TOEFL Test</H6>
            </EducationContainer>
            <EducationContainer>
                <H6>French Intermidiate Level Certified by UFSC</H6>
            </EducationContainer>
        </MainContainer>
    )
}
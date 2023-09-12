import styled from "styled-components";
import H1 from "../../../typograph/H1";
import H6 from "../../../typograph/H6";

const MainContainer = styled.div`
    padding: 80px;
    background-color: ${(props) => props.theme.background};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const EducationTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.primary};
    margin-bottom: 50px;
`

const EducationContainer = styled.div`
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.black};
    border-radius: 30px;
    height: 100px;
    width: 550px;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    transition: 0.2s ease-in-out;

    :hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.secondary};
    }

  @media (max-width: 1164px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 550px;
    height: auto;
  }

  @media (max-width: 556px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 420px;
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
               <H1>Formação</H1> 
            </EducationTitle>
            <EducationContainer>
                <H6>Certificados em: <br></br>
                    JavaScript - TypeScript | HTML5 | CSS3 | ReactJS | NodeJS | NextJS | Styled-Components | SQL/NoSQL</H6>
            </EducationContainer>
            <EducationContainer>
                <H6>Conhecimentos certificados por SejaDev, Alura e D.I.O</H6>
            </EducationContainer>
            <EducationContainer>
                <H6>Fluência em Inglês com certificado pelo TOEFL Test</H6>
            </EducationContainer>
            <EducationContainer>
                <H6>Nível intermediário de Francês certificado pela UFSC</H6>
            </EducationContainer>
        </MainContainer>
    )
}
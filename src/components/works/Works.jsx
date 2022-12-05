import styled from "styled-components";
import H1 from '../../typograph/H1'

const ProjectsContainer = styled.div`
    background-color: ${(props) => props.theme.secondaryBackground};
    height: 100vh;
`

const ProjectsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
`

export default function WorksDeveloped() {
    return(
        <ProjectsContainer>
           <ProjectsTitle>
                <H1>Projetos</H1>
            </ProjectsTitle> 
        </ProjectsContainer>
    )
}
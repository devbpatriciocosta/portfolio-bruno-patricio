import styled from "styled-components";

import H1 from '../../typograph/H1'
import H3 from '../../typograph/H3'
import IconImages from "../iconImages/IconImages";

const MainContainer = styled.div`
    margin-top: 100px;
    background-color: ${(props) => props.theme.secondaryBackground};
`

const ProjectsContainer = styled.div`
    background-color: ${(props) => props.theme.secondaryBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 80px;

    @media (max-width: 1164px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: auto;
    height: auto;
  }
`

const ProjectsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

const EachProject = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;

  @media (max-width: 1164px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`

const ProjectText = styled.div`
    background-color: black;
    color: #FEC350;
    height: 12.05rem;
    width: 30rem;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

  @media (max-width: 1164px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: auto;
    height: auto;
  }
`

export default function WorksDeveloped() {
    return(
    <MainContainer>
        <ProjectsTitle>
            <H1>Projetos</H1>
        </ProjectsTitle> 
        <ProjectsContainer>
            <EachProject>
                <IconImages imageName="CbIcon" type="svg" />
            </EachProject>
            <ProjectText>
                <H3>Challenge do Bem</H3>
                Passionate developer looking for a great team to build Apps and WebPages together. I'm always looking forward to learning new technologies and overcome new challenges. Happy to relocate for any great opportunity.
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
            <EachProject>
                <IconImages imageName="ClimaDevIcon" type="svg" />
            </EachProject>
            <ProjectText>
                <H3>ClimaDev</H3>
                Passionate developer looking for a great team to build Apps and WebPages together. I'm always looking forward to learning new technologies and overcome new challenges. Happy to relocate for any great opportunity.
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
            <EachProject>
                <IconImages imageName="PokedexIcon" type="svg" />
            </EachProject>
            <ProjectText>
                <H3>Pokedéx</H3>
                Passionate developer looking for a great team to build Apps and WebPages together. I'm always looking forward to learning new technologies and overcome new challenges. Happy to relocate for any great opportunity.
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
            <EachProject>
                <IconImages imageName="CrudIcon" type="svg" />
            </EachProject>
            <ProjectText>
                <H3>CRUD de veículos</H3>
                Passionate developer looking for a great team to build Apps and WebPages together. I'm always looking forward to learning new technologies and overcome new challenges. Happy to relocate for any great opportunity.
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
        <EachProject>
            <IconImages imageName="SocialDevIcon" type="svg" />
        </EachProject>
        <ProjectText>
            <H3>SocialDev</H3>
            Passionate developer looking for a great team to build Apps and WebPages together. I'm always looking forward to learning new technologies and overcome new challenges. Happy to relocate for any great opportunity.
        </ProjectText>
        </ProjectsContainer>
    </MainContainer>
    )
}
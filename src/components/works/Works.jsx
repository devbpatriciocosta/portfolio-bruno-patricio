import styled from "styled-components";

import H1 from '../../typograph/H1'
import H3 from '../../typograph/H3'
import IconImages from "../iconImages/IconImages";

const MainContainer = styled.div`
    padding: 50px;
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

    transition: 0.2s ease-in-out;

    :hover {
    transform: scale(1.1);
    }

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
    padding: 20px 30px;
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
                <a href="https://github.com/devbpatriciocosta"><IconImages imageName="CbIcon" type="svg" /></a>
            </EachProject>
            <ProjectText>
                <H3>Challenge do Bem</H3>
                Landing Page desenvolvida para a ONG Challenge do Bem. Esse projeto foi desenvolvido utilizando ReactJS e Styled Components. Novas features vão ser adicionadas como cadastro de usuário e interface para troca de informações entre os criadores do projeto e os usuários.
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
            <EachProject>
                <a href="https://github.com/devbpatriciocosta"><IconImages imageName="ClimaDevIcon" type="svg" /></a>
            </EachProject>
            <ProjectText>
                <H3>ClimaDev</H3>
                WebSite de previsão do tempo. Desenvolvido utilizando ReactJS, NodeJS e Next JS, além de Styled Components. Foi consumido uma API do OpenWeather para o desenvolvimento, sendo possível obter informações do momento, daqui 3 horas e 6 horas. 
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
            <EachProject>
                <a href="https://github.com/devbpatriciocosta"><IconImages imageName="PokedexIcon" type="svg" /></a>
            </EachProject>
            <ProjectText>
                <H3>Pokedéx</H3>
                Esse foi um desafio proposto por uma empresa em um processo seletivo. Foi pedido para utilizar a POKEAPI para a construção de uma pokedéx utilizando ReactJS, NodeJS e NextJS. Como desafio adicional, coloquei a feature de favoritar o pokémon que gostamos.
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
            <EachProject>
                <a href="https://github.com/devbpatriciocosta"><IconImages imageName="CrudIcon" type="svg" /></a> 
            </EachProject>
            <ProjectText>
                <H3>CRUD de veículos</H3>
                Esse projeto foi um teste de nivelamento proposto por uma empresa durante um processo seletivo. Aqui vemos um CRUD completo onde é possível adicionar um carro, ver esse carro na HomePage, favoritar o veículo e excluir o veículo. Além do mais, os dados foram criados utilizando o meu próprio banco de dados através do MONGODB
            </ProjectText>
        </ProjectsContainer> 
        <ProjectsContainer>
        <EachProject>
            <a href="https://github.com/devbpatriciocosta"><IconImages imageName="SocialDevIcon" type="svg" /></a> 
        </EachProject>
        <ProjectText>
            <H3>SocialDev</H3>
            Este projeto é uma rede social para desenvolvedores. Aqui é possível cadastrar um usuário, acessar a sua HomePage, deixar uma espécie de TWEET e até mesmo editar esse TWEET ou apaga-lo. 
        </ProjectText>
        </ProjectsContainer>
    </MainContainer>
    )
}
import styled from "styled-components"

import H1 from "../../../typograph/H1"
import H3 from "../../../typograph/H3"
import IconImages from '../../iconImages/IconImages'


const MainContainer = styled.div`
    color: ${props => props.theme.primary};
    padding: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

const ContactTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

const InfoData = styled.div`
    display: flex;
    gap: 20px;

    transition: 0.2s ease-in-out;

    :hover {
    transform: scale(1.1);
    }
`

export default function ContactSession () {
    return (
        <MainContainer>
            <ContactTitle>
                <H1>Contato</H1>
            </ContactTitle>
            <InfoData>
                <IconImages imageName="YellowGitHubIcon" type="svg" />
                    <H3><a href="https://github.com/devbpatriciocosta">@devbpatriciocosta </a></H3> 
            </InfoData>
            <InfoData>
                <IconImages imageName="YellowEmailIcon" type="svg" />
                   <H3><a href="https://mail.google.com/mail/u/0/#inbox">bpatriciocosta@gmail.com</a></H3> 
            </InfoData>
            <InfoData>
                <IconImages imageName="YellowLinkedinIcon" type="svg" />
                    <H3><a href="https://www.linkedin.com/in/brunopatricioc/">linkedin.com/in/brunopatricioc/ </a></H3>
            </InfoData>
        </MainContainer>
    )
}
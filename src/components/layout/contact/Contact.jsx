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
`

export default function ContactSession () {
    return (
        <MainContainer>
            <ContactTitle>
                <H1>Contato</H1>
            </ContactTitle>
            <InfoData>
                <IconImages imageName="YellowGitHubIcon" type="svg" />
                <a href="https://github.com/devbpatriciocosta">
                    <H3>@devbpatriciocosta</H3>
                </a> 
            </InfoData>
            <InfoData>
                <IconImages imageName="YellowEmailIcon" type="svg" />
                <a href="https://mail.google.com/mail/u/0/#inbox">
                   <H3>bpatriciocosta@gmail.com</H3> 
                </a>
            </InfoData>
            <InfoData>
                <IconImages imageName="YellowLinkedinIcon" type="svg" />
                <a href="https://www.linkedin.com/in/brunopatricioc/">
                    <H3>linkedin.com/in/brunopatricioc/</H3>
                </a>
            </InfoData>
        </MainContainer>
    )
}
import styled from "styled-components";

import H6 from "../../typograph/H6";

const FooterContainer = styled.div`
    background-color: ${props => props.theme.primary};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Footer () {
    return(
        <FooterContainer>
            <H6>
                All rights reserved - @devbpatriciocosta - October 2022
            </H6>
        </FooterContainer>
    )
}
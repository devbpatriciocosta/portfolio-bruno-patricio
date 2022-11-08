import styled from 'styled-components'

const ButtonContainer = styled.div`
  
  button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    cursor: pointer;
    font-weight: bold;
    padding: 15px 35px;
    border-radius: 15px;
    transition: all ease-in-out 0.3s;
  }

  :hover {

  }
`

export default function Button(props) {
  return (
    <ButtonContainer>
      <button {...props}>{props.children}</button>
    </ButtonContainer>
  )
}
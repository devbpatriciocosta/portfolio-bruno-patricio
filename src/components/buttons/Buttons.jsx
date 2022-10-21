import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  align-items: center;

  label {
    display: flex;
    font-weight: bold;
  }
  
  button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    cursor: pointer;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
  }
`

export default function Button(props) {
  return (
    <ButtonContainer>
      <button {...props}>{props.children}</button>
    </ButtonContainer>
  )
}
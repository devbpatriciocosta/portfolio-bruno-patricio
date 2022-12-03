import styled from 'styled-components'

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  width: 120px;
  height: 50px;
  font-weight: bold;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.secondary};
  }
`

export default function Button(props) {
  return (
      <StyledButton {...props}><p>{props.children}</p></StyledButton>
  )
}
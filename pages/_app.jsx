import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
  }
  
  a {
    font-size: 21px;
    font-weight: bold;
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
    line-height: 10px;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background-color: ${(props) => props.theme.black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
  }
`

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
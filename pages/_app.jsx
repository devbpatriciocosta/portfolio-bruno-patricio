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
  a{
    font-size: 16px;
    font-weight: bold;
    color: #fec350;
    text-decoration: none;
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
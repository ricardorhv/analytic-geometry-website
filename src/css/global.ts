import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  *, button {
    font-family: 'Poppins', sans-serif;
  }

  main {
    padding: 0 5.8rem;
  }
`
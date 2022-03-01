import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Open+Sans:wght@300&family=Prompt:ital,wght@1,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-family: ${({ theme }) => theme.font.family.secondary};
  }

  p {
    margin: ${({ theme }) => theme.font.spacings.medium} 0;
  }

`;

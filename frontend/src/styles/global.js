import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    -webkit-font-smoothing: antialiased;

      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

  :root {
    // Colors
    --clr-bg: #d5d5d5;
    --clr-bg-alt: #373737;
    --clr-bg-navbar: #fff;
    --clr-bg-container: #fff;
    --clr-txt: #1e1e1e;
    --clr-txt-alt: #fff;
    --clr-txt-light: #9099a2;
    --clr-acc-primary: #6d7993;
    --clr-acc-secondary: #96858f;
    // Fonts
    --font-serif: 'Source Serif Pro';
  }

  body {
    background-color: var(--clr-bg);
    color: var(--clr-txt);
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  body, button, input, textarea {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    color: inherit;
  }
`;
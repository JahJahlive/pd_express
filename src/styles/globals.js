
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.5rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }

  input[type=text], input[type=email], input[type=tel], input[type=date], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
  }

  .wpcf7-submit {

    display:flex;
    align-items: center;
    background-color: darkblue;
    color: white;
    padding: 14px 20px;
    margin: 0 auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .wpcf7-submit:hover {
    background-color: blue;
  }

  .error {
    border: 2px solid red !important;
    border-radius: 4px;
  }
  
  .wpcf7-list-item-label{
    font-size: 12px;
  }
`;

export default GlobalStyles;
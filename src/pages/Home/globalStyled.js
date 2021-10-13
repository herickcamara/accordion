import { createGlobalStyle } from "styled-components";
const view = (size, width = 1440) => `${(size / width) * 100}vw`;

;

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    diplay:inline;
  }
  :root {

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
      font-size: ${view(50)};

      @media (min-width: 300px) {
        font-size: ${view(35)};
      }
      @media (min-width: 650px) {
        font-size: ${view(30)};
      }
      @media (min-width: 850px) {
        font-size: ${view(25)};
      }
    }
`; 

export default Global;
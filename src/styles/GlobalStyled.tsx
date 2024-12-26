import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyled = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: 1px solid blue;
    
}

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.primaryFont};
    line-height: 1.3;
    min-width: 375px;
}

a {
    text-decoration: none;
    

}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
}

section {
   // background-color: ${theme.colors.primaryBg};
    padding: 50px 0 ;

    
   
}

`;

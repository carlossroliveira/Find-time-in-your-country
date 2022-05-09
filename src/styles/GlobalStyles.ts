import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* { 
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0 auto;
  font: 400 1rem "Inter", sans-serif;
  background: ${(props) => props.theme.background.primary};
}


::-webkit-scrollbar {
  width: 12px
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.background.primary};
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.background.primary};
}
::-webkit-scrollbar-button {
  background: ${(props) => props.theme.background.primary};
}
`;

// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.light};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Barra de navegación con estilo */
  .fumEpl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0B0C10;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    z-index: 100;
    font-size: 16px; 
  }

  /* Media Query para dispositivos móviles */
  @media (max-width: 768px) {
    .fumEpl {
      font-size: 10px; 
    }
  }
`;

export default GlobalStyles;

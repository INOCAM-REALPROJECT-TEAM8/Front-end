import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  :root {
    --main-color: #7751e1;
    --gray: #8f8f8f;
    --white: #ffffff;
  }


`;

export default GlobalStyles;

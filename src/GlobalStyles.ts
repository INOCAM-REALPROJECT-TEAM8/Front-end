import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Pretendard-Regular', sans-serif;
  }

  :root {
    --main-color: #595DEB;
    --gray: #8f8f8f;
    --white: #ffffff;
  }
`;

export default GlobalStyles;

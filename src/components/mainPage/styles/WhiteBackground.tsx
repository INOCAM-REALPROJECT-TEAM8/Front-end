import { styled } from 'styled-components';

const WhiteBackground = styled.div`
  width: 100%;
  background-color: var(--white);
  padding-bottom: 40px;
`;

export const FooterGradation = styled.div`
  position: fixed;
  bottom: 56px;
  height: 56px;
  width: 100%;
  background: linear-gradient(to top, var(--white), transparent);
`;

export default WhiteBackground;

import { styled } from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  padding-top: 40px; /* 수정된 부분 */
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainContainer;

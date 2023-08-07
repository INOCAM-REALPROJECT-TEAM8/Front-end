import MainContainer from '../components/loginPage/styles/MainContainer';
import recode from '.././assets/Recode.png';
import { styled } from 'styled-components';

function MusicDetailPage() {
  return (
    <MainContainer>
      MusicDetailPage
      <RecodeStyle src={recode} alt='recode'></RecodeStyle>
    </MainContainer>
  );
}

export default MusicDetailPage;

const RecodeStyle = styled.img`
  width: 80%;
`;

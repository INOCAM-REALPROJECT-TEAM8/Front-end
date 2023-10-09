import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getRecentHeardsP } from '../api/music';
import { WhiteTopContainer } from '../components/loginPage/styles/WhiteContainer';
import UserListening from '../components/userpage/UserListening';

function ListeningList() {
  const userId = Number(useParams().userId);

  const { data: recentMusics, isSuccess: recentSuccess } = useQuery(['recentMusics', userId], getRecentHeardsP(userId));

  return (
    <WhiteTopContainer>
      <PlayListTop>
        <PlaylistText>최근 들은 곡</PlaylistText>
      </PlayListTop>
      <ListeningListContainer>
        <UserListening musics={recentSuccess ? recentMusics || [] : []} />
      </ListeningListContainer>
    </WhiteTopContainer>
  );
}

export default ListeningList;
const PlaylistText = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  color: var(--main-color);
  padding: 16px;
`;

const PlayListTop = styled.div`
  width: 100%;
  height: 80px;
`;

const ListeningListContainer = styled.div`
  overflow-y: auto; /* 세로 스크롤을 표시하고, 내용이 넘칠 때 스크롤 가능하도록 설정 */
  max-height: 800px;
`;

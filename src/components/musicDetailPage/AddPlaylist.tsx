import { useNavigate, useParams } from 'react-router-dom';
import { MusicInfo, getMusicDetailP, addToPlaylist } from '../../api/music';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';
import { styled } from 'styled-components';
import musicplus from '../../assets/PlusButton1.svg';

function AddPlaylist() {
  const navigate = useNavigate();
  const { musicId } = useParams();

  if (!musicId) navigate('/');

  const { data: music, isSuccess: isMusicSuccess } = useQuery(
    [`musicDetail/${musicId}`],
    getMusicDetailP(musicId ?? ''),
  );

  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  const handleAddToPlaylist = async () => {
    if (isLoggedIn) {
      try {
        // Call the addToPlaylist function to add the music to the playlist
        await addToPlaylist({ musicId: music?.trackId ?? '' });
        alert('음악이 플레이리스트에 추가되었습니다.');
      } catch (error) {
        console.error('플레이리스트에 음악을 추가하는 중 오류가 발생했습니다.', error);
      }
    } else {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('/login');
      }
    }
  };

  return (
    <>
      <img src={musicplus} alt='Plus Button' onClick={handleAddToPlaylist} />
      <PlusButton onClick={handleAddToPlaylist}>추가하기</PlusButton>
    </>
  );
}

export default AddPlaylist;

export const PlusButton = styled.div`
  cursor: pointer;
  padding: 8px 0px 10px;
  font-size: 18px;
  font-weight: 600;
  color: var(--main-color);
`;

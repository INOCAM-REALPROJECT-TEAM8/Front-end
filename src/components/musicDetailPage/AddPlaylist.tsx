import { useNavigate, useParams } from 'react-router-dom';
import { MusicInfo, getMusicDetailP, addToPlaylist, deleteFromPlaylist, getPlaylistP } from '../../api/music';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectState } from '../../redux/config/configStore';
import { styled } from 'styled-components';
import musicplus from '../../assets/PlusButton.svg';
import musiccheck from '../../assets/Check.svg';

function AddPlaylist() {
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();
  const { musicId } = useParams();

  if (!musicId) navigate('/');

  const fetchMusicDetailsAndCheckStatus = async () => {
    const details = await getMusicDetailP(musicId ?? '');
    return details;
  };

  const userId = useSelector((state: SelectState) => state.userInfo.userId);

  const { data: music } = useQuery([`musicDetail/${musicId}`], getMusicDetailP(musicId ?? ''));

  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  const fetchPlaylistAndCheckSong = async () => {
    if (userId) {
      try {
        const playlist = await getPlaylistP(userId)();
        setIsAdded(playlist.some((song: MusicInfo) => song.trackId === musicId));
      } catch (error) {
        console.error('플레이리스트 불러오는 중 오류가 발생했습니다.', error);
      }
    }
  };

  useEffect(() => {
    fetchPlaylistAndCheckSong();
  }, [userId]);

  const handleAddToPlaylist = async () => {
    if (isLoggedIn) {
      try {
        if (isAdded) {
          // isAdded 값 확인
          await deleteFromPlaylist({ playlistId: music?.trackId ?? '' });
          console.log('Delete request sent'); // 삭제 요청이 전송되었음을 확인
          setIsAdded(false);
          alert('음악이 플레이리스트에서 삭제되었습니다.');
        } else {
          await addToPlaylist({ musicId: music?.trackId ?? '' });
          console.log('Add request sent'); // 추가 요청이 전송되었음을 확인
          setIsAdded(true);
          alert('음악이 플레이리스트에 추가되었습니다.');
        }
      } catch (error) {
        console.error('플레이리스트에 음악을 추가 또는 삭제하는 중 오류가 발생했습니다.', error);
      }
    } else {
      if (window.confirm('로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('/login');
      }
    }
  };

  return (
    <>
      <Image src={isAdded ? musiccheck : musicplus} alt='Plus Button' onClick={handleAddToPlaylist} />
      <PlusButton onClick={handleAddToPlaylist}>{isAdded ? '추가완료' : '추가하기'}</PlusButton>
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

export const Image = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

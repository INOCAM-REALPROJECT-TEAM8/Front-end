import React, { useRef } from 'react';
import { styled } from 'styled-components';
import recode from '../../assets/Recode.png';
import MusicPlayer from './MusicPlayer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface MusicInfo {
  image: string;
  album: string;
  artist: string;
  title: string;
  yUrl: string;
}

interface MusicModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const music: MusicInfo = {
  image:
    'https://i.namu.wiki/i/3o5_9cQW9UVQzA-M0OyEwdMgtCtv1HUwc5RTMZl_E0knAjndE56r42fCllbD2JHrhZP_ugBhQ3Gi9WXkv8NPGg.webp',
  title: 'Lemon',
  artist: '米津玄師 (요네즈 켄시)',
  album: 'Album 1',
  yUrl: 'https://www.youtube.com/watch?v=pxBPyKQTOKM',
};

const MusicModal: React.FC<MusicModalProps> = ({ modalState, setModalState }: MusicModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickOutsideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setModalState(false);
    }
  };

  // const playMusic = (music: MusicInfo) => {
  //   Play music logic
  // };

  // const { data, error, isLoading } = useQuery<MusicInfo[]>('data', async () => {
  //   const response = await axios.get<MusicInfo[]>('https://hide-music.shop:8443/api/musics/modal');
  //   return response.data;
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error...</div>;
  // }

  // return (
  //   <section>
  //     <h2>React Player</h2>
  //     {isWindow && data && (
  //       <div>
  //         {data.map((music: MusicInfo) => (
  //           <div key={music.title}>
  //             <h3>{music.title}</h3>
  //             <p>{music.artist}</p>
  //             <p>{music.album}</p>
  //             <button onClick={() => playMusic(music)}>Play</button>
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //   </section>

  return (
    <ModalTopContainer ref={modalRef} onClick={onClickOutsideModal}>
      <ModalContainer>
        <QueryClientProvider client={new QueryClient()}>
          <MusicPlayer />
        </QueryClientProvider>
        <ModalContent>
          <AlbumCover>
            <AlbumImage src={music.image} alt='' />
            <RecodeImage src={recode} alt='' />
          </AlbumCover>
          <MusicArtist>{music.artist}</MusicArtist>
          <MusicTitle>{music.title}</MusicTitle>
        </ModalContent>
      </ModalContainer>
    </ModalTopContainer>
  );
};

const ModalTopContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: rgba(119, 81, 225, 0.95);
  width: 348px;
  height: 352px;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 21px 24px 24px;
`;

const AlbumCover = styled.div`
  width: 235.35px;
  height: 233.34px;
  position: relative;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: absolute;
  z-index: 2;
`;

const RecodeImage = styled.img`
  width: 235.35px;
  height: 233.34px;
  position: absolute;
  z-index: 1;
  left: 75px;

  transition: transform 0.5s;

  ${AlbumCover}:hover & {
    transform: translateX(35px);
  }
`;

const MusicArtist = styled.div`
  padding-top: 20px;
  font-size: 16px;
  color: #fff;
`;

const MusicTitle = styled.div`
  padding-top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export default MusicModal;

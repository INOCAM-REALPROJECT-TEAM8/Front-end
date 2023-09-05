/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState, useRef } from 'react';
import { MusicInfo, addToRecentHeards, getMusicModalInfoP } from '../../api/music';
// import recode from '../../assets/recode.svg';
// import musicplay from '../../assets/playMusicButton.svg';
// import musicstop from '../../assets/stopMusicButton.svg';
import { useMutation, useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';

interface MusicPlayerProps {
  musicId: string;
}

function MusicPlayer({ musicId }: MusicPlayerProps) {
  const [musicData, setMusicData] = useState<MusicInfo>();
  const { data, isSuccess } = useQuery([`music/${musicId}`], getMusicModalInfoP(musicId));

  useEffect(() => {
    if (isSuccess && data) {
      setMusicData(data);
    }
  }, [isSuccess, setMusicData, data]);

  const mutation = useMutation(addToRecentHeards, {
    onSuccess: () => {},
  });

  useEffect(() => {
    mutation.mutate({ musicId });
  }, [musicId]);

  const iframeRef = useRef(null);
  // const [embedController, setEmbedController] = useState(null); // 상태 변수 추가
  // const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // 스포티파이 IFrame API 초기화
  // useEffect(() => {
  //   //@ts-ignore
  //   window.onSpotifyIframeApiReady = IFrameAPI => {
  //     const options = {
  //       uri: `spotify:track:${musicId}`,
  //     };
  //     //@ts-ignore
  //     const callback = EmbedController => {
  //       setEmbedController(EmbedController);
  //       EmbedController.play();
  //     };
  //     const element = document.getElementById('spotify-iframe');
  //     IFrameAPI.createController(element, options, callback);
  //   };
  // }, [musicId]);

  // const musicPlayButtonHandler = () => {
  //   setIsPlaying(prevIsPlaying => {
  //     if (embedController) {
  //       if (prevIsPlaying) {
  //         //@ts-ignore
  //         embedController.pause(); // 재생 중이었다면 일시정지
  //       } else {
  //         //@ts-ignore
  //         embedController.play(); // 일시정지 상태였다면 재생
  //       }
  //     }
  //     return !prevIsPlaying;
  //   });
  // };

  return (
    <ModalContainer>
      <SpotifyIframe
        id='spotify-iframe'
        ref={iframeRef}
        src={`https://open.spotify.com/embed/track/${musicId}`}
      ></SpotifyIframe>
      {/* <AlbumCover>
        <AlbumImage src={musicData.image} alt='albumCover' />
        <RecodeImage src={recode} alt='recode' />
      </AlbumCover>
      <MusicArtists>{musicData.artist}</MusicArtists>
      <MusicTitle>{musicData.title}</MusicTitle>
      <PlayButton onClick={musicPlayButtonHandler}>
        <img src={isPlaying ? musicstop : musicplay} alt='음악 재생/정지' />
      </PlayButton> */}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: none;
  width: 348px;
  height: 352px;
`;

const SpotifyIframe = styled.iframe`
  position: absolute;
  top: 0;
  border-radius: 16px;
  width: 100%;
  height: 100%;
`;

// const AlbumCover = styled.div`
//   border-radius: 16px;
//   width: 100%;
//   height: 310px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const AlbumImage = styled.img`
//   position: absolute;
//   border-radius: 100%;
//   width: 120px;
//   height: 120px;
//   z-index: 2;
// `;

// const RecodeImage = styled.img`
//   width: 280px;
//   height: 280px;
//   z-index: 1;
// `;

// const MusicArtists = styled.p`
//   color: white;
//   font-size: 16px;
//   padding: 4px 0 0 25px;
// `;

// const MusicTitle = styled.p`
//   color: white;
//   font-size: 24px;
//   font-weight: bold;
//   padding: 4px 0 0 25px;
// `;

// const PlayButton = styled.button`
//   border: none;
//   background: none;
//   padding: 0;
//   margin: 0;

//   img {
//     width: 32px;
//     height: 32px;
//   }
// `;

export default MusicPlayer;

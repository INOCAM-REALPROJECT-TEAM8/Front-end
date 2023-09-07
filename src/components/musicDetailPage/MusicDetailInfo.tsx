import { MusicInfo, getMusicDetailP } from '../../api/music';
import { styled } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import RecordCover from './RecordCover';
import {
  AlbumBox,
  ArtistBox,
  MusicInfoContainer,
  RateContainer,
  TitleBox,
  DetailOption,
  PlayButton,
  Stars,
  Playlists,
} from './styles/musicDetailInfoStyle';
import Star from '../../icons/Star.svg';
import ColorStar from '../../icons/ColorStar.svg';
import LeaveStars from './LeaveStars';
import LeaveComments from './LeaveComments';
import musicplay from '../../assets/pagePlayMusicButton.svg';
import usePlayer from '../../hooks/usePlayer';
import AddPlaylist from './AddPlaylist';

function MusicDetailInfo({ music }: { music: MusicInfo }) {
  const { Player, AllOpenerContainingRef, openPlayer } = usePlayer<HTMLDivElement>();
  console.log(music);
  console.log(music.averageStar);

  const [averageStar, setAverageStar] = useState(music.averageStar);

  useEffect(() => {
    setAverageStar(music.averageStar);
  }, [music.averageStar]);

  return (
    <>
      <MusicInfoContainer ref={AllOpenerContainingRef}>
        <RecordCover music={music} />
        <AlbumBox>{music.album}</AlbumBox>
        <ArtistBox>{music.artistsStringList}</ArtistBox>
        <TitleBox>{music.title}</TitleBox>
        <DetailOption>
          <Stars>
            <RateContainer>
              <img src={Star} alt='Star Icon' />
              <div>{averageStar}</div>
            </RateContainer>
            <LeaveStars musicId={music.trackId || ''} />
          </Stars>
          <PlayButton onClick={() => openPlayer(music.trackId)}>
            <img src={musicplay} alt='musicplay' />
          </PlayButton>
          <Playlists>
            <AddPlaylist />
          </Playlists>
        </DetailOption>
      </MusicInfoContainer>
      <LeaveComments musicId={music.trackId || ''} />
      <Player />
    </>
  );
}

export default MusicDetailInfo;

import { MusicInfo } from '../../api/music';
import { styled } from 'styled-components';
import RecordCover from './RecordCover';
import {
  AlbumBox,
  ArtistBox,
  MusicInfoContainer,
  RateContainer,
  TitleBox,
  DetailOption,
  PlayButton,
  Options,
} from './styles/musicDetailInfoStyle';
import Star from '../../icons/Star.svg';
import ColorStar from '../../icons/ColorStar.svg';
import LeaveStars from './LeaveStars';
import LeaveComments from './LeaveComments';
import musicplay from '../../assets/pagePlayMusicButton.svg';
import usePlayer from '../../hooks/usePlayer';

function MusicDetailInfo({ music }: { music: MusicInfo }) {
  const { Player, AllOpenerContainingRef, openPlayer } = usePlayer<HTMLDivElement>();

  return (
    <>
      <MusicInfoContainer ref={AllOpenerContainingRef}>
        <RecordCover music={music} />
        <AlbumBox>{music.album}</AlbumBox>
        <ArtistBox>{music.artistsStringList}</ArtistBox>
        <TitleBox>{music.title}</TitleBox>
        <Options>
          <Stars>
            <RateContainer>
              <img src={Star} alt='Star Icon' />
              <div>{music.star}</div>
            </RateContainer>
            <LeaveStars musicId={music.trackId || ''} />
          </Stars>
          <DetailOption>
            <PlayButton onClick={() => openPlayer(music.trackId)}>
              <img src={musicplay} alt='musicplay' />
            </PlayButton>
          </DetailOption>
        </Options>
      </MusicInfoContainer>
      <LeaveComments musicId={music.trackId || ''} />
      <Player />
    </>
  );
}

export default MusicDetailInfo;

const Stars = styled.div`
  flex-direction: column;
`;

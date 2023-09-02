import { MusicInfo } from '../../api/music';
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
import { ReactComponent as Star } from '../../assets/emptyStar.svg';
import LeaveStars from './LeaveStars';
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
          <RateContainer>
            <Star />
            <div>{music.star}</div>
          </RateContainer>
          <LeaveStars musicId={music.trackId || ''} />
          <DetailOption>
            <PlayButton onClick={() => openPlayer(music.trackId)}>
              <img src={musicplay} alt='musicplay' />
            </PlayButton>
          </DetailOption>
        </Options>
      </MusicInfoContainer>
      <Player />
    </>
  );
}

export default MusicDetailInfo;

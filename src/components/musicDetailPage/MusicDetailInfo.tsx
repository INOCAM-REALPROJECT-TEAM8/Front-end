import { MusicInfo } from '../../api/music';
import RecordCover from './RecordCover';
import {
  AlbumBox,
  ArtistBox,
  MusicInfoContainer,
  RateContainer,
  TitleBox,
  PlayButton,
} from './styles/musicDetailInfoStyle';
import { ReactComponent as Star } from '../../assets/emptyStar.svg';
import LeaveStars from './LeaveStars';
import musicplay from '../../assets/playMusicButton.svg';
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
        <RateContainer>
          <Star />
          <div>{music.star}</div>
        </RateContainer>
        <LeaveStars musicId={music.trackId || ''} />
        <PlayButton onClick={() => openPlayer(music.trackId)}>
          {/* <img src={musicplay} alt='musicplay' /> */}
        </PlayButton>
      </MusicInfoContainer>
      <Player />
    </>
  );
}

export default MusicDetailInfo;

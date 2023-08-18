import { MusicInfo } from '../../api/music';
import RecordCover from './RecordCover';
import { AlbumBox, ArtistBox, MusicInfoContainer, RateContainer, TitleBox } from './styles/musicDetailInfoStyle';
import { ReactComponent as Star } from '../../assets/emptyStar.svg';
import LeaveStars from './LeaveStars';

function MusicDetailInfo({ music }: { music: MusicInfo }) {
  return (
    <MusicInfoContainer>
      <RecordCover music={music} />
      <AlbumBox>{music.album}</AlbumBox>
      <ArtistBox>{music.artistsStringList}</ArtistBox>
      <TitleBox>{music.title}</TitleBox>
      <RateContainer>
        <Star />
        <div>{music.rate}</div>
      </RateContainer>
      <LeaveStars musicId={music.trackId || ''} />
    </MusicInfoContainer>
  );
}

export default MusicDetailInfo;

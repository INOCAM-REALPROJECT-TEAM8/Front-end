import { MusicInfo } from '../../api/music';
import RecordCover from './RecordCover';
import {
  AlbumBox,
  ArtistBox,
  GenreBox,
  GenresContainer,
  MusicInfoContainer,
  RateContainer,
  TitleBox,
} from './styles/musicDetailInfoStyle';
import { ReactComponent as Star } from '../../assets/star.svg';

function MusicDetailInfo({ music }: { music: MusicInfo }) {
  return (
    <MusicInfoContainer>
      <RecordCover music={music} />
      <AlbumBox>{music.album}</AlbumBox>
      <ArtistBox>{music.artist}</ArtistBox>
      <TitleBox>{music.title}</TitleBox>
      <RateContainer>
        <Star />
        <div>{music.rate}</div>
      </RateContainer>
    </MusicInfoContainer>
  );
}

export default MusicDetailInfo;

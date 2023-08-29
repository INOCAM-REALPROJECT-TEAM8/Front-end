import { MusicInfo } from '../../api/music';
import { AlbumCoverContainer, AlbumCoverImg, VinylRecord } from './styles/recordAlbumStyle';

function RecordCover({ music }: { music: MusicInfo }) {
  const handleCoverClick = () => {
    //@ToDo : 재생 모달 열기
  };

  return (
    <AlbumCoverContainer>
      <VinylRecord />
      <AlbumCoverImg src={music.image} />
    </AlbumCoverContainer>
  );
}

export default RecordCover;

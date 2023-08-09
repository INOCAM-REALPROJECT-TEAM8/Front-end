import { MusicSearchContainer } from './styles/MusicSearchStyle';
import KeywordSlides from './KeywordSlides';
import SearchBox from './SearchBox';

const sampleMusicList: { title: string; artist: string }[] = Array(10)
  .fill(0)
  .map((item, index) => {
    return { title: `title${index}`, artist: `artist${index}` };
  });

function MusicSearch() {
  return (
    <MusicSearchContainer>
      <SearchBox />
      <KeywordSlides keywords={sampleMusicList} />
    </MusicSearchContainer>
  );
}

export default MusicSearch;

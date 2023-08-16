import { MusicSearchContainer } from './styles/MusicSearchStyle';
import KeywordSlides from './KeywordSlides';
import SearchBox from './SearchBox';
import { useEffect, useState } from 'react';
import { MusicInfo, getRecommendSearches } from '../../api/music';
import { useQuery } from '@tanstack/react-query';

// const sampleMusicList: { title: string; artist: string }[] = Array(10)
//   .fill(0)
//   .map((item, index) => {
//     return { title: `title${index}`, artist: `artist${index}` };
//   });

function MusicSearch() {
  const [musics, setMusics] = useState<MusicInfo[]>([]);
  const { data, isSuccess } = useQuery(['recommendSearches'], getRecommendSearches);

  useEffect(() => {
    if (isSuccess) {
      setMusics(data);
    }
  }, [data, isSuccess]);

  return (
    <MusicSearchContainer>
      <SearchBox />
      <KeywordSlides musics={musics} />
    </MusicSearchContainer>
  );
}

export default MusicSearch;

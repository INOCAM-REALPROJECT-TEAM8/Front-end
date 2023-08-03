import { useEffect, useState } from 'react';
import { SearchContainer, SearchIcon, SearchInput, SearchInputContainer, VerticalLine } from './styles/SearchBoxStyle';
import SearchResults from './SearchResults';

const sampleMusicList: { title: string; artist: string }[] = Array(10)
  .fill(0)
  .map((item, index) => {
    return { title: `title${index}`, artist: `artist${index}` };
  });

function SearchBox() {
  const [input, setInput] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [resultMusics, setResultMusics] = useState<{ title: string; artist: string }[]>(sampleMusicList);

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  const getNewResultMusics = (searchKeyword: string) => () => {
    const newResultMusics = sampleMusicList.map(music => {
      return { title: music.title, artist: `(${searchKeyword} 검색 결과 예시) ${music.artist}` };
    });
    setResultMusics(newResultMusics);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(getNewResultMusics(e.target.value), 500);
    setTimer(newTimer);
  };

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIcon />
        <VerticalLine />
        <SearchInput placeholder='검색어를 입력하세요' type='text' value={input} onChange={handleInputChange} />
      </SearchInputContainer>
      {input && resultMusics.length && <SearchResults results={resultMusics} />}
    </SearchContainer>
  );
}

export default SearchBox;

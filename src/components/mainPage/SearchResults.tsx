import { SearchResultBox, SearchResultsContainer } from './styles/SearchResultsStyle';

type music = {
  title: string;
  artist: string;
};

function SearchResults({ results }: { results: music[] }) {
  const emptyItem: music = {
    title: '',
    artist: '',
  };

  return (
    <SearchResultsContainer>
      {[emptyItem, ...results].map(({ artist, title }, index) => {
        return <SearchResultBox $colorExist={!!(index % 2)}>{`${artist} - ${title}`}</SearchResultBox>;
      })}
    </SearchResultsContainer>
  );
}

export default SearchResults;

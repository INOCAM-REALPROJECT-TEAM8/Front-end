import { MusicInfo } from '../../api/music';
import { SearchResultBox, SearchResultsContainer } from './styles/SearchResultsStyle';

function SearchResults({ results }: { results: MusicInfo[] }) {
  return (
    <SearchResultsContainer>
      {[...results].map(({ artistsStringList, title }, index) => {
        return <SearchResultBox $colorExist={!!(index % 2)}>{`${title} - ${artistsStringList}`}</SearchResultBox>;
      })}
    </SearchResultsContainer>
  );
}

export default SearchResults;

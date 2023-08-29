import { MusicInfo } from '../../api/music';
import { SearchResultBox, SearchResultsContainer } from './styles/SearchResultsStyle';
import { useNavigate } from 'react-router-dom';

function SearchResults({ results }: { results: MusicInfo[] }) {
  const navigate = useNavigate();

  return (
    <>
      <SearchResultsContainer>
        {[...results].map(({ artistsStringList, title, trackId }, index) => {
          return (
            <SearchResultBox
              $colorExist={!!(index % 2)}
              onClick={() => navigate(`/musics/${trackId}`)}
            >{`${title} - ${artistsStringList}`}</SearchResultBox>
          );
        })}
      </SearchResultsContainer>
    </>
  );
}

export default SearchResults;

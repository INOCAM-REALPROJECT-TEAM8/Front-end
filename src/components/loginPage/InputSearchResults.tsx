import { MusicInfo } from '../../api/music';
import { SearchResultBox, SearchResultsContainer } from '../mainPage/styles/SearchResultsStyle';
import { useNavigate } from 'react-router-dom';
import AddPlaylist from '../musicDetailPage/AddPlaylist';

interface InputSearchResultsProps {
  results: MusicInfo[];
}

function InputSearchResults({ results }: InputSearchResultsProps) {
  const navigate = useNavigate();

  return (
    <>
      <SearchResultsContainer>
        {[...results].map(({ artistsStringList, title, trackId }, index) => {
          return (
            <div key={trackId}>
              <SearchResultBox
                $colorExist={!!(index % 2)}
                onClick={() => navigate(`/musics/${trackId}`)}
              >{`${title} - ${artistsStringList}`}</SearchResultBox>
              {/* <AddPlaylist />  */}
            </div>
          );
        })}
      </SearchResultsContainer>
    </>
  );
}

export default InputSearchResults;

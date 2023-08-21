import { MusicInfo } from '../../api/music';
import usePlayer from '../../hooks/usePlayer';
import { SearchResultBox, SearchResultsContainer } from './styles/SearchResultsStyle';

function SearchResults({ results }: { results: MusicInfo[] }) {
  const { Player, AllOpenerContainingRef, openPlayer } = usePlayer<HTMLDivElement>();
  return (
    <>
      <SearchResultsContainer ref={AllOpenerContainingRef}>
        {[...results].map(({ artistsStringList, title, trackId }, index) => {
          return (
            <SearchResultBox
              $colorExist={!!(index % 2)}
              onClick={() => openPlayer(trackId)}
            >{`${title} - ${artistsStringList}`}</SearchResultBox>
          );
        })}
      </SearchResultsContainer>
      <Player />
    </>
  );
}

export default SearchResults;

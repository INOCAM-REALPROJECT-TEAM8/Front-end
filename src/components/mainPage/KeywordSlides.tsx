import Slider from 'react-slick';
import { PopularKeywordBox, PopularKeywordsContainer } from './styles/KeywordSlidesStyle';
import { MusicInfo } from '../../api/music';
import usePlayer from '../../hooks/usePlayer';

const settings = {
  className: 'slider',
  variableWidth: true,
  swipeToSlide: true,
  slidesToShow: 1,
  infinite: false,
  arrows: false,
};

function KeywordSlides({ musics }: { musics: MusicInfo[] }) {
  const { Player, AllOpenerContainingRef, openPlayer } = usePlayer<HTMLDivElement>();

  return (
    <>
      <PopularKeywordsContainer ref={AllOpenerContainingRef}>
        <Slider {...settings}>
          {musics.map(({ title, trackId }, index) => (
            <PopularKeywordBox key='index' onClick={() => openPlayer(trackId)}>{`${title}`}</PopularKeywordBox>
          ))}
        </Slider>
      </PopularKeywordsContainer>
      <Player />
    </>
  );
}

export default KeywordSlides;

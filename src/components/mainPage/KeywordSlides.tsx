import Slider from 'react-slick';
import { PopularKeywordBox, PopularKeywordsContainer } from './styles/KeywordSlidesStyle';
import { MusicInfo } from '../../api/music';
import { useNavigate } from 'react-router-dom';

const settings = {
  className: 'slider',
  variableWidth: true,
  swipeToSlide: true,
  slidesToShow: 1,
  infinite: false,
  arrows: false,
};

function KeywordSlides({ musics }: { musics: MusicInfo[] }) {
  const navigate = useNavigate();

  return (
    <>
      <PopularKeywordsContainer>
        <Slider {...settings}>
          {musics.map(({ title, trackId }, index) => (
            <PopularKeywordBox
              onClick={() => navigate(`/musics/${trackId}`)}
              key='index'
            >{`${title}`}</PopularKeywordBox>
          ))}
        </Slider>
      </PopularKeywordsContainer>
    </>
  );
}

export default KeywordSlides;

import Slider from 'react-slick';
import { PopularKeywordBox, PopularKeywordsContainer } from './styles/KeywordSlidesStyle';
import { MusicInfo } from '../../api/music';

const settings = {
  className: 'slider',
  variableWidth: true,
  swipeToSlide: true,
  slidesToShow: 1,
  infinite: false,
  arrows: false,
};

function KeywordSlides({ musics }: { musics: MusicInfo[] }) {
  //@ToDo: 곡 눌렀을 때 모달 여는 로직 추가해야 함.
  return (
    <PopularKeywordsContainer>
      <Slider {...settings}>
        {musics.map(({ title, artistsStringList }, index) => (
          <PopularKeywordBox key='index'>{`${title} - ${artistsStringList}`}</PopularKeywordBox>
        ))}
      </Slider>
    </PopularKeywordsContainer>
  );
}

export default KeywordSlides;

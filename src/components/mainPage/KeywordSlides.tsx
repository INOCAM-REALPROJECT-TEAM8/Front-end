import Slider from 'react-slick';
import { PopularKeywordBox, PopularKeywordsContainer } from './styles/KeywordSlidesStyle';

const settings = {
  className: 'slider',
  variableWidth: true,
  swipeToSlide: true,
  slidesToShow: 1,
  infinite: false,
  arrows: false,
};

type KeywordSlidesProps = {
  keywords: { title: string; artist: string }[];
};

function KeywordSlides({ keywords }: KeywordSlidesProps) {
  return (
    <PopularKeywordsContainer>
      <Slider {...settings}>
        {keywords.map(({ title, artist }, index) => (
          <PopularKeywordBox key='index'>{`${title} - ${artist}`}</PopularKeywordBox>
        ))}
      </Slider>
    </PopularKeywordsContainer>
  );
}

export default KeywordSlides;

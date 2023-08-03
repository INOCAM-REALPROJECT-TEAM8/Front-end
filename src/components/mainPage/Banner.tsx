import Slider from 'react-slick';
import { BannerContainer } from './styles/BannerContainer';
import banner1 from '../../assets/banner1.jpg';

function Banner() {
  const settings = {
    className: 'slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        <img src={banner1} width='100%' />
        <img src={banner1} width='100%' />
        <img src={banner1} width='100%' />
        <img src={banner1} width='100%' />
      </Slider>
    </BannerContainer>
  );
}

export default Banner;

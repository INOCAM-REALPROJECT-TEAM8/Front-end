import Slider from 'react-slick';
import { BannerContainer } from './styles/BannerContainer';
import banner1 from '../../assets/banner1.jpg';
import { useNavigate } from 'react-router-dom';

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
        <BannerCard imgSrc={banner1} linkTo='' />
        <BannerCard imgSrc={banner1} linkTo='' />
        <BannerCard imgSrc={banner1} linkTo='' />
        <BannerCard imgSrc={banner1} linkTo='' />
      </Slider>
    </BannerContainer>
  );
}

function BannerCard({ imgSrc, linkTo }: { imgSrc: string; linkTo: string }) {
  const navigate = useNavigate();

  return <img src={imgSrc} style={{ cursor: 'pointer' }} width='100%' onClick={() => navigate(linkTo)} />;
}

export default Banner;

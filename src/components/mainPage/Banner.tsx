import Slider from 'react-slick';
import { BannerContainer } from './styles/BannerContainer';
import banner1 from '../../assets/banner1.jpg';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const settings = {
    className: 'slider',
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        <BannerCard imgSrc={banner1} linkTo='' alt='헤비메탈을 좋아하신다면 클릭해주세요' />
        <BannerCard imgSrc={banner1} linkTo='' alt='헤비메탈을 좋아하신다면 클릭해주세요' />
        <BannerCard imgSrc={banner1} linkTo='' alt='헤비메탈을 좋아하신다면 클릭해주세요' />
        <BannerCard imgSrc={banner1} linkTo='' alt='헤비메탈을 좋아하신다면 클릭해주세요' />
      </Slider>
    </BannerContainer>
  );
}

function BannerCard({ imgSrc, linkTo, alt }: { imgSrc: string; linkTo: string; alt: string }) {
  const navigate = useNavigate();

  return <img src={imgSrc} style={{ cursor: 'pointer' }} width='100%' onClick={() => navigate(linkTo)} alt={alt} />;
}

export default Banner;

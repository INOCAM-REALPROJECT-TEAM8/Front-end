import Slider from 'react-slick';
import { BannerContainer } from './styles/BannerContainer';
import banner1 from '../../assets/UserTestBanner.svg';

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
        <BannerCard
          imgSrc={banner1}
          onMouseDown={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSc25xMjZnYJw7JNrxtqY8emJAkbv7UD-6_mfLoUsEeOb5d-7A/viewform?usp=sf_link',
              '_blank',
            )
          }
          alt='유저테스트'
        ></BannerCard>
        {/* Other cards */}
      </Slider>
    </BannerContainer>
  );
}

function BannerCard({ imgSrc, onMouseDown, alt }: { imgSrc: string; onMouseDown?: () => void; alt?: string }) {
  return <img src={imgSrc} style={{ cursor: 'pointer' }} width='100%' onMouseDown={onMouseDown} alt={alt} />;
}

export default Banner;

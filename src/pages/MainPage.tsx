import Banner from '../components/mainPage/Banner';
import MusicSearch from '../components/mainPage/MusicSearch';
import MusicSlide from '../components/mainPage/MusicSlide';
import WhiteBackground, { FooterGradation } from '../components/mainPage/styles/WhiteBackground';

const musics = [
  'https://marketplace.canva.com/EAExV2m91mg/1/0/1600w/canva-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%A4%ED%95%98%EB%8A%98-%EA%B7%B8%EB%A6%BC%EC%9D%98-%EC%95%A8%EB%B2%94%EC%BB%A4%EB%B2%84-5tlu9r69vlc.jpg',
  'https://newsimg.hankookilbo.com/cms/articlerelease/2021/01/17/fb3de445-6b62-49df-9dab-0fa8efa9cc8c.jpg',
  'https://i.pinimg.com/1200x/1b/82/96/1b8296c37422e8d37798742dccf29718.jpg',
  'https://cdn.imweb.me/upload/S20221018154123b27d57d/ec57e66d0f563.jpg',
  'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2017/03/PS17032000112.jpg',
  'https://www.m-i.kr/news/photo/202203/902632_669160_77.jpg',
  'https://img.hankyung.com/photo/202101/01.25017855.1-1200x.jpg',
  'https://i.namu.wiki/i/lEVyubOJdqsx8D7sw6pCCTl7ZTPQxeVruGq0-8ddcr_JJszLwQzW6-UcXycCePZvJw34cKklJSpyTLKlZ-sgBw.webp',
  'https://i.namu.wiki/i/9zDYDWuDB_EKu14_q1EbaetDXhMpnndcrAfmHRE-h6vYI8MF4XhNLMQ5pJiqvI_I-shYpAv5jyLZB5N1CR-_aA.webp',
  'https://blog.kakaocdn.net/dn/biKtlt/btroQkaZItd/KX4p6Pz9PnJXCJT0m9Jkok/img.jpg',
].map((albumImgURL, index) => {
  return { title: `제목${index}`, artist: `가수${index}`, id: index, albumImgURL };
});

function MainPage() {
  return (
    <>
      <MusicSearch />
      <Banner />
      <WhiteBackground>
        <MusicSlide playListName='추천 음악' musics={musics} />
        <MusicSlide playListName='인기 음악' musics={musics} />
        <FooterGradation />
      </WhiteBackground>
    </>
  );
}

export default MainPage;

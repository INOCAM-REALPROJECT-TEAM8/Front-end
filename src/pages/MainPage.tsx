import { useState } from 'react';
import Banner from '../components/mainPage/Banner';
import MusicSearch from '../components/mainPage/MusicSearch';
import MusicSlide from '../components/mainPage/MusicSlide';
import WhiteBackground, { FooterGradation } from '../components/mainPage/styles/WhiteBackground';
import { getPopularMusics, getRecommendMusics } from '../api/music';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { SelectState } from '../redux/config/configStore';
import RecommendSlide from '../components/mainPage/RecommendSlide';

function MainPage() {
  const { isLoggedIn } = useSelector((state: SelectState) => state.userInfo);

  const {
    data: popularMusics,
    isSuccess: isSuccessPopular,
    isError: isErrorPopular,
  } = useQuery(['popularMusics'], getPopularMusics);

  return (
    <>
      <MusicSearch />
      <Banner />
      <WhiteBackground>
        <MusicSlide
          playListName='인기 음악'
          musics={isSuccessPopular && !isErrorPopular && popularMusics ? popularMusics : []}
        />
        {isLoggedIn ? (
          <RecommendSlide />
        ) : (
          <MusicSlide playListName='추천 음악(로그인 후에 사용할 수 있어요!)' musics={[]} />
        )}

        <FooterGradation />
      </WhiteBackground>
    </>
  );
}

export default MainPage;

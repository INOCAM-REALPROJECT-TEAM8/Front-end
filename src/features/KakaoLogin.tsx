import React from 'react';
import kakaologinbutton from '..//images/KakaoLoginButton.png';

function KakaoLogin() {
  return (
    <a href='https://hide-music.shop:8443/login/oauth2/kakao'>
      <img src={kakaologinbutton} alt='카카오 로그인'></img>
    </a>
  );
}

export default KakaoLogin;

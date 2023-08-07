import React from 'react';
import kakaologinbutton from '..//images/KakaoLoginButton.png';

function KakaoLogin() {
  const REST_API_KEY: string = `26398a73418ff36fe44d3750d2545424`;
  const REDIRECT_URI: string = `http://13.125.205.172:8080/api/users/oauth2/kakao`;
  const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <a href={KAKAO_AUTH_URL}>
      <img src={kakaologinbutton} alt='카카오 로그인'></img>
    </a>
  );
}

export default KakaoLogin;

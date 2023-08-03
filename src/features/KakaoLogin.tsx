import React from 'react';

function KakaoLogin() {
  const REST_API_KEY: string = `26398a73418ff36fe44d3750d2545424`;
  const REDIRECT_URI: string = `http://13.125.205.172:8080/api/users/oauth2/kakao`;
  const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=codeo`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <button onClick={kakaoLogin}></button>
    </>
  );
}

export default KakaoLogin;

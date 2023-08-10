import React from 'react';
import styled from 'styled-components';
import KakaoButton from '../icons/KakaoButton.png';

function KakaoLogin() {
  const REST_API_KEY: string = `26398a73418ff36fe44d3750d2545424`;
  const REDIRECT_URI: string = `http://13.125.205.172:8080/api/users/oauth2/kakao`;
  const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <A href={KAKAO_AUTH_URL}>
      <KakaoButtonContainer>
        <img src={KakaoButton} alt='카카오 로그인' />
        <KakaoText>카카오 로그인</KakaoText>
      </KakaoButtonContainer>
    </A>
  );
}

export default KakaoLogin;

const KakaoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 166px;
  height: 52px;
  border-radius: 16px;
  background-color: #f7e600;
  cursor: pointer;
  border: none;
  justify-content: center;
`;

const KakaoText = styled.span`
  margin-left: 8px;
  color: #000000;
  font-weight: bold;
  border: none;
`;

const A = styled.a`
  text-decoration: none;
`;

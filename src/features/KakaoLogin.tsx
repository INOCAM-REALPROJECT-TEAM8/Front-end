import React from 'react';
import styled from 'styled-components';
import KakaoButton from '../icons/KakaoButton.png';

function KakaoLogin() {
  return (
    <A href={`${process.env.REACT_APP_SERVER_URL}/login/oauth2/kakao`}>
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

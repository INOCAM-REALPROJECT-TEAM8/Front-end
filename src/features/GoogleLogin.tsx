import React from 'react';
import Googlebutton from '../icons/GoogleButton.png';
import { styled } from 'styled-components';

function GoogleLogin() {
  return (
    <A href={`${process.env.REACT_APP_SERVER_URL}/login/oauth2/google`}>
      <GoogleButton>
        <img src={Googlebutton} alt='구글 로그인' />
        <GoogleText>구글 로그인</GoogleText>
      </GoogleButton>
    </A>
  );
}

export default GoogleLogin;

const GoogleButton = styled.div`
  display: flex;
  align-items: center;
  width: 166px;
  height: 52px;
  border-radius: 16px;
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  justify-content: center;
  margin-right: 10px;
`;

const GoogleText = styled.div`
  margin-left: 8px;
  color: black;
  font-weight: bolder;
`;

const A = styled.a`
  text-decoration: none;
`;

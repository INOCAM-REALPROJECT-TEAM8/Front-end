import React from 'react';
import googlebtn from '../images/Google Button.png';
import { styled } from 'styled-components';

const GoogleLogin: React.FC = () => {
  const GOOGLE_AUTH_URL: string = `http://13.125.205.172:8080/login/oauth2/google `;
  //   const API_URL = process.env.REACT_APP_API_URL;
  //   const GOOGLE_AUTH_URL: string = `${API_URL}/users/oauth2/google `;
  return (
    <a href={GOOGLE_AUTH_URL}>
      <GoogleImg src={googlebtn} alt='구글 로그인' />
    </a>
  );
};

export default GoogleLogin;

const GoogleImg = styled.img`
  height: 100%;
  width: 100%;
`;

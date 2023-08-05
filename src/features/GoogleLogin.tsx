import React from 'react';
import googlebtn from '../images/Google Button.png';
import { styled } from 'styled-components';

const GoogleLogin: React.FC = () => {
  const GOOGLE_AUTH_URL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=784974037742-dt9jfof0s92eecrodmpg2q6ikjtdovs9.apps.googleusercontent.com&redirect_uri=http://ec2-13-125-205-172.ap-northeast-2.compute.amazonaws.com:8080/api/users/oauth2/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline `;
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

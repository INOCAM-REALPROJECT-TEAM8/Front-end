import React from 'react';
import googlebtn from '../images/Google Button.png';
import { styled } from 'styled-components';

function GoogleLogin() {
  const REST_API_KEY: string = `784974037742-dt9jfof0s92eecrodmpg2q6ikjtdovs9.apps.googleusercontent.com`;
  const REDIRECTION_URI: string = `http://ec2-13-125-205-172.ap-northeast-2.compute.amazonaws.com:8080/api/users/oauth2/google`;
  const GOOGLE_AUTH_URL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${REST_API_KEY}&redirect_uri=${REDIRECTION_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline `;
  return (
    <a href={GOOGLE_AUTH_URL}>
      <GoogleImg src={googlebtn} alt='구글 로그인' />
    </a>
  );
}

export default GoogleLogin;

const GoogleImg = styled.img`
  height: 100%;
  width: 100%;
`;

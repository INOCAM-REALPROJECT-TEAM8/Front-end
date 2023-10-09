import { styled } from 'styled-components';

export const Input = styled.input`
  width: 342px;
  height: 52px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 16px;
  border: none;
  font-weight: bold;
  background-color: #e4e4fc;
  color: #595deb;
  padding-left: 15px;

  &::placeholder {
    color: #595deb;
  }
`;

interface Buttonpropstype {
  color: string;
  $bgColor: string;
}

export const Button = styled.button<Buttonpropstype>`
  width: 342px;
  height: 52px;
  margin-bottom: 10px;
  border: 2px solid white;
  border-radius: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.$bgColor};
  color: ${props => props.color};
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 140px 0;
`;

export const SocialButton = styled.div`
  width: 342px;
  height: 40px;
  border: none;
  border-radius: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

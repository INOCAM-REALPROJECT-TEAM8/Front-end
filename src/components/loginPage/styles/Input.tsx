import { styled } from 'styled-components';

export const Input = styled.input`
  width: 342px;
  height: 52px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 16px;
  border: none;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  &::placeholder {
    color: #7751e1;
    padding-left: 15px;
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
  margin: 200px 0 200px 0;
`;

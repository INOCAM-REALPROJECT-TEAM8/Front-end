import { styled } from 'styled-components';

export const LeaveStarsBox = styled.div`
  cursor: pointer;
  padding: 8px 0px 10px;
  font-size: 18px;
  font-weight: 600;
  color: var(--main-color);
`;

export const LeaveStarCardContainer = styled.div`
  position: relative;
  border-radius: 16px;
  width: 260px;
  height: 210px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
`;

export const CloseModalBtn = styled.button`
  width: 130px;
  height: 41px;
  outline: none;
  border: none;
  color: #7d7d7d;
  background-color: rgba(150, 150, 150, 0.3);
  font-weight: 600;
  font-size: 17px;
  border-bottom-left-radius: 16px;
`;

export const StarSubmitBtn = styled.button`
  width: 130px;
  height: 41px;
  outline: none;
  border: none;
  color: white;
  background-color: #595deb;
  font-weight: 600;
  font-size: 17px;
  border-bottom-right-radius: 16px;
`;

import { styled } from 'styled-components';
import { ReactComponent as OriginalSearchIcon } from '../../../assets/searchIcon.svg';

export const InputSearchInputContainer = styled.label`
  position: relative;
  display: flex;
  height: 36px;
  width: 100%;
  padding: 9px 12px 8px;

  align-items: center;
  z-index: 2;
`;

export const InputSearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  border: 2px solid lightgray;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputSearchIcon = styled(OriginalSearchIcon)`
  width: 16px;
  height: 16px;
`;

export const InputVerticalLine = styled.div`
  margin: 0px 5.5px 0px 10px;
  height: 18px;
  border: 0.3px solid var(--main-color);
`;

export const InputSearchInput = styled.input`
  border: none;
  outline: none;
`;

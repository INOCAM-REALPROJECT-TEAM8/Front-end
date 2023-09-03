import { styled } from 'styled-components';
import { ReactComponent as OriginalSearchIcon } from '../../../assets/searchIcon.svg';

export const SearchInputContainer = styled.label`
  position: relative;
  display: flex;
  height: 36px;
  width: 100%;
  padding: 9px 12px 8px;

  background-color: var(--white);
  align-items: center;
  z-index: 2;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled(OriginalSearchIcon)`
  width: 16px;
  height: 16px;
`;

export const VerticalLine = styled.div`
  margin: 0px 5.5px 0px 10px;
  height: 18px;
  border: 0.3px solid var(--main-color);
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
`;

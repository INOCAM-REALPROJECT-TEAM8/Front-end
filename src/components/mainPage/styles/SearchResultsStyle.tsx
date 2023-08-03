import { styled } from 'styled-components';

export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  border-radius: 18px;
  background-color: var(--white);
  overflow: hidden;
  z-index: 1;
`;

export const SearchResultBox = styled.div<{ $colorExist: boolean }>`
  cursor: pointer;
  background-color: ${({ $colorExist }) => ($colorExist ? 'rgba(119, 81, 225, 0.05)' : 'none')};
  height: 36px;
  width: 100%;
  padding: 8px 17px 9px 49px;
  vertical-align: middle;
  color: var(--gray);
`;

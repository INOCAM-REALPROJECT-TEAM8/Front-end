import { styled } from 'styled-components';
import recode from '../../../assets/recode.svg';

export const AlbumCoverContainer = styled.div`
  position: relative;
  padding: 0px 0px 11px;
`;

export const VinylRecord = styled.div`
  position: absolute;
  left: 32px;
  background-image: url(${recode});
  background-size: cover;
  width: 230px;
  height: 230px;
`;

export const AlbumCoverImg = styled.img`
  position: relative;
  border-radius: 4px;
  width: 230px;
  height: 230px;
`;

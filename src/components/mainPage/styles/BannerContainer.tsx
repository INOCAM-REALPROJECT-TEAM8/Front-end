import { styled } from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;

  .slick-dots {
    position: absolute;
    bottom: 20px;

    & li {
      width: 16px;
      height: 16px;
      margin: 0px;
      & button {
        width: 16px;
        height: 16px;
        &::before {
          font-size: 10px;
          width: 16px;
          height: 16px;
          color: var(--white);
        }
      }
    }
  }
  rect {
    width: 100%;
  }
`;

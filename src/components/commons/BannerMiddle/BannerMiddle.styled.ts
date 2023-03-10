import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px -6px;

  @media (max-width: 64em) {
    display: none;
  }
`;

export const BannerMiddleContainer = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const BannerMiddleImg = styled.img`
  height: 110px;
  margin-top: 20px;
  background-size: cover;
  background-position: 50%;
  cursor: pointer;
`;

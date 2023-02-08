import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2px;
  margin-right: -2px;
`;

export const BannerSlider = styled.div`
  padding-left: 2px;
  padding-right: 2px;
  &.w-70 {
    flex: 0 0 70%;
    width: 70%;
  }
  &.w-30 {
    flex: 0 0 30%;
    width: 30%;
  }
`;

export const SliderItem = styled.div``;

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerRight = styled.div``;

export const BannerRightList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const BannerRightItem = styled.li`
  &.banner-right-second {
    margin-top: 0.3rem;
  }
`;


export const BannerRightImg = styled.img`
  width: 100%;
  height: 124px;
  border-radius: 2px;
`;

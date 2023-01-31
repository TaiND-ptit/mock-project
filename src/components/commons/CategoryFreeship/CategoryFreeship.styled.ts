import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-left: -6px;
  margin-right: -6px;
  display: flex;
  flex-wrap: wrap;
`;

export const CategoryFreeshipContainer = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const BannerCategoryXtra = styled.div`
  margin-top: 20px;
  padding-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const BannerCategoryXtraImg = styled.img``;

export const CategoryXtraContent = styled.div`
  background-color: #ffebd9;
  margin: -30px 17px 0px 17px;
  padding-bottom: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CategoryXtraHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

export const CategoryXtraHeadingText = styled.h4`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  margin: 0;
  text-transform: uppercase;
`;

export const CategoryXtraHeadingLink = styled.a`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  text-transform: capitalize;
  text-decoration: none;
`;

export const CategoryXtraHeadingIcon = styled.i`
  font-size: 2rem;
`;

export const CategoryXtraList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 13px;
`;

export const CategoryXtraSale = styled.div`
  position: relative;
  padding-left: 4px;
  padding-right: 4px;
  flex: 0 0 16.66667%;
  width: 16.66667%;
`;

export const CategoryXtraLink = styled.a`
  text-decoration: none;
`;

export const CategoryXtraProduct = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 3px;
  overflow: hidden;
`;

export const CategoryXtraProductImg = styled.img`
  width: 100%;
`;

export const CategoryXtraProductPrice = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  padding: 16px 0;
  text-align: center;
`;

export const CategoryXtraProductPriceText = styled.span`
  font-size: 1.6rem;
  position: absolute;
  transform: translate(-8px, -2px);
`;

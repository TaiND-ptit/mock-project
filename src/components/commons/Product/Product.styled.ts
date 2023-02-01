import styled from 'styled-components';

export const ProductsContainer = styled.div`
  position: relative;
  margin-top: 10px;
  flex: 0 0 16.66667%;
  width: 16.66667%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const ProductList = styled.div`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

export const ProductItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2px;
  box-shadow: 0 1px 6px #ccc;
  transition: transform ease-in 0.05s;
  will-change: transform;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 16px rgba(204, 204, 204, 0.5);
    border: 1px solid ${({ theme }) => theme.colors.mainColorSecond};
  }
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const ProductContent = styled.div`
  margin-bottom: 5px;
`;

export const ProductsImgName = styled.div``;

export const ProductsNameContent = styled.div`
  color: ${({ theme }) => theme.colors.blackColor};
  font-size: 2rem;
  line-height: 2.7rem;
  min-height: 5.4rem;
  margin: 10px;
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const ProductsPrice = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  padding: 20px 10px 10px 10px;
`;

export const ProductsPriceMain = styled.div``;

export const ProductsPriceFirst = styled.span`
  position: absolute;
  left: 10px;
  bottom: 15px;
  font-size: 1.4rem;
  color: var(--main-color);
`;

export const ProductsPriceNew = styled.span`
  color: var(--main-color);
  font-size: 2.3rem;
  font-weight: 500;
  margin-left: 8px;
`;

export const ProductsPriceAmount = styled.div`
  font-size: 1.9rem;
  line-height: 2, 4rem;
  color: rgba(0, 0, 0, 0.54);
`;

export const ProductsFavorite = styled.div`
  position: absolute;
  line-height: 2.3rem;
  left: -4px;
  top: 6px;
  color: #f25220;
  background-color: currentColor;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    border-top: 4px solid currentColor;
    border-left: 4px solid transparent;
    filter: brightness(60%);
  }
`;

export const ProductsFavoriteIcon = styled.i`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  padding: 0 3px 0 5px;
  display: none;
`;

export const ProductsFavoriteText = styled.div`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 500;
  padding: 5px;
`;

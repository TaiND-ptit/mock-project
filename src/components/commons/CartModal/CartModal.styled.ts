import styled, { css } from 'styled-components';

export const CartContainer = styled.div`
  position: absolute;
  right: -10px;
  top: calc(100% + 10px);
  // background-color: ${({ theme }) => theme.colors.whiteColor};
  background-color: #000;
  width: 360px;
  box-shadow: rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;
  padding: 1.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  // visibility: hidden;
  opacity: 0.5;
  transition: all 300ms ease-in-out;
  z-index: 99;
  height: 460px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: lighten(#ff6433, 5%);
    outline: 1px solid #ff6433;
  }

  &::after {
    position: absolute;
    content: '';
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid ${({ theme }) => theme.colors.whiteColor};
    right: 8px;
    top: -13px;
  }
`;

export const CartModalTitle = styled.h5`
  text-align: center;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const CartModalList = styled.div`
  display: grid;
`;

export const CartModalItem = styled.div`
  display: grid;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  grid-template-columns: 64px auto 65px;
  column-gap: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
export const CartModalItemImgCnt = styled.div`
  width: 60px;
  height: 60px;
`;

export const CartModalItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CartModalItemTitle = styled.div`
  font-size: 13px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.whiteColor};
  // color: rgba(0, 0, 0, 0.85);
  line-height: 1.4;
`;

export const CartModalItemPrice = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainColorSecond};
`;

export const ViewCartBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  text-transform: capitalize;
  font-size: 15px;
  display: inline-block;
  width: 200px;
  padding: 5px 1rem;
  margin-top: 1.8rem;
  margin-left: auto;
  border-radius: 2px;
  text-align: center;
  margin: auto;
`;

export const CartModalEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartModalEmptyImg = styled.img`
  width: 120px;
  margin-top: 2rem;
`;

export const CartModalEmptyText = styled.h6`
  margin-top: 1.6rem;
  color: #212529;
  font-size: 14px;
`;
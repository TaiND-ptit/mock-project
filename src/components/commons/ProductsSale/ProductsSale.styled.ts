import styled, { css } from 'styled-components';

export const ProductsSaleContainer = styled.div`
  width: 46px;
  height: 42px;
  right: 4px;
  cursor: pointer;
  position: absolute;
  top: 0;
  text-align: center;
  color: rgba(255, 212, 36, 0.94);
  background-color: currentColor;
  border-top-right-radius: 2px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    border-style: solid;
    border-color: transparent currentColor transparent currentColor;
    border-width: 0 23px 4px;
  }

  &.rightSize{
    right: 0;
  }
`;

export const ProductsSaleValue = styled.div`
  font-size: 2.2rem;
  color: #f8430c;
  margin: 5px 0 0 4px;
  font-weight: 500;
`;

export const ProductsSaleContent = styled.div`
  font-size: 2rem;
  margin-top: 7px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

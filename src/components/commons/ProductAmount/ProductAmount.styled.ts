import styled from 'styled-components';

// export const ProductAmountContainer = styled.div`
// display: flex;
// align-items: center;
// margin-top: 40px;
// user-select: none;
// `;

// export const ProductAmountTitle = styled.div`
// font-size: 2.4rem;
// line-height: 2.4rem;
// color: #a39e9e;
// `;

export const ProductAmountMain = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ProductAmountMainMinus = styled.div`
  svg {
    color: #585858;
    fill: currentColor;
    display: flex;
    align-items: center;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
`;

export const ProductAmountMainInput = styled.input`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 2.6rem;
  width: 50px;
  height: 30px;
  text-align: center;
  outline: none;
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  cursor: text;
`;

export const ProductAmountMainPlus = styled.div`
  svg {
    color: #585858;
    fill: currentColor;
    display: flex;
    align-items: center;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
`;

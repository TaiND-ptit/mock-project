import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const OrderDetailWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 16px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.06);
`;

export const ProductMain = styled.div`
  display: flex;
  padding: 24px 20px;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

export const ProductInfo = styled.div``;

export const ProductName = styled.div`
  font-size: 14px;
`;

// export const ProductWrapper = styled.div`
//   display: flex;
//   font-size: 12px;
//   margin-top: 10px;
//   justify-content: space-around;
// `;

export const ProductQuantityContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
`;

export const ProductQuantityText = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;

export const ProductQuantity = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const ProductPriceContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
`;
export const ProductPriceText = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 10px;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.mainColorSecond};
`;

export const TotalPrice = styled.div`
  font-size: 2.2rem;
  color: #888;
  padding: 10px 30px;
`;

export const OrderStatus = styled.div`
  font-size: 2.2rem;
  color: #888;
  padding: 10px 30px;
`;

export const OrderRight = styled.div`
  display: flex;
  margin-right: 24px;
`;

export const OrderShipping = styled.div`
  font-size: 2rem;
  color: #888;
  padding: 10px 50px;
`;

export const NameUserWrapper = styled.div`
  display: flex;
`;

export const NameUserText = styled.div``;

export const NameUser = styled.div``;

export const PhoneUserWrapper = styled.div`
  margin: 10px 0;
`;

export const PhoneUserText = styled.div`
  margin: 10px 0;
`;

export const PhoneUser = styled.div`
  margin: 10px 0;
`;

export const AddressUserWrapper = styled.div``;
export const AddressUserText = styled.div``;
export const AddressUser = styled.div``;

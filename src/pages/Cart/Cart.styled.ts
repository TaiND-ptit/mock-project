import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.header`
  margin-top: 20px;
`;

export const NavMenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const NavMenuLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuLeftCart = styled.div`
  overflow: hidden;
`;

export const NavMenuLeftCartText = styled.p`
  font-size: 3.4rem;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  padding: 10px;
  text-transform: capitalize;
  border-left: 1px solid ${({ theme }) => theme.colors.mainColorSecond};
  margin: 10px 0 0 6px;
`;

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding: 20px 0 80px 0;
`;

export const CartGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: block;
`;

export const CartContainerMain = styled.div``;

export const CartVoucher = styled.div`
  display: flex;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid rgba(224, 168, 0, 0.4);
  border-radius: 2px;
`;

export const CartVoucherIcon = styled.div`
  width: 24px;
  height: 15px;
`;

export const CartVoucherContent = styled.div`
  font-size: 2rem;
  line-height: 2.2rem;
  padding-left: 10px;
`;

export const CartVoucherContentText = styled.span``;

export const CartBill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.06);
`;

export const CartBillLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CartBillLeftText = styled.p`
  font-size: 2.2rem;
  color: rgba(0, 0, 0, 0.9);
  padding-left: 20px;
  text-transform: capitalize;
`;

export const CartBillRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const UnitCart = styled.p`
  font-size: 2.2rem;
  color: #888;
  padding: 10px 50px;
`;

export const AmountCart = styled.p`
  font-size: 2.2rem;
  color: #888;
  padding: 10px 50px;
`;

export const AmountOfFrice = styled.p`
  font-size: 2.2rem;
  color: #888;
  padding: 10px 50px;
`;

export const OperationCart = styled.p`
  font-size: 2.2rem;
  color: #888;
  padding: 10px 50px;
  padding-right: 20px;
`;

export const CartListProduct = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 16px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.06);
`;

export const CartProductMain = styled.div`
  display: flex;
  padding: 24px 20px;
  align-items: center;
  user-select: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

export const CartProductMainImg = styled.div`
  display: flex;
  padding-left: 20px;
`;

export const CartProductMainImgProduct = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const CartProductMainImgContent = styled.div`
  padding: 2px 0 0 10px;
`;

export const CartProductMainImgContentText = styled.div`
  font-size: 2.4rem;
  line-height: 2.6rem;
  color: rgba(0, 0, 0, 0.9);
  width: 240px;
  padding-bottom: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const CartProductFreeShipExtraImg = styled.img`
  height: 18px;
`;

export const CartProductMainPrice = styled.div`
  font-size: 2.2rem;
  color: rgba(0, 0, 0, 0.85);
  padding-left: 38px;
`;

export const CartProductMainPriceMain = styled.div`
  font-size: 2.2rem;
  padding-left: 38px;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  transform: translateX(32px);
  min-width: 100px;
`;

export const CartProductMainInputAmount = styled.div`
  margin: 0 0 0 60px;
`;

export const CartProductMainClassify = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 40px;
  min-width: 170px;
  transform: translateX(28px);
`;

export const CartProductMainRemove = styled.div`
  padding-left: 130px;
`;

export const CartProductMainRemoveText = styled.p`
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    cursor: pointer;
  }
`;

export const CartProductPay = styled.div`
  // margin-top: 24px;
  // background-color: ${({ theme }) => theme.colors.WhiteColor};
  // box-shadow: 1px -4px 8px rgba(0, 0, 0, 0.08);
  // transform: translateY(-150px);
  // user-select: none;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 16px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.06);
`;

export const CartProductPayTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartProductPayTotalLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0 24px 30px;
`;

export const CartProductPayTotalLeftRemove = styled.div`
  font-size: 2.4rem;
  color: rgba(0, 0, 0, 0.82);
  margin: 0 16px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColorSecond};
  }
`;

export const CartProductPayTotalRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const CartProductPayTotalRightAll = styled.div`
  font-size: 2.7rem;
  line-height: 3.2rem;
  color: rgba(0, 0, 0, 0.82);
`;

export const CartProductPayTotalRightPrice = styled.div`
  font-size: 3.4rem;
  line-height: 3.8rem;
  color: ${({ theme }) => theme.colors.mainColorSecond};
  padding: 0 16px;
`;

export const BuyBtn = styled.button`
color: ${({ theme }) => theme.colors.WhiteColor};
background-color: ${({ theme }) => theme.colors.mainColor};
min-width: 180px;
max-width: 100%;
    text-decoration: none;
    width: 120px;
    height: 42px;
    line-height: 1.8rem;
    border: none;
    border-radius: 2px;
    font-size: 2.2rem;
    padding: 0;
    cursor: pointer;
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;

&:hover {
    background-color: rgba(238, 78, 46, 0.94);
`;

export const NoProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    font-size: 17px;
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.WhiteColor};
  }
`;
export const NoProductTitle = styled.div`
  font-size: 20px;
`;

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

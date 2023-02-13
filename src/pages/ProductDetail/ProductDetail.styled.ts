import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  @media (max-width: 64em) {
    width: 80%;
    margin: 0 auto;
  }

`;

export const WrapperContainer = styled.div`

  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ProductDetailContainer = styled.div`
  padding-top: 30px;
`;

export const ProductDet = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2px;
  width: 100%;
  display: block;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -6px;
  margin-right: -6px;
  @media (max-width: 64em) {
    flex-direction: column;
  }
`;

export const ProductImgContainer = styled.div`
  padding: 20px 20px 20px 25px;
  flex: 0 0 41.66667%;
  width: 41.66667%;

  @media (max-width: 64em) {
    flex: 0 0 80%;
    width: 80%;
    margin: auto;
  }
`;

export const ProductDetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 0 0 58.33333%;
  width: 58.33333%;
  @media (max-width: 64em) {
    flex: 0 0 80%;
    width: 80%;
    margin: auto;
  }
`;

export const ProductDetailTitle = styled.div`
  color: rgba(0, 0, 0, 0.78);
  font-size: 3.2rem;
  line-height: 4rem;
`;

export const ProductDetailVote = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const ProductDetailVoteStar = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductDetailVoteStarContainer = styled.div`
  margin-left: 4px;
`;

export const ProductDetailVoteStarIcon = styled.i`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const ProductVoteContent = styled.div`
position: relative;
display: flex;
align-items: center;
padding-left: 10px;

&::before {
    content: "";
    position: absolute;
    height: 20px;
    top: -60%;
    left: 0;
    border-left: 1px solid #ccc;
    margin: 0 10px;
`;

export const ProductVoteContentTitle = styled.div`
  margin-left: 10px;
`;

export const ProductVoteContentTitleText = styled.span`
  color: #222;
  font-size: 2.5rem;
`;

export const ProductVoteContentTitleMain = styled.div`
  color: #7c7878;
  font-size: 2.3rem;
  font-weight: 300;
  margin-left: 6px;
  margin-top: -3px;
`;

export const ProductDetailPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
`;

export const ProductDetailPriceOld = styled.div`
  color: #ccc;
  font-size: 2.4rem;
  font-weight: 300;
  text-decoration: line-through;
`;

export const ProductDetailPriceNew = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 4rem;
  padding-left: 10px;
`;

export const ProductDetailLabel = styled.div`
  margin-left: 24px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 2px;
`;

export const ProductDetailLabelContent = styled.div`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 1.8rem;
  font-weight: 500;
  padding: 10px;
`;

export const ProductDetailLabelDiscount = styled.span`
  font-size: 1.9rem;
  font-weight: 300;
  margin-right: 3px;
`;

export const ProductDetailDeliver = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
`;

export const ProductDetailDeliverTitle = styled.div`
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: #a39e9e;
`;

export const ProductDetailDeliverStruck = styled.div`
  color: #00bfa5;
  fill: currentColor;
  padding-left: 30px;
`;

export const ProductDetailDeliverStruckDescription = styled.div`
  font-size: 2.2rem;
  line-height: 2.2rem;
  margin: 4px 0 0 4px;
`;

export const ProductDetailAmount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  user-select: none;
`;

export const ProductDetailAmountTitle = styled.div`
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: #a39e9e;
`;

export const ProductDetailBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 52px 0 0 -15px;
  user-select: none;
`;

export const ProductDetailBtnCart = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
  margin: 0 16px;
  background-color: rgba(255, 87, 34, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: rgb(252, 243, 243);
  }
`;

export const ProductDetailBtnCartMain = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  fill: currentColor;
  width: 20px;
  height: 20x;
  margin-left: 10px;
  user-select: none;
`;

export const ProductDetailBtnCartText = styled.div`
color: ${({ theme }) => theme.colors.mainColor};
min-width: 200px;
max-width: 100%;
margin: 0 -20px 0 -24px;
width: 120px;
    height: 42px;
    line-height: 1.8rem;
    text-decoration: none;
    border: none;
    border-radius: 2px;
    font-size: 2.2rem;
    padding: 0;
    cursor: pointer;
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`;

export const BuyNowBtn = styled.div`
  min-width: 200px;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.mainColor};
  max-width: 100%;
  border: none;
  border-radius: 2px;
  font-size: 2.2rem;
  padding: 0;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 42px;
  line-height: 1.8rem;
  user-select: none;
`;

export const ProductContainerDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2px;
  margin-top: 16px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: block;
`;

export const ProductDetailDescriptionContainer = styled.div`
  margin-left: -6px;
  margin-right: -6px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductDetailDescriptionHeading = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const ProductDetailDescriptionContent = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  margin: 20px 20px 20px 0;
`;

export const ProductDetailDescriptionTitle = styled.div`
  font-size: 2.6rem;
  text-transform: uppercase;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const ProductDetailDescriptionText = styled.span``;

export const ProductDescription = styled.div`
  flex: 0 0 91.66667%;
  width: 91.66667%;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 30px;
`;

export const ProductDetailDescriptionContentMain = styled.span``;

export const ProductDetailDescriptionMainText = styled.span`
  color: rgba(0, 0, 0, 0.8);
  white-space: pre-wrap;
  font-size: 2.1rem;
  line-height: 2;
  padding-left: 20px;
  margin-top: -44px;
`;
export const WapperLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

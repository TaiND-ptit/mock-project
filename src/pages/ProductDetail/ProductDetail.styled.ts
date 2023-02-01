import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
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
`;

export const ProductImgContainer = styled.div`
  padding: 20px 20px 20px 25px;
  flex: 0 0 41.66667%;
  width: 41.66667%;
`;

export const ProductImgMain = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.mainColor};
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:not(&:first-child) {
    display: none;
  }
`;

export const ProductListImgThumb = styled.ul`
  list-style-type: none;
  position: relative;
  list-style: none;
  padding-left: 0;
  flex-wrap: nowrap;
  overflow: hidden;
  padding-top: 2px;
  margin-left: -6px;
  margin-right: -6px;
  display: flex;
`;

export const ProductListImgThumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.01s;
`;

export const ProductColImg = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  flex: 0 0 20%;
  width: 20%;
`;

export const ProductItemImg = styled.li`
  width: 100%;
`;

export const ProductLinkImg = styled.a`
  background-color: transparent;
`;

export const ProductImgThumb = styled.img`
  width: 100%;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.mainColorSecond};
    cursor: pointer;
  }
`;

export const ProductListImgPrev = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 6px;
  width: 20px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    border-width: 15px 9px;
    border-style: solid;
    left: 4px;
    border-color: transparent ${({ theme }) => theme.colors.whiteColor} transparent transparent;
  }
`;

export const ProductListImgNext = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
  width: 20px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    border-width: 15px 9px;
    border-style: solid;
    right: -14px;
    border-color: transparent transparent transparent ${({ theme }) => theme.colors.whiteColor};
  }
`;

export const ProductDetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 0 0 58.33333%;
  width: 58.33333%;
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
  display: none;
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

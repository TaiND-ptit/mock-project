import images from 'assets/images';
import {
  Wrapper,
  WrapperContainer,
  ProductDetailContainer,
  ProductDet,
  ProductDetailInfo,
  ProductImgContainer,
  ProductDetailDescription,
  ProductDetailTitle,
  ProductDetailVote,
  ProductDetailVoteStar,
  ProductDetailVoteStarContainer,
  ProductDetailVoteStarIcon,
  ProductVoteContent,
  ProductVoteContentTitle,
  ProductVoteContentTitleText,
  ProductVoteContentTitleMain,
  ProductDetailPrice,
  ProductDetailPriceOld,
  ProductDetailPriceNew,
  ProductDetailLabel,
  ProductDetailLabelContent,
  ProductDetailLabelDiscount,
  ProductDetailDeliver,
  ProductDetailDeliverTitle,
  ProductDetailDeliverStruck,
  ProductDetailDeliverStruckDescription,
  ProductDetailAmount,
  ProductDetailAmountTitle,
  ProductDetailBtn,
  ProductDetailBtnCart,
  ProductDetailBtnCartMain,
  ProductDetailBtnCartText,
  BuyNowBtn,
  ProductContainerDetails,
  ProductDetailDescriptionContainer,
  ProductDetailDescriptionHeading,
  ProductDetailDescriptionContent,
  ProductDetailDescriptionTitle,
  ProductDetailDescriptionText,
  ProductDescription,
  ProductDetailDescriptionContentMain,
  ProductDetailDescriptionMainText,
  WapperLoading,
  ProductAmountMain,
  ProductAmountMainMinus,
  ProductAmountMainInput,
  ProductAmountMainPlus
} from './ProductDetail.styled';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from 'api/product.api';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from 'store/cartSlice';
import { RootState } from 'store/store';
import CarouselProduct from 'components/commons/CarouselProduct/CarouselProduct';
import Loading from 'components/commons/Loading/Loading';
import DeliverStruck from 'components/commons/SVG/DeliverStruck';
import Minus from 'components/commons/SVG/Minus';
import Plus from 'components/commons/SVG/Plus';
import BuyProduct from 'components/commons/SVG/BuyProduct';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const productDetailQuery = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => getProduct(String(id)),
    keepPreviousData: true
  });
  const product = productDetailQuery.data?.data.data;
  const dataImages = productDetailQuery.data?.data.data.images;
  let discountedPrice = product?.price - product?.price * (product?.discount / 100);

  const addToCartHandler = (product: any) => {
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice }));
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      let tempQuantity = prevQuantity - 1;
      if (tempQuantity < 1) tempQuantity = 1;
      return tempQuantity;
    });
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      let tempQuantity = prevQuantity + 1;
      if (tempQuantity > product?.quantity) tempQuantity = product?.quantity;
      return tempQuantity;
    });
  };
  return (
    <Wrapper>
      {productDetailQuery.isLoading && <Loading />}
      {!productDetailQuery.isLoading && (
        <WrapperContainer>
          <ProductDetailContainer>
            <ProductDet>
              <ProductDetailInfo>
                <ProductImgContainer>
                  <CarouselProduct dataImages={dataImages} />
                </ProductImgContainer>

                <ProductDetailDescription>
                  <ProductDetailTitle>{productDetailQuery.data?.data.data.name}</ProductDetailTitle>
                  <ProductDetailVote>
                    <ProductDetailVoteStar>
                      <ProductDetailVoteStarContainer>
                        <ProductDetailVoteStarIcon className='fas fa-star' />
                        <ProductDetailVoteStarIcon className='fas fa-star' />
                        <ProductDetailVoteStarIcon className='fas fa-star' />
                        <ProductDetailVoteStarIcon className='fas fa-star' />
                        <ProductDetailVoteStarIcon className='fas fa-star-half-alt' />
                      </ProductDetailVoteStarContainer>
                    </ProductDetailVoteStar>

                    <ProductVoteContent>
                      <ProductVoteContentTitle>
                        <ProductVoteContentTitleText>20,4k</ProductVoteContentTitleText>
                      </ProductVoteContentTitle>
                      <ProductVoteContentTitleMain> Đánh Giá</ProductVoteContentTitleMain>
                    </ProductVoteContent>

                    <ProductVoteContent>
                      <ProductVoteContentTitle>
                        <ProductVoteContentTitleText>40,6k</ProductVoteContentTitleText>
                      </ProductVoteContentTitle>
                      <ProductVoteContentTitleMain>Đã Bán</ProductVoteContentTitleMain>
                    </ProductVoteContent>
                  </ProductDetailVote>
                  <ProductDetailPrice>
                    <ProductDetailPriceOld>{productDetailQuery.data?.data.data.price}đ</ProductDetailPriceOld>
                    <ProductDetailPriceNew>{discountedPrice}đ</ProductDetailPriceNew>
                    <ProductDetailLabel>
                      {productDetailQuery.data?.data.data.discount === 0 ? (
                        <></>
                      ) : (
                        <ProductDetailLabelContent>
                          <ProductDetailLabelDiscount>
                            {productDetailQuery.data?.data.data.discount}%
                          </ProductDetailLabelDiscount>
                          GIẢM
                        </ProductDetailLabelContent>
                      )}
                    </ProductDetailLabel>
                  </ProductDetailPrice>
                  <ProductDetailDeliver>
                    <ProductDetailDeliverTitle>Vận Chuyển</ProductDetailDeliverTitle>
                    <ProductDetailDeliverStruck>
                      <DeliverStruck />
                    </ProductDetailDeliverStruck>
                    <ProductDetailDeliverStruckDescription>Miễn Phí Vận Chuyển</ProductDetailDeliverStruckDescription>
                  </ProductDetailDeliver>

                  <ProductDetailAmount>
                    <ProductDetailAmountTitle>Số Lượng</ProductDetailAmountTitle>
                    <ProductAmountMain>
                      <ProductAmountMainMinus onClick={() => decreaseQuantity()}>
                        <Minus />
                      </ProductAmountMainMinus>
                      <ProductAmountMainInput value={quantity} readOnly />
                      <ProductAmountMainPlus onClick={() => increaseQuantity()}>
                        <Plus />
                      </ProductAmountMainPlus>
                    </ProductAmountMain>
                  </ProductDetailAmount>

                  <ProductDetailBtn>
                    <ProductDetailBtnCart>
                      <ProductDetailBtnCartMain>
                        <BuyProduct />
                      </ProductDetailBtnCartMain>

                      <ProductDetailBtnCartText
                        onClick={() => {
                          addToCartHandler(product);
                        }}
                      >
                        Thêm Vào Giỏ Hàng
                      </ProductDetailBtnCartText>
                    </ProductDetailBtnCart>
                    <Link to=''>
                      <BuyNowBtn>Mua Ngay</BuyNowBtn>
                    </Link>
                  </ProductDetailBtn>
                </ProductDetailDescription>
              </ProductDetailInfo>
            </ProductDet>
          </ProductDetailContainer>
          <ProductContainerDetails>
            <ProductDetailDescriptionContainer>
              <ProductDetailDescriptionHeading>
                <ProductDetailDescriptionContent>
                  <ProductDetailDescriptionTitle>
                    <ProductDetailDescriptionText>Mô tả sản phẩm</ProductDetailDescriptionText>
                  </ProductDetailDescriptionTitle>
                </ProductDetailDescriptionContent>
              </ProductDetailDescriptionHeading>

              <ProductDescription>
                <ProductDetailDescriptionContentMain>
                  <ProductDetailDescriptionMainText>
                    {productDetailQuery.data?.data.data.description}
                  </ProductDetailDescriptionMainText>
                </ProductDetailDescriptionContentMain>
              </ProductDescription>
            </ProductDetailDescriptionContainer>
          </ProductContainerDetails>
        </WrapperContainer>
      )}
    </Wrapper>
  );
};

export default ProductDetail;

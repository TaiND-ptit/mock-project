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
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from 'store/cartSlice';
import { RootState } from 'store/store';
import CarouselProduct from 'components/commons/CarouselProduct/CarouselProduct';
import Loading from 'components/commons/Loading/Loading';

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
      {productDetailQuery.isLoading && (
        <Loading/>
      )}
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
                      <ProductDetailLabelContent>
                        <ProductDetailLabelDiscount>
                          {productDetailQuery.data?.data.data.discount}%
                        </ProductDetailLabelDiscount>
                        GIẢM
                      </ProductDetailLabelContent>
                    </ProductDetailLabel>
                  </ProductDetailPrice>
                  <ProductDetailDeliver>
                    <ProductDetailDeliverTitle>Vận Chuyển</ProductDetailDeliverTitle>
                    <ProductDetailDeliverStruck>
                      <svg height='20pt' viewBox='1 -22 511.999 511' width='20pt' xmlns='http://www.w3.org/2000/svg'>
                        <path d='m66.390625 124.769531c6.628906 0 13.257813-2.71875 13.257813-8.160156v-43.859375h25.671874c5.609376 0 7.988282-5.441406 7.988282-10.03125 0-5.4375-2.886719-10.371094-7.988282-10.371094h-25.671874v-28.726562h44.03125c5.097656 0 7.988281-5.441406 7.988281-11.730469 0-5.441406-2.378907-11.390625-7.988281-11.390625h-58.992188c-5.777344 0-11.558594 2.71875-11.558594 8.160156v107.949219c0 5.441406 6.628906 8.160156 13.261719 8.160156zm0 0' />
                        <path d='m170.941406 124.769531c6.628906 0 13.261719-2.71875 13.261719-8.160156v-40.96875h11.21875l23.289063 45.21875c1.871093 3.570313 5.101562 4.929687 8.5 4.929687 7.820312 0 16.660156-7.136718 16.660156-13.769531 0-.851562-.167969-2.039062-.851563-3.058593l-20.738281-37.570313c11.898438-4.589844 20.570312-15.472656 20.570312-34.511719 0-27.710937-18.53125-36.378906-41.820312-36.378906h-35.191406c-4.929688 0-8.160156 3.738281-8.160156 7.988281v108.121094c0 5.441406 6.632812 8.160156 13.261718 8.160156zm13.261719-101.148437h16.828125c9.519531 0 15.300781 3.910156 15.300781 15.808594 0 11.902343-5.78125 15.8125-15.300781 15.8125h-16.828125zm0 0' />
                        <path d='m285.523438 124.769531h60.519531c5.609375 0 7.992187-5.949219 7.992187-11.390625 0-6.289062-2.890625-11.730468-7.992187-11.730468h-45.558594v-28.898438h25.5c5.609375 0 7.988281-5.441406 7.988281-10.03125 0-5.4375-2.890625-10.371094-7.988281-10.371094h-25.5v-28.726562h45.558594c5.101562 0 7.992187-5.441406 7.992187-11.730469 0-5.441406-2.382812-11.390625-7.992187-11.390625h-60.519531c-5.78125 0-11.5625 2.71875-11.5625 8.160156v107.949219c0 5.441406 5.78125 8.160156 11.5625 8.160156zm0 0' />
                        <path d='m394.152344 124.769531h60.523437c5.609375 0 7.988281-5.949219 7.988281-11.390625 0-6.289062-2.890624-11.730468-7.988281-11.730468h-45.5625v-28.898438h25.5c5.609375 0 7.988281-5.441406 7.988281-10.03125 0-5.4375-2.890624-10.371094-7.988281-10.371094h-25.5v-28.726562h45.5625c5.097657 0 7.988281-5.441406 7.988281-11.730469 0-5.441406-2.378906-11.390625-7.988281-11.390625h-60.523437c-5.78125 0-11.558594 2.71875-11.558594 8.160156v107.949219c-.003906 5.441406 5.777344 8.160156 11.558594 8.160156zm0 0' />
                        <path d='m185.070312 435.9375c0-17.425781-14.070312-31.554688-31.425781-31.554688-17.359375 0-31.429687 14.128907-31.429687 31.554688 0 17.429688 14.070312 31.558594 31.429687 31.558594 17.355469 0 31.425781-14.128906 31.425781-31.558594zm0 0' />
                        <path d='m457.738281 435.9375c0-17.425781-14.070312-31.554688-31.429687-31.554688-17.355469 0-31.425782 14.128907-31.425782 31.554688 0 17.429688 14.070313 31.558594 31.425782 31.558594 17.359375 0 31.429687-14.128906 31.429687-31.558594zm0 0' />
                        <path d='m476.265625 290.386719-38.71875-15.847657-32.664063-72.960937c-4.945312-11.042969-15.945312-18.179687-28.023437-18.179687h-288.867187c-8.285157 0-15 6.71875-15 15v28.875h15c8.285156 0 15 6.71875 15 15 0 8.285156-6.714844 15-15 15h-15v30.003906h52c8.285156 0 15 6.714844 15 15 0 8.28125-6.714844 15-15 15h-52v30h15c8.285156 0 15 6.714844 15 15s-6.714844 15-15 15h-15v30.546875c0 8.285156 6.714843 15 15 15h5.640624c6.015626-27.660157 30.628907-48.441407 60.011719-48.441407 29.378907 0 53.992188 20.78125 60.011719 48.441407h152.640625c6.019531-27.660157 30.632813-48.441407 60.011719-48.441407 29.382812 0 53.996094 20.78125 60.011718 48.441407h10.679688c8.28125 0 15-6.714844 15-15v-64.109375c0-23.511719-14.027344-44.445313-35.734375-53.328125zm-143.902344.4375c-8.285156 0-15-6.714844-15-15v-65.996094h59.496094c.269531 0 35.761719 78.878906 35.761719 78.878906.332031.742188.734375 1.445313 1.179687 2.117188zm0 0' />
                        <path d='m46.992188 347.277344c-8.285157 0-15 6.714844-15 15s6.714843 15 15 15h26v-30zm0 0' />
                        <path d='m46.992188 287.277344c-8.285157 0-15 6.714844-15 15 0 8.28125 6.714843 15 15 15h26v-30zm0 0' />
                        <path d='m15 227.273438c-8.285156 0-15 6.71875-15 15 0 8.285156 6.714844 15 15 15h57.992188v-30zm0 0' />
                      </svg>
                    </ProductDetailDeliverStruck>
                    <ProductDetailDeliverStruckDescription>Miễn Phí Vận Chuyển</ProductDetailDeliverStruckDescription>
                  </ProductDetailDeliver>

                  <ProductDetailAmount>
                    <ProductDetailAmountTitle>Số Lượng</ProductDetailAmountTitle>
                    <ProductAmountMain>
                      <ProductAmountMainMinus onClick={() => decreaseQuantity()}>
                        <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 298.667 298.667'>
                          <g>
                            <g>
                              <rect y='128' width='298.667' height='42.667' />
                            </g>
                          </g>
                        </svg>
                      </ProductAmountMainMinus>
                      <ProductAmountMainInput value={quantity} readOnly />
                      <ProductAmountMainPlus onClick={() => increaseQuantity()}>
                        <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 341.4 341.4'>
                          <g>
                            <g>
                              <polygon
                                points='192,149.4 192,0 149.4,0 149.4,149.4 0,149.4 0,192 149.4,192 149.4,341.4 192,341.4 192,192 341.4,192 
                                                            341.4,149.4 '
                              />
                            </g>
                          </g>
                        </svg>
                      </ProductAmountMainPlus>
                    </ProductAmountMain>
                  </ProductDetailAmount>

                  <ProductDetailBtn>
                    <ProductDetailBtnCart>
                      <ProductDetailBtnCartMain>
                        <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 511.976 511.976'>
                          <g>
                            <g>
                              <path
                                d='M208,399.988c-26.464,0-48,21.536-48,48s21.536,48,48,48s48-21.536,48-48S234.464,399.988,208,399.988z M208,463.988
                                                                         c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16C224,456.82,216.832,463.988,208,463.988z'
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d='M400,399.988c-26.464,0-48,21.536-48,48s21.536,48,48,48s48-21.536,48-48S426.464,399.988,400,399.988z M400,463.988
                                                                         c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16C416,456.82,408.832,463.988,400,463.988z'
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d='M508.256,85.748c-3.008-3.648-7.52-5.76-12.256-5.76H119.936l-13.92-52.128c-1.856-7.008-8.192-11.872-15.456-11.872H16
                                                                         c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h62.272l82.272,308.128c1.856,7.008,8.192,11.872,15.456,11.872h256
                                                                         c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16H188.288l-9.376-35.136l285.792-12.864c7.456-0.352,13.696-5.792,15.008-13.12
                                                                         l32-176C512.576,94.196,511.296,89.396,508.256,85.748z M450.56,256.596l-280.128,12.608L128.48,111.988h348.352L450.56,256.596z'
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d='M336,175.988h-16v-16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v16h-16c-8.832,0-16,7.168-16,16
                                                                         c0,8.832,7.168,16,16,16h16v16c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-16h16c8.832,0,16-7.168,16-16
                                                                         C352,183.156,344.832,175.988,336,175.988z'
                              />
                            </g>
                          </g>
                        </svg>
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

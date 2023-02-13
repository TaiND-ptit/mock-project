import {
  AmountCart,
  AmountOfFrice,
  CartBill,
  CartBillLeft,
  CartBillLeftText,
  CartBillRight,
  UnitCart
} from 'pages/Cart/Cart.styled';
import {
  Wrapper,
  OrderDetailWrapper,
  ProductMain,
  ProductInfo,
  ProductName,
  // ProductWrapper,
  ProductQuantityContainer,
  ProductQuantity,
  ProductPriceText,
  ProductPrice,
  ProductQuantityText,
  ProductPriceContainer,
  TotalPrice,
  OrderStatus,
  OrderRight,
  OrderShipping,
  NameUserWrapper,
  NameUserText,
  NameUser,
  PhoneUserWrapper,
  PhoneUserText,
  PhoneUser,
  AddressUserText,
  AddressUserWrapper,
  AddressUser
} from './OrderDetail.styled';

const OrderDetail = () => {
  return (
    <Wrapper>
      <OrderDetailWrapper>
        <CartBill>
          <CartBillLeft>
            <CartBillLeftText>Sản phẩm</CartBillLeftText>
          </CartBillLeft>
          <CartBillRight>
            <UnitCart>Tổng tiền</UnitCart>
            <AmountCart>Trạng thái</AmountCart>
            <AmountOfFrice> Địa chỉ</AmountOfFrice>
          </CartBillRight>
        </CartBill>

        <ProductMain>
          <ProductInfo>
            <ProductName>"Áo thun tay nữ form rộng chất liệu vải mềm"</ProductName>

            <ProductQuantityContainer>
              <ProductQuantityText>Số lượng:</ProductQuantityText>
              <ProductQuantity>2</ProductQuantity>
            </ProductQuantityContainer>
            <ProductPriceContainer>
              <ProductPriceText>Giá:</ProductPriceText>
              <ProductPrice>3333333 đ</ProductPrice>
            </ProductPriceContainer>
          </ProductInfo>
          <OrderRight>
            <TotalPrice>4444444444</TotalPrice>
            <OrderStatus> Chưa Thanh Toán</OrderStatus>
            <OrderShipping>
              <NameUserWrapper>
                <NameUserText>Tên KH:</NameUserText>
                <NameUser>Dung</NameUser>
              </NameUserWrapper>
              <PhoneUserWrapper>
                <PhoneUserText>SĐT:</PhoneUserText>
                <PhoneUser>Dũng</PhoneUser>
              </PhoneUserWrapper>
              <AddressUserWrapper>
                <AddressUserText>Địa chỉ:</AddressUserText>
                <AddressUser>Dũng</AddressUser>
              </AddressUserWrapper>
            </OrderShipping>
          </OrderRight>
        </ProductMain>

        {/* <CartProductMain>
                      <CartProductMainImg>
                        <CartProductMainImgProduct
                          src={`http://dung.fresher.ameladev.click/storage/uploads/${cart.images[0].image}`}
                          alt='image product'
                        />
                        <CartProductMainImgContent>
                          <CartProductMainImgContentText>{cart.name}</CartProductMainImgContentText>
                          <CartProductFreeShipExtraImg src={images.freeExtra.freeExtra} alt='free-ship xtra' />
                        </CartProductMainImgContent>
                      </CartProductMainImg>
                      <CartProductMainClassify></CartProductMainClassify>
                      <CartProductMainPrice>{cart.discountedPrice}đ</CartProductMainPrice>
                      <CartProductMainInputAmount>
                        <ProductAmountMain>
                          <ProductAmountMainMinus
                            onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: 'DEC' }))}
                          >
                            <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 298.667 298.667'>
                              <g>
                                <g>
                                  <rect y='128' width='298.667' height='42.667' />
                                </g>
                              </g>
                            </svg>
                          </ProductAmountMainMinus>
                          <ProductAmountMainInput value={cart?.quantity} readOnly />
                          <ProductAmountMainPlus onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: 'INC' }))}>
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
                      </CartProductMainInputAmount>
                      <CartProductMainPriceMain>{cart.totalPrice}đ</CartProductMainPriceMain>
                      <CartProductMainRemove>
                        <CartProductMainRemoveText onClick={() => dispatch(removeFromCart(cart?.id))}>
                          Xóa
                        </CartProductMainRemoveText>
                      </CartProductMainRemove>
                    </CartProductMain>
                */}
      </OrderDetailWrapper>
    </Wrapper>
  );
};

export default OrderDetail;

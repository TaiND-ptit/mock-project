import { NavbarMenuLeftLogo } from 'components/commons/HeaderLoginRegister/HeaderLoginRegister.styled';
import {
  Wrapper,
  HeaderWrapper,
  NavMenuContent,
  NavMenuLeft,
  NavMenuLeftCart,
  NavMenuLeftCartText,
  CartContainer,
  CartGrid,
  CartContainerMain,
  CartVoucher,
  CartVoucherIcon,
  CartVoucherContent,
  CartVoucherContentText,
  CartBill,
  CartBillLeft,
  CartBillLeftText,
  CartBillRight,
  UnitCart,
  AmountCart,
  AmountOfFrice,
  OperationCart,
  CartListProduct,
  CartProductMain,
  CartProductMainImg,
  CartProductMainImgProduct,
  CartProductMainImgContent,
  CartProductMainImgContentText,
  CartProductFreeShipExtraImg,
  CartProductMainPrice,
  CartProductMainPriceMain,
  CartProductMainInputAmount,
  CartProductMainClassify,
  CartProductMainRemove,
  CartProductMainRemoveText,
  CartProductPay,
  CartProductPayTotal,
  CartProductPayTotalLeft,
  CartProductPayTotalLeftRemove,
  CartProductPayTotalRight,
  CartProductPayTotalRightAll,
  CartProductPayTotalRightPrice,
  BuyBtn,
  NoProductContainer,
  NoProductTitle,
  ProductAmountMain,
  ProductAmountMainMinus,
  ProductAmountMainInput,
  ProductAmountMainPlus
} from './Cart.styled';
import images from 'assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getAllCarts, removeFromCart, toggleCartQty } from 'store/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from 'store/store';
import { Modal } from 'antd';
import { useState } from 'react';
import { getToken } from 'store/authSlice';
import ShopeeLogo from 'components/commons/SVG/ShopeeLogo';
import Voucher from 'components/commons/SVG/Voucher';
import Minus from 'components/commons/SVG/Minus';
import Plus from 'components/commons/SVG/Plus';
const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector(getAllCarts);
  const token = useSelector(getToken);
  const { itemsCount, totalAmount } = useSelector((state: RootState) => state.cart);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (token) {
      navigate('/address');
      setIsModalOpen(false);
    } else {
      navigate('/login');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <NavMenuContent>
          <NavMenuLeft>
            <NavbarMenuLeftLogo>
              <ShopeeLogo />
            </NavbarMenuLeftLogo>

            <NavMenuLeftCart>
              <NavMenuLeftCartText>Giỏ Hàng</NavMenuLeftCartText>
            </NavMenuLeftCart>
          </NavMenuLeft>
        </NavMenuContent>
      </HeaderWrapper>

      {carts.length === 0 ? (
        <CartContainer>
          <NoProductContainer>
            <NoProductTitle>Your shopping cart is empty.</NoProductTitle>
            <Link to='/'>Go shopping Now</Link>
          </NoProductContainer>
        </CartContainer>
      ) : (
        <CartContainer>
          <CartGrid>
            <CartContainerMain>
              <CartVoucher>
                <CartVoucherIcon>
                  <Voucher />
                </CartVoucherIcon>
                <CartVoucherContent>
                  <CartVoucherContentText>
                    Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
                  </CartVoucherContentText>
                </CartVoucherContent>
              </CartVoucher>

              <CartBill>
                <CartBillLeft>
                  <CartBillLeftText>Sản phẩm</CartBillLeftText>
                </CartBillLeft>
                <CartBillRight>
                  <UnitCart>Đơn giá</UnitCart>
                  <AmountCart>Số lượng</AmountCart>
                  <AmountOfFrice>Số tiền</AmountOfFrice>
                  <OperationCart>Thao tác</OperationCart>
                </CartBillRight>
              </CartBill>

              <CartListProduct>
                {carts.map((cart: any) => {
                  return (
                    <CartProductMain>
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
                            <Minus />
                          </ProductAmountMainMinus>
                          <ProductAmountMainInput value={cart?.quantity} readOnly />
                          <ProductAmountMainPlus onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: 'INC' }))}>
                            <Plus />
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
                  );
                })}
              </CartListProduct>

              <CartProductPay>
                <CartProductPayTotal>
                  <CartProductPayTotalLeft>
                    <CartProductPayTotalLeftRemove onClick={() => dispatch(clearCart())}>
                      Xóa
                    </CartProductPayTotalLeftRemove>
                  </CartProductPayTotalLeft>
                  <CartProductPayTotalRight>
                    <CartProductPayTotalRightAll>
                      Tổng thanh toán <span>({itemsCount} Sản Phẩm):</span>
                    </CartProductPayTotalRightAll>
                    <CartProductPayTotalRightPrice>{totalAmount}</CartProductPayTotalRightPrice>
                    <BuyBtn onClick={showModal}>Mua Hàng</BuyBtn>
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <p>Bạn muốn mua hàng?</p>
                    </Modal>
                  </CartProductPayTotalRight>
                </CartProductPayTotal>
              </CartProductPay>
            </CartContainerMain>
          </CartGrid>
        </CartContainer>
      )}
    </Wrapper>
  );
};

export default Cart;

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
              <NavMenuLeftCartText>Gi??? H??ng</NavMenuLeftCartText>
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
                    Nh???n v??o m???c M?? gi???m gi?? ??? cu???i trang ????? h?????ng mi???n ph?? v???n chuy???n b???n nh??!
                  </CartVoucherContentText>
                </CartVoucherContent>
              </CartVoucher>

              <CartBill>
                <CartBillLeft>
                  <CartBillLeftText>S???n ph???m</CartBillLeftText>
                </CartBillLeft>
                <CartBillRight>
                  <UnitCart>????n gi??</UnitCart>
                  <AmountCart>S??? l?????ng</AmountCart>
                  <AmountOfFrice>S??? ti???n</AmountOfFrice>
                  <OperationCart>Thao t??c</OperationCart>
                </CartBillRight>
              </CartBill>

              <CartListProduct>
                {carts.map((cart: any) => {
                  return (
                    <CartProductMain key={cart.id}>
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
                      <CartProductMainPrice>{cart.discountedPrice}??</CartProductMainPrice>
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
                      <CartProductMainPriceMain>{cart.totalPrice}??</CartProductMainPriceMain>
                      <CartProductMainRemove>
                        <CartProductMainRemoveText onClick={() => dispatch(removeFromCart(cart?.id))}>
                          X??a
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
                      X??a
                    </CartProductPayTotalLeftRemove>
                  </CartProductPayTotalLeft>
                  <CartProductPayTotalRight>
                    <CartProductPayTotalRightAll>
                      T???ng thanh to??n <span>({itemsCount} S???n Ph???m):</span>
                    </CartProductPayTotalRightAll>
                    <CartProductPayTotalRightPrice>{totalAmount}</CartProductPayTotalRightPrice>
                    <BuyBtn onClick={showModal}>Mua H??ng</BuyBtn>
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <p>B???n mu???n mua h??ng?</p>
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

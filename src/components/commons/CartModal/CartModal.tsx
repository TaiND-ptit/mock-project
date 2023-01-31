import images from 'assets/images';
import {
  CartContainer,
  CartModalTitle,
  CartModalList,
  CartModalItem,
  CartModalItemImgCnt,
  CartModalItemImg,
  CartModalItemTitle,
  CartModalItemPrice,
  ViewCartBtn,
  CartModalEmpty,
  CartModalEmptyImg,
  CartModalEmptyText
} from './CartModal.styled';

const CartModal = () => {
  return (
    <CartContainer>
      <CartModalTitle>Recenlty Added Products</CartModalTitle>
      {/* <CartModalList>
                <CartModalItem>
                    <CartModalItemImgCnt>
                        <CartModalItemImg src={images.sp.sp1} alt='' />
                    </CartModalItemImgCnt>
                    <CartModalItemTitle>
                        bảo vệ đôi chân của bạn trên mọi chặng đường
                    </CartModalItemTitle>
                    <CartModalItemPrice>
                        1.000.000d
                    </CartModalItemPrice>
                </CartModalItem>

                <ViewCartBtn>
                    view my shopping cart
                </ViewCartBtn>
            </CartModalList> */}

      <CartModalEmpty>
        <CartModalEmptyImg src={images.cartEmpty.CartEmpty} alt='' />
        <CartModalEmptyText>Chưa có sản phẩm</CartModalEmptyText>
      </CartModalEmpty>
    </CartContainer>
  );
};

export default CartModal;

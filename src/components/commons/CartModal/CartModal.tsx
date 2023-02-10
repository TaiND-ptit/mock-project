import images from 'assets/images';
import {
  CartContainer,
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
import { Link } from 'react-router-dom';
interface Props {
  carts: any;
}
const CartModal: React.FC<Props> = (props) => {
  const { carts } = props;
  const cartLength = carts.length;
  return (
    <CartContainer>
      {cartLength > 0 ? (
        <CartModalList>
          {carts.map((cart: any) => {
            return (
              <CartModalItem key={cart.id}>
                <CartModalItemImgCnt>
                  <CartModalItemImg
                    src={`http://dung.fresher.ameladev.click/storage/uploads/${cart.images[0].image}`}
                    alt=''
                  />
                </CartModalItemImgCnt>
                <CartModalItemTitle>{cart.name}</CartModalItemTitle>
                <CartModalItemPrice>{cart.discountedPrice}đ</CartModalItemPrice>
              </CartModalItem>
            );
          })}

          <ViewCartBtn>
            <Link to='/cart'>Xem giỏ hàng</Link>
          </ViewCartBtn>
        </CartModalList>
      ) : (
        <CartModalEmpty>
          <CartModalEmptyImg src={images.cartEmpty.CartEmpty} alt='' />
          <CartModalEmptyText>Chưa có sản phẩm</CartModalEmptyText>
        </CartModalEmpty>
      )}
    </CartContainer>
  );
};

export default CartModal;

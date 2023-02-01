import images from 'assets/images';
import {
  ProductsContainer,
  ProductList,
  ProductItem,
  ProductImg,
  ProductContent,
  ProductsImgName,
  ProductsNameContent,
  ProductsPrice,
  ProductsPriceMain,
  ProductsPriceFirst,
  ProductsPriceNew,
  ProductsPriceAmount,
  ProductsFavorite,
  ProductsFavoriteIcon,
  ProductsFavoriteText
} from './Product.styled';
import ProductsSale from '../ProductsSale/ProductsSale';
import { Link } from 'react-router-dom';

const Product = () => {
  let rightSize: string = 'rightSize';
  return (
    <ProductsContainer>
      <Link to='/product/'>
        <ProductList>
          <ProductItem>
            <ProductImg src={images.productExtra.productExtra6}></ProductImg>
            <ProductContent>
              <ProductsImgName>
                <ProductsNameContent>
                  Túi xách nữ công sở đeo chéo kẹp nách đeo vai tote da thời trang cao cấp giá rẻ 88STORE- TX024
                </ProductsNameContent>
              </ProductsImgName>

              <ProductsPrice>
                <ProductsPriceMain>
                  <ProductsPriceFirst>₫</ProductsPriceFirst>
                  <ProductsPriceNew>260.000</ProductsPriceNew>
                </ProductsPriceMain>

                <ProductsPriceAmount>Đã bán 1k</ProductsPriceAmount>
              </ProductsPrice>
            </ProductContent>
            <ProductsFavorite>
              <ProductsFavoriteIcon className='fas fa-check'></ProductsFavoriteIcon>
              <ProductsFavoriteText>Yêu thích</ProductsFavoriteText>
            </ProductsFavorite>
            <ProductsSale rightSize={rightSize} />
          </ProductItem>
        </ProductList>
      </Link>
    </ProductsContainer>
  );
};

export default Product;

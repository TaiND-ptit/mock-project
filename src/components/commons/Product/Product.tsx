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

interface Props {
  productId: number,
  productName: string,
  productDescription: string,
  productImg: string,
  productPrice: number
}

const Product: React.FC<Props> = (props) => {
  const { productId, productImg, productPrice, productName, productDescription } = props;
  let rightSize: string = 'rightSize';
  return (
  
    <ProductsContainer>
      <Link to={`/product/${productId}`}>
        <ProductList>
          <ProductItem>
       
            <ProductImg src={`http://dung.fresher.ameladev.click/storage/uploads/${productImg}`}></ProductImg>
            <ProductContent>
              <ProductsImgName>
                <ProductsNameContent>
                  {productName}
                </ProductsNameContent>
              </ProductsImgName>

              <ProductsPrice>
                <ProductsPriceMain>
                  <ProductsPriceFirst>₫</ProductsPriceFirst>
                  <ProductsPriceNew>{productPrice}</ProductsPriceNew>
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

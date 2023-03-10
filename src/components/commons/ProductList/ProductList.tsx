import { useQueryString } from 'utils/utils';
import Product from '../Product/Product';
import {
  Wrapper,
  ProductListSort,
  SortLeft,
  SortRight,
  SortLabel,
  SortLabelBorder,
  SortRightImg,
  ProductListContainer,
  ProductLoading
} from './ProductList.styled';

import { Spin } from 'antd';
interface Props {
  productLoading: boolean;
  productData: any;
}

const ProductList: React.FC<Props> = (props) => {
  const { productLoading, productData } = props;

  return (
    <Wrapper>
      <ProductListSort>
        <SortLeft>
          <SortLabel>Danh sách sản phẩm</SortLabel>
          <SortLabelBorder></SortLabelBorder>
        </SortLeft>
        <SortRight>
          <SortRightImg src='https://cf.shopee.vn/file/dd3e3446b4e1e978507bf3ec776752ec'></SortRightImg>
        </SortRight>
      </ProductListSort>
      <ProductListContainer>
        {productLoading && (
          <ProductLoading>
            <Spin size='large' />
          </ProductLoading>
        )}
        {!productLoading && (
          <>
            {productData?.map((product: any) => (
              <Product
                key={product.id}
                productId={product.id}
                productDiscount={product.discount}
                productImg={product?.images[0].image}
                productPrice={product.price}
                productName={product.name}
                productDescription={product.description}
              />
            ))}
          </>
        )}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;

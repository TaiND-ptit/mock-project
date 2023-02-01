import Product from '../Product/Product';
import {
  Wrapper,
  ProductListSort,
  SortLeft,
  SortRight,
  SortLabel,
  SortLabelBorder,
  SortRightImg,
  ProductListContainer
} from './ProductList.styled';

const ProductList = () => {
  return (
    <Wrapper>
      <ProductListSort>
        <SortLeft>
          <SortLabel>Gợi ý hôm nay</SortLabel>
          <SortLabelBorder></SortLabelBorder>
        </SortLeft>
        <SortRight>
          <SortRightImg src='https://cf.shopee.vn/file/dd3e3446b4e1e978507bf3ec776752ec'></SortRightImg>
        </SortRight>
      </ProductListSort>
      <ProductListContainer>
        {Array(50)
          .fill(0)
          .map((v, i) => (
            <Product />
          ))}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;

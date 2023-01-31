import Product from '../Product/Product';
import { 
    Wrapper,
    ProductListSort,
    SortLeft,
    SortRight,
    SortLabel

} from './ProductList.styled';

const ProductList = () => {
  return (
  <Wrapper>
     <ProductListSort>
        <SortLeft>
            <SortLabel>Gợi ý hôm nay</SortLabel>
            <SortLabelBorder>
            </SortLabelBorder>
        </SortLeft>
        <SortRight>

        </SortRight>
     </ProductListSort>
     <Product/>
  </Wrapper>
  );
};

export default ProductList;

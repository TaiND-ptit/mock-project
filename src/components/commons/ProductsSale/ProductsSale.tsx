import React from 'react';
import { ProductsSaleContainer, ProductsSaleValue, ProductsSaleContent } from './ProductsSale.styled';
interface Props {
  productDiscount?: number;
}
const ProductsSale: React.FC<Props> = (props) => {
  const { productDiscount } = props;
  return (
    <ProductsSaleContainer className='rightSize'>
      <ProductsSaleValue>{productDiscount}%</ProductsSaleValue>
      <ProductsSaleContent>GIẢM</ProductsSaleContent>
    </ProductsSaleContainer>
  );
};

export default ProductsSale;

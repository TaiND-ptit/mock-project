import React from 'react';
import { ProductsSaleContainer, ProductsSaleValue, ProductsSaleContent } from './ProductsSale.styled';
interface Props {
  rightSize?: string;
}
const ProductsSale: React.FC<Props> = (props) => {
  const { rightSize} = props;
  return (
    <ProductsSaleContainer className='rightSize'>
      <ProductsSaleValue>50%</ProductsSaleValue>
      <ProductsSaleContent>GIẢM</ProductsSaleContent>
    </ProductsSaleContainer>
  );
}

export default ProductsSale;

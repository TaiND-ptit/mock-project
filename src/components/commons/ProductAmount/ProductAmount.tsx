import {
  ProductAmountMain,
  ProductAmountMainMinus,
  ProductAmountMainInput,
  ProductAmountMainPlus
} from './ProductAmount.styled';

const ProductAmount = () => {
  return (
    <ProductAmountMain>
      <ProductAmountMainMinus>
        <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 298.667 298.667'>
          <g>
            <g>
              <rect y='128' width='298.667' height='42.667' />
            </g>
          </g>
        </svg>
      </ProductAmountMainMinus>
      <ProductAmountMainInput value='1' readOnly />
      <ProductAmountMainPlus>
        <svg version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 341.4 341.4'>
          <g>
            <g>
              <polygon
                points='192,149.4 192,0 149.4,0 149.4,149.4 0,149.4 0,192 149.4,192 149.4,341.4 192,341.4 192,192 341.4,192 
                                                            341.4,149.4 '
              />
            </g>
          </g>
        </svg>
      </ProductAmountMainPlus>
    </ProductAmountMain>
  );
};

export default ProductAmount;

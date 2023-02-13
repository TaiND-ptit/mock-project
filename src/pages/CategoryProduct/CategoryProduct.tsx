import { useQuery } from '@tanstack/react-query';
import {
  Wrapper,
  CategoryProductHeader,
  CategoryProductTitle,
  CategoryProductLabel,
  CategoryProductBorder,
  CategoryProductContainer
} from './CategoryProduct.styled';
import { useParams } from 'react-router-dom';
import { getCategoryProduct } from 'api/category-product.api';
import Loading from 'components/commons/Loading/Loading';
import Product from 'components/commons/Product/Product';
import { useEffect, useState } from 'react';
const CategoryProduct = () => {
  const { id } = useParams();
  const [categoryProductList, setCategoryProductList] = useState([]);

  useEffect(() => {
    getCategoryProduct(String(id)).then((response) => {
      setCategoryProductList(response?.data?.data.data);
    });
  }, [id]);

  return (
    <Wrapper>
      {/* <CategoryProductHeader>
        <CategoryProductTitle>
          <CategoryProductLabel>Ao</CategoryProductLabel>
          <CategoryProductBorder></CategoryProductBorder>
        </CategoryProductTitle>
      </CategoryProductHeader> */}
      <CategoryProductContainer>
        {categoryProductList.length === 0 ? (
          <Loading />
        ) : (
          <>
            {categoryProductList.map((product: any) => (
              <Product
                key={product.id}
                productDiscount={product.discount}
                productId={product.id}
                productImg={product?.images[0].image}
                productPrice={product.price}
                productName={product.name}
                productDescription={product.description}
              />
            ))}
          </>
        )}
      </CategoryProductContainer>
    </Wrapper>
  );
};

export default CategoryProduct;

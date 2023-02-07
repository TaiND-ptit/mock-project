import { useQuery } from '@tanstack/react-query';
import {
  Wrapper,
  ProductSearchHeader,
  ProductSearchTitle,
  ProductSearchLabel,
  ProductSearchList,
  SearchLabelBorder,
  NoSearchProduct,
  NoSearchProductText
} from './SearchPage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchProducts } from 'api/search.api';
import { Spin } from 'antd';
import Product from 'components/commons/Product/Product';
import { ProductLoading } from 'components/commons/ProductList/ProductList.styled';
import { clearConfigCache } from 'prettier';
import axios from 'axios';
import http from 'utils/http';

const SearchPage = () => {
  const { searchText } = useParams();
  const [searchProducts, setSearchProducts] = useState([]);
  // console.log(searchText);

  useEffect(() => {
    fetchApi();
  }, [searchText]);

  const fetchApi = async () => {
    const response = await http.get(`search?search=${searchText}`);
    // console.log(response);
    // console.log('res', response.data.data.username);
    setSearchProducts(response.data.data.data.data);
  };
  console.log(searchProducts);

  //  searchProducts = searchProductsQuery.data?.data.data.data;
  // console.log(searchProductsQuery.data?.data.data.data);
  // console.log(searchProducts);

  return (
    <Wrapper>
      <ProductSearchHeader>
        <ProductSearchTitle>
          <ProductSearchLabel>Kết quả tìm kiếm</ProductSearchLabel>
          <SearchLabelBorder></SearchLabelBorder>
        </ProductSearchTitle>
      </ProductSearchHeader>
      <ProductSearchList>
        {searchProducts.length === 0 ? (
          <NoSearchProduct>
            <NoSearchProductText>Không tìm thấy sản phẩm</NoSearchProductText>
          </NoSearchProduct>
        ) : (
          // <>
          //   {searchProductsQuery.isLoading && (
          //     <ProductLoading>
          //       <Spin size='large' />
          //     </ProductLoading>
          //   )}

          <>
            {searchProducts.map((product: any) => (
              <Product
                key={product.id}
                productId={product.id}
                productImg={product?.images[0].image}
                productPrice={product.price}
                productName={product.name}
                productDescription={product.description}
              />
            ))}
          </>
        )}
      </ProductSearchList>
    </Wrapper>
  );
};

export default SearchPage;

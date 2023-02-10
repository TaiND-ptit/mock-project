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
import Product from 'components/commons/Product/Product';
import { ProductLoading } from 'components/commons/ProductList/ProductList.styled';
import { clearConfigCache } from 'prettier';
import axios from 'axios';
import http from 'utils/http';

const SearchPage = () => {
  const { searchText } = useParams();
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, [searchText]);

  const fetchApi = async () => {
    setSearchProducts([]);
    const response = await http.get(`search?search=${searchText}`);
    setSearchProducts(response.data.data.data);
  };

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
          <>
            {searchProducts.map((product: any) => (
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
      </ProductSearchList>
    </Wrapper>
  );
};

export default SearchPage;

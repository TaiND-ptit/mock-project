import Slider from 'components/commons/Slider/Slider';
import { Wrapper, SliderWrapper } from './HomePage.styled';
import Category from 'components/commons/Category/Category';
import BannerMiddle from 'components/commons/BannerMiddle/BannerMiddle';
import CategoryFreeship from 'components/commons/CategoryFreeship/CategoryFreeship';
import ProductList from 'components/commons/ProductList/ProductList';
import PaginationProduct from 'components/commons/Pagination/PaginationProduct';
import { useQuery } from '@tanstack/react-query';
import { getListProducts } from 'api/productList.api';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function HomePage() {
  let pageNumber = useSelector((state: RootState) => state.pagination.pageNumber);

  const page = Number(pageNumber);

  const productsQuery = useQuery({
    queryKey: ['products', page],
    queryFn: () => getListProducts(page),
    keepPreviousData: true
  });

  return (
    <Wrapper>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
      <Category />
      <BannerMiddle />
      <CategoryFreeship />
      <ProductList productLoading={productsQuery.isLoading} productData={productsQuery?.data?.data?.data?.data} />
      <PaginationProduct />
    </Wrapper>
  );
}

export default HomePage;

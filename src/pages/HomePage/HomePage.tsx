import Slider from 'components/commons/Slider/Slider';
import { Wrapper, SliderWrapper } from './HomePage.styled';
import Category from 'components/commons/Category/Category';
import BannerMiddle from 'components/commons/BannerMiddle/BannerMiddle';
import CategoryFreeship from 'components/commons/CategoryFreeship/CategoryFreeship';
import ProductList from 'components/commons/ProductList/ProductList';
import PaginationProduct from 'components/commons/Pagination/PaginationProduct';
import { useQueryString } from 'utils/utils';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/product.api';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
const LIMIT = 5;

function HomePage() {
  // let pageNumber = useSelector((state: RootState) => state.pagination.pageNumber);
  // console.log(pageNumber);

  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;
  console.log(page);

  // const [_page] = useState(1);

  const productsQuery = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    keepPreviousData: true
  });

  const totalProductsCount = Number(productsQuery?.data?.data?.data?.total || 0);
  const totalPage = Math.ceil(totalProductsCount / LIMIT);
  return (
    <Wrapper>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
      <Category />
      <BannerMiddle />
      <CategoryFreeship />
      <ProductList 
      productLoading={productsQuery.isLoading}
      productData = {productsQuery?.data?.data?.data?.data}
      />
      <PaginationProduct/>
    </Wrapper>
  );
}

export default HomePage;

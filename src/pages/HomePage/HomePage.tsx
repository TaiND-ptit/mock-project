import Slider from 'components/commons/Slider/Slider';
import { Wrapper, SliderWrapper } from './HomePage.styled';
import Category from 'components/commons/Category/Category';
import BannerMiddle from 'components/commons/BannerMiddle/BannerMiddle';
import CategoryFreeship from 'components/commons/CategoryFreeship/CategoryFreeship';
import ProductList from 'components/commons/ProductList/ProductList';
import PaginationProduct from 'components/commons/Pagination/PaginationProduct';

function HomePage() {
  return (
    <Wrapper>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
      <Category />
      <BannerMiddle />
      <CategoryFreeship />
      <ProductList />
      <PaginationProduct />
    </Wrapper>
  );
}

export default HomePage;

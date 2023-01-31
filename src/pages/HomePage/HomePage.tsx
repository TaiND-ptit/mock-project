import Slider from 'components/commons/Slider/Slider';
import { Wrapper, SliderWrapper } from './HomePage.styled';
import Category from 'components/commons/Category/Category';
import BannerMiddle from 'components/commons/BannerMiddle/BannerMiddle';
import CategoryFreeship from 'components/commons/CategoryFreeship/CategoryFreeship';
import Product from 'components/commons/Product/Product';
import ProductList from 'components/commons/ProductList/ProductList';

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
    </Wrapper>
  );
}

export default HomePage;

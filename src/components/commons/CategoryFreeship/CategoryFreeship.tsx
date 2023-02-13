import images from 'assets/images';
import {
  Wrapper,
  CategoryFreeshipContainer,
  BannerCategoryXtra,
  BannerCategoryXtraImg,
  CategoryXtraContent,
  CategoryXtraHeading,
  CategoryXtraHeadingText,
  CategoryXtraHeadingLink,
  CategoryXtraHeadingIcon,
  CategoryXtraList,
  CategoryXtraSale,
  CategoryXtraLink,
  CategoryXtraProduct,
  CategoryXtraProductImg,
  CategoryXtraProductPrice,
  CategoryXtraProductPriceText
} from './CategoryFreeship.styled';
import ProductsSale from '../ProductsSale/ProductsSale';
import { Link } from 'react-router-dom';
const data = [
  { id: 1, image: images.productExtra.productExtra1, price: 375000, discount: 20 },
  { id: 2, image: images.productExtra.productExtra2, price: 134000, discount: 10 },
  { id: 3, image: images.productExtra.productExtra3, price: 423000, discount: 5 },
  { id: 4, image: images.productExtra.productExtra4, price: 532000, discount: 15 },
  { id: 5, image: images.productExtra.productExtra5, price: 642000, discount: 30 },
  { id: 6, image: images.productExtra.productExtra6, price: 123000, discount: 27 },
  { id: 7, image: images.productExtra.productExtra7, price: 837000, discount: 38 },
  { id: 8, image: images.productExtra.productExtra8, price: 833000, discount: 40 },
  { id: 9, image: images.productExtra.productExtra9, price: 323000, discount: 10 },
  { id: 10, image: images.productExtra.productExtra10, price: 242000, discount: 20 },
  { id: 11, image: images.productExtra.productExtra11, price: 632000, discount: 20 },
  { id: 12, image: images.productExtra.productExtra12, price: 400000, discount: 25 },
  { id: 13, image: images.productExtra.productExtra13, price: 200000, discount: 19 },
  { id: 14, image: images.productExtra.productExtra14, price: 300000, discount: 82 },
  { id: 15, image: images.productExtra.productExtra15, price: 250000, discount: 12 },
  { id: 16, image: images.productExtra.productExtra16, price: 270500, discount: 23 },
  { id: 17, image: images.productExtra.productExtra17, price: 390000, discount: 27 },
  { id: 18, image: images.productExtra.productExtra18, price: 199000, discount: 39 }
];

const CategoryFreeship = () => {
  const dataCategoryFreeShip = data.slice(0, 6);

  return (
    <Wrapper>
      <CategoryFreeshipContainer>
        <BannerCategoryXtra>
          <BannerCategoryXtraImg src={images.bannerExtra.bannerExtra} alt='Banner-Xtra' />
          <CategoryXtraContent>
            <CategoryXtraHeading>
              <CategoryXtraHeadingText>Sản phẩm bán chạy</CategoryXtraHeadingText>
              <CategoryXtraHeadingLink>
                <Link to=''>Xem thêm</Link>
                <CategoryXtraHeadingIcon className='fas fa-chevron-right'></CategoryXtraHeadingIcon>
              </CategoryXtraHeadingLink>
            </CategoryXtraHeading>
            <CategoryXtraList>
              {dataCategoryFreeShip.map((product) => (
                <CategoryXtraSale key={product.id}>
                  <CategoryXtraLink>
                    <Link to=''>
                      <CategoryXtraProduct>
                        <CategoryXtraProductImg src={product.image} alt='product-sale'></CategoryXtraProductImg>
                        <CategoryXtraProductPrice>
                          <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                          {product.price}
                        </CategoryXtraProductPrice>
                      </CategoryXtraProduct>
                    </Link>
                  </CategoryXtraLink>
                  <ProductsSale productDiscount={product.discount} />
                </CategoryXtraSale>
              ))}
            </CategoryXtraList>
          </CategoryXtraContent>
        </BannerCategoryXtra>
      </CategoryFreeshipContainer>
    </Wrapper>
  );
};

export default CategoryFreeship;

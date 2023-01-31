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

const CategoryFreeship = () => {
  return (
    <Wrapper>
      <CategoryFreeshipContainer>
        <BannerCategoryXtra>
          <BannerCategoryXtraImg src={images.bannerExtra.bannerExtra} alt='Banner-Xtra' />
          <CategoryXtraContent>
            <CategoryXtraHeading>
              <CategoryXtraHeadingText>Sản phẩm bán chạy</CategoryXtraHeadingText>
              <CategoryXtraHeadingLink>
                Xem thêm
                <CategoryXtraHeadingIcon className='fas fa-chevron-right'></CategoryXtraHeadingIcon>
              </CategoryXtraHeadingLink>
            </CategoryXtraHeading>

            <CategoryXtraList>
              <CategoryXtraSale>
                <CategoryXtraLink>
                  <CategoryXtraProduct>
                    <CategoryXtraProductImg
                      src={images.productExtra.productExtra1}
                      alt='product-sale'
                    ></CategoryXtraProductImg>
                    <CategoryXtraProductPrice>
                      <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                      375.000
                    </CategoryXtraProductPrice>
                  </CategoryXtraProduct>
                </CategoryXtraLink>
                <ProductsSale />
              </CategoryXtraSale>
              <CategoryXtraSale>
                <CategoryXtraLink>
                  <CategoryXtraProduct>
                    <CategoryXtraProductImg
                      src={images.productExtra.productExtra2}
                      alt='product-sale'
                    ></CategoryXtraProductImg>
                    <CategoryXtraProductPrice>
                      <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                      375.000
                    </CategoryXtraProductPrice>
                  </CategoryXtraProduct>
                </CategoryXtraLink>
                <ProductsSale />
              </CategoryXtraSale>
              <CategoryXtraSale>
                <CategoryXtraLink>
                  <CategoryXtraProduct>
                    <CategoryXtraProductImg
                      src={images.productExtra.productExtra3}
                      alt='product-sale'
                    ></CategoryXtraProductImg>
                    <CategoryXtraProductPrice>
                      <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                      375.000
                    </CategoryXtraProductPrice>
                  </CategoryXtraProduct>
                </CategoryXtraLink>
                <ProductsSale />
              </CategoryXtraSale>
              <CategoryXtraSale>
                <CategoryXtraLink>
                  <CategoryXtraProduct>
                    <CategoryXtraProductImg
                      src={images.productExtra.productExtra4}
                      alt='product-sale'
                    ></CategoryXtraProductImg>
                    <CategoryXtraProductPrice>
                      <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                      375.000
                    </CategoryXtraProductPrice>
                  </CategoryXtraProduct>
                </CategoryXtraLink>
                <ProductsSale />
              </CategoryXtraSale>
              <CategoryXtraSale>
                <CategoryXtraLink>
                  <CategoryXtraProduct>
                    <CategoryXtraProductImg
                      src={images.productExtra.productExtra5}
                      alt='product-sale'
                    ></CategoryXtraProductImg>
                    <CategoryXtraProductPrice>
                      <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                      375.000
                    </CategoryXtraProductPrice>
                  </CategoryXtraProduct>
                </CategoryXtraLink>
                <ProductsSale />
              </CategoryXtraSale>
              <CategoryXtraSale>
                <CategoryXtraLink>
                  <CategoryXtraProduct>
                    <CategoryXtraProductImg
                      src={images.productExtra.productExtra6}
                      alt='product-sale'
                    ></CategoryXtraProductImg>
                    <CategoryXtraProductPrice>
                      <CategoryXtraProductPriceText>đ</CategoryXtraProductPriceText>
                      375.000
                    </CategoryXtraProductPrice>
                  </CategoryXtraProduct>
                </CategoryXtraLink>
                <ProductsSale />
              </CategoryXtraSale>
            </CategoryXtraList>
          </CategoryXtraContent>
        </BannerCategoryXtra>
      </CategoryFreeshipContainer>
    </Wrapper>
  );
};

export default CategoryFreeship;
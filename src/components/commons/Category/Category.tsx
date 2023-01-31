import images from 'assets/images';
import {
  Wrapper,
  CategoryContainer,
  CategoryBox,
  CategoryBoxList,
  CategoryBoxItem,
  CategoryBoxLink,
  CategoryBoxImg,
  CategoryBoxText
} from './Category.styled';

const Category = () => {
  return (
    <Wrapper>
      <CategoryContainer>
        <CategoryBox>
          <CategoryBoxList>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category1} alt='image-category' />
                <CategoryBoxText>Tech Zone - Siêu Thị Điện Tử </CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category2} alt='image-category' />
                <CategoryBoxText>Gì Cũng Rẻ - Từ 1K </CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category3} alt='image-category' />
                <CategoryBoxText>Hoàn Xu 20% - Đơn Từ 0Đ</CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category4} alt='image-category' />
                <CategoryBoxText>Nạp Thẻ, Hóa Đơn & E-voucher</CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category5} alt='image-category' />
                <CategoryBoxText>Shopee Số Gì Đây </CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category6} alt='image-category' />
                <CategoryBoxText>Freeship Xtra 70k Mỗi Ngày </CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category7} alt='image-category' />
                <CategoryBoxText>Hàng Hiệu -50%</CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category8} alt='image-category' />
                <CategoryBoxText>Hàng Quốc Tế - Deal Đồng Giá </CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category9} alt='image-category' />
                <CategoryBoxText>Shopee Premium</CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
            <CategoryBoxItem>
              <CategoryBoxLink>
                <CategoryBoxImg src={images.category.category10} alt='image-category' />
                <CategoryBoxText>Yên Tâm Mua Hàng </CategoryBoxText>
              </CategoryBoxLink>
            </CategoryBoxItem>
          </CategoryBoxList>
        </CategoryBox>
      </CategoryContainer>
    </Wrapper>
  );
};

export default Category;

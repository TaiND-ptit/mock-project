import { Wrapper, CategoryContainer, CategoryBox, CategoryBoxList } from './Category.styled';
import images from 'assets/images';
import CategoryItem from '../CategoryItem/CategoryItem';

const Category = () => {
  return (
    <Wrapper>
      <CategoryContainer>
        <CategoryBox>
          <CategoryBoxList>
            <CategoryItem srcImg={images.category.category1} categoryText='Tech Zone - Siêu Thị Điện Tử' />
            <CategoryItem srcImg={images.category.category2} categoryText='Gì Cũng Rẻ - Từ 1K ' />
            <CategoryItem srcImg={images.category.category3} categoryText='Hoàn Xu 20% - Đơn Từ 0Đ' />
            <CategoryItem srcImg={images.category.category4} categoryText='Nạp Thẻ, Hóa Đơn & E-voucher' />
            <CategoryItem srcImg={images.category.category5} categoryText='Shopee Số Gì Đây ' />
            <CategoryItem srcImg={images.category.category6} categoryText='Freeship Xtra 70k Mỗi Ngày ' />
            <CategoryItem srcImg={images.category.category7} categoryText='Hàng Hiệu -50% ' />
            <CategoryItem srcImg={images.category.category8} categoryText='Hàng Quốc Tế - Deal Đồng Giá' />
            <CategoryItem srcImg={images.category.category9} categoryText='Shopee Premium' />
            <CategoryItem srcImg={images.category.category10} categoryText='Yên Tâm Mua Hàng' />
          </CategoryBoxList>
        </CategoryBox>
      </CategoryContainer>
    </Wrapper>
  );
};

export default Category;

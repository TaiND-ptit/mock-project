import { Wrapper, CategoryContainer, CategoryBox, CategoryBoxList } from './Category.styled';
import images from 'assets/images';
import CategoryItem from '../CategoryItem/CategoryItem';

const Category = () => {
  const dataCategorys = [
    { id: 1, image: images.category.category1, categotyText: 'Tech Zone - Siêu Thị Điện Tử' },
    { id: 2, image: images.category.category2, categotyText: 'Gì Cũng Rẻ - Từ 1K' },
    { id: 3, image: images.category.category3, categotyText: 'Hoàn Xu 20% - Đơn Từ 0Đ' },
    { id: 4, image: images.category.category4, categotyText: 'Nạp Thẻ, Hóa Đơn & E-voucher' },
    { id: 5, image: images.category.category5, categotyText: 'Shopee Số Gì Đây' },
    { id: 6, image: images.category.category6, categotyText: 'Freeship Xtra 70k Mỗi Ngày' },
    { id: 7, image: images.category.category7, categotyText: 'Hàng Hiệu -50%' },
    { id: 8, image: images.category.category8, categotyText: 'Hàng Quốc Tế - Deal Đồng Giá' },
    { id: 9, image: images.category.category9, categotyText: 'Shopee Premium' },
    { id: 10, image: images.category.category10, categotyText: 'Yên Tâm Mua Hàng' }
  ];

  return (
    <Wrapper>
      <CategoryContainer>
        <CategoryBox>
          <CategoryBoxList>
            {dataCategorys.map((category) => (
              <CategoryItem key={category.id} srcImg={category.image} categoryText={category.categotyText} />
            ))}
          </CategoryBoxList>
        </CategoryBox>
      </CategoryContainer>
    </Wrapper>
  );
};

export default Category;

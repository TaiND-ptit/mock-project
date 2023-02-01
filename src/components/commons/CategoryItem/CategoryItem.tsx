import { CategoryBoxItem, CategoryBoxLink, CategoryBoxImg, CategoryBoxText } from './CategoryItem.styled';

interface Props {
  srcImg: string;
  categoryText: string;
}
const CategoryItem: React.FC<Props> = (props) => {
  const { srcImg, categoryText } = props;
  return (
    <div>
      <CategoryBoxItem>
        <CategoryBoxLink>
          <CategoryBoxImg src={srcImg} alt='image-category' />
          <CategoryBoxText>{categoryText}</CategoryBoxText>
        </CategoryBoxLink>
      </CategoryBoxItem>
    </div>
  );
};

export default CategoryItem;

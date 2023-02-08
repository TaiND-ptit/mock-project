import { Link } from 'react-router-dom';
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
          <Link to=''>
            <CategoryBoxImg src={srcImg} alt='image-category' />
            <CategoryBoxText>{categoryText}</CategoryBoxText>
          </Link>
        </CategoryBoxLink>
      </CategoryBoxItem>
    </div>
  );
};

export default CategoryItem;

import { Wrapper } from './PaginationProduct.styled';
import { Pagination } from 'antd';
const PaginationProduct: React.FC = () => {
  return (
    <Wrapper>
      <Pagination defaultCurrent={1} total={50} />
    </Wrapper>
  );
};

export default PaginationProduct;

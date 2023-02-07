import { Wrapper } from './PaginationProduct.styled';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { changePage } from 'store/paginationSlice';
const PaginationProduct: React.FC = () => {
  const dispatch = useDispatch();

  const onchange = (pageNumber: number) => {
    dispatch(changePage(pageNumber));
  };

  return (
    <Wrapper>
      <Pagination defaultCurrent={1} onChange={onchange} total={50} />
    </Wrapper>
  );
};

export default PaginationProduct;

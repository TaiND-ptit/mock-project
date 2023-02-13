import { Link } from 'react-router-dom';
import {
  Wrapper,
  SidebarHideBtn,
  SidebarHideIcon,
  SidebarContainer,
  SidebarTitle,
  CategoryTitle,
  SidebarText,
  SidebarIcon,
  CategoryList,
  CategoryItem
} from './Sidebar.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../../../store/sidebarSlice';
import { useQuery } from '@tanstack/react-query';
import { getCategorys } from 'api/category.api';
import Home from '../SVG/Home';
import Register from '../SVG/Register';
import Login from '../SVG/Login';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categorysQuery = useQuery({
    queryKey: ['categorys'],
    queryFn: () => getCategorys(),
    keepPreviousData: true
  });
  return (
    <Wrapper className={`${isSidebarOn ? 'hide-sidebar' : ''}`}>
      <SidebarHideBtn onClick={() => dispatch(setSidebarOff())}>
        <SidebarHideIcon className='fas fa-times'></SidebarHideIcon>
      </SidebarHideBtn>
      <SidebarContainer>
        <SidebarTitle>
          <SidebarIcon>
            <Home />
          </SidebarIcon>
          <SidebarText>
            <Link to='/'>Về trang chủ</Link>
          </SidebarText>
        </SidebarTitle>
        <SidebarTitle>
          <SidebarIcon>
            <Register />
          </SidebarIcon>
          <SidebarText>
            <Link to='/register'>Đăng ký</Link>
          </SidebarText>
        </SidebarTitle>
        <SidebarTitle>
          <SidebarIcon>
            <Login />
          </SidebarIcon>
          <SidebarText>
            <Link to='/login'>Đăng nhập</Link>
          </SidebarText>
        </SidebarTitle>

        <CategoryTitle>All Categories</CategoryTitle>
        <CategoryList>
          {categorysQuery?.data?.data?.data?.map((category: any) => (
            <CategoryItem key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </CategoryItem>
          ))}
        </CategoryList>
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;

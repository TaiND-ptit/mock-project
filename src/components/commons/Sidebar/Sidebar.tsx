import { Link } from 'react-router-dom';
import {
  Wrapper,
  SidebarHideBtn,
  SidebarHideIcon,
  SidebarContainer,
  CategoryTitle,
  CategoryList,
  CategoryItem,
  CatListLink
} from './Sidebar.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../../../store/sidebarSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  return (
    <Wrapper className={`${isSidebarOn ? 'hide-sidebar' : ''}`}>
      <SidebarHideBtn onClick={() => dispatch(setSidebarOff())}>
        <SidebarHideIcon className='fas fa-times'></SidebarHideIcon>
      </SidebarHideBtn>
      <SidebarContainer>
        <CategoryTitle>All Categories</CategoryTitle>
        <CategoryList>
          <CategoryItem>
            <CatListLink>Smartphones</CatListLink>
          </CategoryItem>
          <CategoryItem>
            <CatListLink>Smartphones</CatListLink>
          </CategoryItem>
          <CategoryItem>
            <CatListLink>Smartphones</CatListLink>
          </CategoryItem>
          <CategoryItem>
            <CatListLink>Smartphones</CatListLink>
          </CategoryItem>
          <CategoryItem>
            <CatListLink>Smartphones</CatListLink>
          </CategoryItem>
          <CategoryItem>
            <CatListLink>Smartphones</CatListLink>
          </CategoryItem>
        </CategoryList>
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;
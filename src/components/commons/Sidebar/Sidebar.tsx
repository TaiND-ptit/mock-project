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
            <svg
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 463.937 463.937'
            >
              <g>
                <g>
                  <path
                    d='M460.414,216.518l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8c-5.5,0-10,4.9-10,10.5v39.6
                                                        l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4
                                                        l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1C465.114,226.418,464.614,220.118,460.414,216.518z M355.014,126.518
                                                        l-28-23.6v-47.1h28V126.518z'
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d='M416.314,236.718l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24c-4.2,3.6-4.7,9.9-1.1,14.1
                                                        c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3c5.6-0.1,10.2-4.6,10.3-10.3v-187.5
                                                        l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5C421.114,246.518,420.514,240.218,416.314,236.718z M272.014,418.818h-80
                                                        v-108h80V418.818z M292.014,418.818v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79v-194.8l139-118.4
                                                        l139,118.4v194.8H292.014z'
                  />
                </g>
              </g>
            </svg>
          </SidebarIcon>
          <SidebarText>
            <Link to='/'>Về trang chủ</Link>
          </SidebarText>
        </SidebarTitle>
        <SidebarTitle>
          <SidebarIcon>
            <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'>
              <g>
                <g>
                  <path
                    d='M367.57,256.909c-9.839-4.677-19.878-8.706-30.093-12.081C370.56,219.996,392,180.455,392,136C392,61.01,330.991,0,256,0
                                                    c-74.991,0-136,61.01-136,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069
                                                    c-45.732,37.617-77.529,90.086-89.532,147.743c-3.762,18.066,0.745,36.622,12.363,50.908C25.222,503.847,42.365,512,60.693,512
                                                    H307c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H60.693c-8.538,0-13.689-4.766-15.999-7.606
                                                    c-3.989-4.905-5.533-11.29-4.236-17.519c20.755-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102
                                                    c1.793,0,3.578-0.035,5.354-0.104c31.12,0.73,61.05,7.832,89.044,21.14c9.977,4.74,21.907,0.499,26.649-9.478
                                                    C381.789,273.582,377.547,261.651,367.57,256.909z M260.878,231.877c-1.623-0.029-3.249-0.044-4.878-0.044
                                                    c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136c0-52.935,43.065-96,96-96s96,43.065,96,96
                                                    C352,187.299,311.555,229.329,260.878,231.877z'
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d='M492,397h-55v-55c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v55h-55c-11.046,0-20,8.954-20,20
                                                    c0,11.046,8.954,20,20,20h55v55c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-55h55c11.046,0,20-8.954,20-20
                                                    C512,405.954,503.046,397,492,397z'
                  />
                </g>
              </g>
            </svg>
          </SidebarIcon>
          <SidebarText>
            <Link to='/register'>Đăng ký</Link>
          </SidebarText>
        </SidebarTitle>
        <SidebarTitle>
          <SidebarIcon>
            <svg height='22px' viewBox='0 -32 512.016 512' width='22px' xmlns='http://www.w3.org/2000/svg'>
              <path d='m192 213.339844c-58.816406 0-106.667969-47.847656-106.667969-106.664063 0-58.816406 47.851563-106.6679685 106.667969-106.6679685s106.667969 47.8515625 106.667969 106.6679685c0 58.816407-47.851563 106.664063-106.667969 106.664063zm0-181.332032c-41.171875 0-74.667969 33.492188-74.667969 74.667969 0 41.171875 33.496094 74.664063 74.667969 74.664063s74.667969-33.492188 74.667969-74.664063c0-41.175781-33.496094-74.667969-74.667969-74.667969zm0 0' />
              <path d='m368 448.007812h-352c-8.832031 0-16-7.167968-16-16v-74.667968c0-55.871094 45.460938-101.332032 101.332031-101.332032h181.335938c55.871093 0 101.332031 45.460938 101.332031 101.332032v74.667968c0 8.832032-7.167969 16-16 16zm-336-32h320v-58.667968c0-38.226563-31.105469-69.332032-69.332031-69.332032h-181.335938c-38.226562 0-69.332031 31.105469-69.332031 69.332032zm0 0' />
              <path d='m496 218.675781h-181.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h181.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
              <path d='m410.667969 304.007812c-4.097657 0-8.191407-1.558593-11.308594-4.691406-6.25-6.253906-6.25-16.386718 0-22.636718l74.027344-74.027344-74.027344-74.027344c-6.25-6.25-6.25-16.382812 0-22.632812s16.382813-6.25 22.636719 0l85.332031 85.332031c6.25 6.25 6.25 16.386719 0 22.636719l-85.332031 85.332031c-3.136719 3.15625-7.234375 4.714843-11.328125 4.714843zm0 0' />
            </svg>
          </SidebarIcon>
          <SidebarText>
            <Link to='/login'>Đăng nhập</Link>
          </SidebarText>
        </SidebarTitle>

        <CategoryTitle>All Categories</CategoryTitle>
        <CategoryList>
          {categorysQuery?.data?.data.data.map((category: any) => (
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

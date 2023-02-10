import { Link } from 'react-router-dom';
import { FooterLinkIcon } from '../Footer/Footer.styled';
import Navbar from '../Navbar/Navbar';
import HeadlessTippy from '@tippyjs/react/headless';
import {
  HeaderContainer,
  Wrapper,
  NavbarTop,
  ListTopLink,
  ListLinkItem,
  ItemLink,
  ItemLinkDes,
  SocialListLinks,
  SocialItem,
  NavbarRight,
  TopLinkItem,
  TopLinkIconText,
  NavbarBottom,
  UserLogin,
  ListItemUserImg,
  ListItemUserName,
  ListLinkItemUserLogin,
  UserUser,
  InfoUser,
  InfoListUser
} from './Header.styled';
import images from 'assets/images';
import { useMemo, useState } from 'react';
import http from 'utils/http';

const Header = () => {
  const username: any = localStorage.getItem('userLogin');
  const tokenLocalStorage: any = localStorage.getItem('login');
  const [userCurrent, setUserCurrent] = useState<string>(String(username));
  const [token, setToken] = useState<string>(String(tokenLocalStorage));

  const handleLogOut = () => {
    http.get('/logout');

    localStorage.removeItem('userLogin');
    localStorage.removeItem('login');
  };

  return (
    <Wrapper>
      <HeaderContainer>
        <NavbarTop>
          <div className='navbar-left'>
            <ListTopLink>
              <ListLinkItem>
                <ItemLink>
                  <Link to=''>Kênh người bán</Link>
                </ItemLink>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem>
                <ItemLink>
                  {' '}
                  <Link to=''>Vào ứng dụng Shopee</Link>
                </ItemLink>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem>
                <ItemLink>
                  <Link to=''>Tải ứng dụng</Link>
                </ItemLink>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem className='social-link'>
                <ItemLinkDes>Kết nối</ItemLinkDes>
                <SocialListLinks>
                  <SocialItem>
                    <FooterLinkIcon className='fab fa-facebook'></FooterLinkIcon>
                  </SocialItem>
                  <SocialItem>
                    <FooterLinkIcon className='fab fa-youtube'></FooterLinkIcon>
                  </SocialItem>
                </SocialListLinks>
              </ListLinkItem>
            </ListTopLink>
          </div>
          <NavbarRight>
            <ListTopLink>
              <ListLinkItem>
                <TopLinkItem>
                  <Link to=''>
                    <ListLinkItem className='icon-support'>
                      <FooterLinkIcon className='fa-solid fa-circle-question'></FooterLinkIcon>
                    </ListLinkItem>
                    <TopLinkIconText>Support</TopLinkIconText>
                  </Link>
                </TopLinkItem>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              {userCurrent && token && (
                <div>
                  <HeadlessTippy
                    interactive
                    render={(attrs) => (
                      <UserUser {...attrs}>
                        <InfoUser>
                          <InfoListUser>
                            <Link to='/account'>Tài khoản của tôi</Link>
                          </InfoListUser>
                          <InfoListUser onClick={handleLogOut}>Đăng xuất</InfoListUser>
                        </InfoUser>
                      </UserUser>
                    )}
                  >
                    <ListLinkItemUserLogin>
                      <UserLogin>
                        <ListItemUserImg src={images.userImg.userImg} alt='user' />
                        <ListItemUserName>{userCurrent}</ListItemUserName>
                      </UserLogin>
                    </ListLinkItemUserLogin>
                  </HeadlessTippy>
                </div>
              )}
              {!!userCurrent && !!token && (
                <>
                  <ListLinkItem>
                    <Link to='/register'>
                      <TopLinkIconText>Đăng kí</TopLinkIconText>
                    </Link>
                  </ListLinkItem>
                  <ListLinkItem className='vert-line'></ListLinkItem>
                  <ListLinkItem>
                    <Link to='/login'>
                      <TopLinkIconText>Đăng nhập</TopLinkIconText>
                    </Link>
                  </ListLinkItem>
                </>
              )}
            </ListTopLink>
          </NavbarRight>
        </NavbarTop>

        <NavbarBottom>
          <Navbar />
        </NavbarBottom>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;

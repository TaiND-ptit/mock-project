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
import { useEffect, useState } from 'react';
import http from 'utils/http';
import { clearCart } from 'store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearTokenAndName, getToken, getUserName } from 'store/authSlice';
import { logoutUser } from 'api/logout.api';

const Header = () => {
  const dispatch = useDispatch();

  const tokenGlobal = useSelector(getToken);
  const userName = useSelector(getUserName);
  const [userCurrent, setUserCurrent] = useState<String>('');
  const [token, setToken] = useState<String>('');

  useEffect(() => {
    setToken(tokenGlobal);
    setUserCurrent(userName);
  }, [tokenGlobal]);

  const handleLogOut = () => {
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
      }
    };
    logoutUser(config).then((response) => {
      if (response?.data.status === 'success') {
        dispatch(clearCart());
        dispatch(clearTokenAndName());
      }
    });
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
              {token ? (
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
              ) : (
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

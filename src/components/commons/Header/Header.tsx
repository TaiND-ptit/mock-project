import { Link } from 'react-router-dom';
import { FooterLinkIcon } from '../Footer/Footer.styled';
import Navbar from '../Navbar/Navbar';
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
  NavbarBottom
} from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <NavbarTop>
          <div className='navbar-left'>
            <ListTopLink>
              <ListLinkItem>
                <ItemLink>Kênh người bán</ItemLink>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem>
                <ItemLink>Vào ứng dụng Shopee</ItemLink>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem>
                <ItemLink>Tải ứng dụng</ItemLink>
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
                  <ListLinkItem className='icon-support'>
                    <FooterLinkIcon className='fa-solid fa-circle-question'></FooterLinkIcon>
                  </ListLinkItem>
                  <TopLinkIconText>Support</TopLinkIconText>
                </TopLinkItem>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem>
                <Link to=''>
                  <TopLinkIconText>Đăng kí</TopLinkIconText>
                </Link>
              </ListLinkItem>
              <ListLinkItem className='vert-line'></ListLinkItem>
              <ListLinkItem>
                <Link to='/login'>
                  <TopLinkIconText>Đăng nhập</TopLinkIconText>
                </Link>
              </ListLinkItem>
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

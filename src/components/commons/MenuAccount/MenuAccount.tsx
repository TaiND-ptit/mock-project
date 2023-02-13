import { Link } from 'react-router-dom';
import {
  AccountLeft,
  AccountTop,
  AccountImg,
  ShopeeAvatar,
  AccountContent,
  AccountText,
  AccountEdit,
  AccountBottom,
  AccountItem,
  AccountItemHeader,
  AccountItemContent,
  AccountItemImg,
  AccountContentTitle,
  AccountContentText,
  AccountContentTextImg
} from './MenuAccount.styled';
import images from 'assets/images';
import Avatar from '../SVG/Avatar';
import FriendNew from '../SVG/FriendNew';
import Sale from '../SVG/Sale';

const MenuAccount = () => {
  return (
    <AccountLeft>
      <AccountTop>
        <Link to=''>
          <ShopeeAvatar>
            <AccountImg src={images.productDetail.productDetail1} alt='product' />
          </ShopeeAvatar>
        </Link>
        <AccountContent>
          <AccountText>tainguyenduy318</AccountText>
          <AccountEdit>
            <Link to='' className='avatar-link'>
              <Avatar />
              Sửa hồ sơ
            </Link>
          </AccountEdit>
        </AccountContent>
      </AccountTop>

      <AccountBottom>
        <AccountItem>
          <AccountItemHeader>
            <Link to=''>
              <AccountItemContent>
                <AccountItemImg src='https://cf.shopee.vn/file/sg-11134004-23010-3e2eq8pktulv47' />
              </AccountItemContent>
              <AccountContentTitle>
                <AccountContentText>Ưu đãi dành riêng cho bạn</AccountContentText>
                <AccountContentTextImg>
                  <FriendNew />
                </AccountContentTextImg>
              </AccountContentTitle>
            </Link>
          </AccountItemHeader>

          <AccountItemHeader>
            <Link to=''>
              <AccountItemContent>
                <AccountItemImg src='https://cf.shopee.vn/file/sg-11134004-23010-jp7ak5cdd4lvae' />
              </AccountItemContent>
              <AccountContentTitle>
                <AccountContentText>2.2 Sale 50%</AccountContentText>
                <AccountContentTextImg>
                  <Sale />
                </AccountContentTextImg>
              </AccountContentTitle>
            </Link>
          </AccountItemHeader>

          <AccountItemHeader>
            <Link to='/account'>
              <AccountItemContent>
                <AccountItemImg src='https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4' />
              </AccountItemContent>
              <AccountContentTitle>
                <AccountContentText>Tài khoản của tôi</AccountContentText>
              </AccountContentTitle>
            </Link>
          </AccountItemHeader>

          <AccountItemHeader>
            <Link to='/order'>
              <AccountItemContent>
                <AccountItemImg src='https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078' />
              </AccountItemContent>
              <AccountContentTitle>
                <AccountContentText>Đơn Mua</AccountContentText>
              </AccountContentTitle>
            </Link>
          </AccountItemHeader>
        </AccountItem>
      </AccountBottom>
    </AccountLeft>
  );
};

export default MenuAccount;

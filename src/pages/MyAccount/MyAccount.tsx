import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import {
  AccountWrapper,
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
  AccountContentTextImg,
  AccountRight,
  AccountIfoContainer,
  AccountIfoContentWrapper,
  AccountIfoContent,
  AccountIfoContentHeader,
  AccountIfoContentTitle,
  AccountIfoContentDes,
  AccountInfoBottom,
  AccountInfoLeft
  // AccountInfoRight,
  // ChooseImg
} from './MyAccount.styled';
import images from 'assets/images';
import Order from 'pages/Order/Order';

const MyAccount = () => {
  const onFinish = (values: any) => {
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };
  return (
    <AccountWrapper>
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
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ marginRight: '4px' }}
                >
                  <path
                    d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                    fill='#9B9B9B'
                    fill-rule='evenodd'
                  ></path>
                </svg>
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
                    <svg width='32' height='18' viewBox='0 0 32 18' fill='none'>
                      <path
                        d='M1 9C1 4.58172 4.58172 1 9 1H23C27.4183 1 31 4.58172 31 9C31 13.4183 27.4183 17 23 17H1V9Z'
                        fill='#EE4D2D'
                      ></path>
                      <path
                        d='M12.4111 12H11.1758L8.00684 6.95605V12H6.77148V4.89062H8.00684L11.1855 9.9541V4.89062H12.4111V12ZM16.083 12.0977C15.3311 12.0977 14.7207 11.8617 14.252 11.3896C13.7865 10.9144 13.5537 10.2829 13.5537 9.49512V9.34863C13.5537 8.82129 13.6546 8.35091 13.8564 7.9375C14.0615 7.52083 14.348 7.19694 14.7158 6.96582C15.0837 6.7347 15.4938 6.61914 15.9463 6.61914C16.6657 6.61914 17.2207 6.84863 17.6113 7.30762C18.0052 7.7666 18.2021 8.41602 18.2021 9.25586V9.73438H14.75C14.7858 10.1706 14.9307 10.5156 15.1846 10.7695C15.4417 11.0234 15.764 11.1504 16.1514 11.1504C16.695 11.1504 17.1377 10.9307 17.4795 10.4912L18.1191 11.1016C17.9076 11.4173 17.6243 11.6631 17.2695 11.8389C16.918 12.0114 16.5225 12.0977 16.083 12.0977ZM15.9414 7.57129C15.6159 7.57129 15.3522 7.68522 15.1504 7.91309C14.9518 8.14095 14.8249 8.45833 14.7695 8.86523H17.0303V8.77734C17.0042 8.38021 16.8984 8.08073 16.7129 7.87891C16.5273 7.67383 16.2702 7.57129 15.9414 7.57129ZM23.7686 10.3643L24.6084 6.7168H25.7656L24.3252 12H23.3486L22.2158 8.37207L21.1025 12H20.126L18.6807 6.7168H19.8379L20.6924 10.3252L21.7764 6.7168H22.6699L23.7686 10.3643Z'
                        fill='white'
                      ></path>
                      <path
                        d='M1 17H0V18H1V17ZM9 2H23V0H9V2ZM23 16H1V18H23V16ZM2 17V9H0V17H2ZM30 9C30 12.866 26.866 16 23 16V18C27.9706 18 32 13.9706 32 9H30ZM23 2C26.866 2 30 5.13401 30 9H32C32 4.02944 27.9706 0 23 0V2ZM9 0C4.02944 0 0 4.02944 0 9H2C2 5.13401 5.13401 2 9 2V0Z'
                        fill='white'
                      ></path>
                    </svg>
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
                    <svg width='32' height='18' viewBox='0 0 32 18' fill='none'>
                      <path
                        d='M1 9C1 4.58172 4.58172 1 9 1H23C27.4183 1 31 4.58172 31 9C31 13.4183 27.4183 17 23 17H1V9Z'
                        fill='#EE4D2D'
                      ></path>
                      <path
                        d='M12.4111 12H11.1758L8.00684 6.95605V12H6.77148V4.89062H8.00684L11.1855 9.9541V4.89062H12.4111V12ZM16.083 12.0977C15.3311 12.0977 14.7207 11.8617 14.252 11.3896C13.7865 10.9144 13.5537 10.2829 13.5537 9.49512V9.34863C13.5537 8.82129 13.6546 8.35091 13.8564 7.9375C14.0615 7.52083 14.348 7.19694 14.7158 6.96582C15.0837 6.7347 15.4938 6.61914 15.9463 6.61914C16.6657 6.61914 17.2207 6.84863 17.6113 7.30762C18.0052 7.7666 18.2021 8.41602 18.2021 9.25586V9.73438H14.75C14.7858 10.1706 14.9307 10.5156 15.1846 10.7695C15.4417 11.0234 15.764 11.1504 16.1514 11.1504C16.695 11.1504 17.1377 10.9307 17.4795 10.4912L18.1191 11.1016C17.9076 11.4173 17.6243 11.6631 17.2695 11.8389C16.918 12.0114 16.5225 12.0977 16.083 12.0977ZM15.9414 7.57129C15.6159 7.57129 15.3522 7.68522 15.1504 7.91309C14.9518 8.14095 14.8249 8.45833 14.7695 8.86523H17.0303V8.77734C17.0042 8.38021 16.8984 8.08073 16.7129 7.87891C16.5273 7.67383 16.2702 7.57129 15.9414 7.57129ZM23.7686 10.3643L24.6084 6.7168H25.7656L24.3252 12H23.3486L22.2158 8.37207L21.1025 12H20.126L18.6807 6.7168H19.8379L20.6924 10.3252L21.7764 6.7168H22.6699L23.7686 10.3643Z'
                        fill='white'
                      ></path>
                      <path
                        d='M1 17H0V18H1V17ZM9 2H23V0H9V2ZM23 16H1V18H23V16ZM2 17V9H0V17H2ZM30 9C30 12.866 26.866 16 23 16V18C27.9706 18 32 13.9706 32 9H30ZM23 2C26.866 2 30 5.13401 30 9H32C32 4.02944 27.9706 0 23 0V2ZM9 0C4.02944 0 0 4.02944 0 9H2C2 5.13401 5.13401 2 9 2V0Z'
                        fill='white'
                      ></path>
                    </svg>
                  </AccountContentTextImg>
                </AccountContentTitle>
              </Link>
            </AccountItemHeader>

            <AccountItemHeader>
              <Link to=''>
                <AccountItemContent>
                  <AccountItemImg src='https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4' />
                </AccountItemContent>
                <AccountContentTitle>
                  <AccountContentText>Tài khoản của tôi</AccountContentText>
                </AccountContentTitle>
              </Link>
            </AccountItemHeader>

            <AccountItemHeader>
              <Link to=''>
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

      <AccountRight>
        {/* <AccountIfoContainer>
                    <AccountIfoContentWrapper>
                        <AccountIfoContent>
                            <AccountIfoContentHeader>
                                <AccountIfoContentTitle>Hồ sơ của tôi</AccountIfoContentTitle>
                                <AccountIfoContentDes>
                                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                                </AccountIfoContentDes>
                            </AccountIfoContentHeader>
                        </AccountIfoContent>

                        <AccountInfoBottom>
                            <AccountInfoLeft>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    style={{ maxWidth: 600 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Tên Đăng nhập"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Tên"
                                        name="fullname"
                                        rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ tên!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Số điện thoại"
                                        name="phone"
                                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Ngày sinh"
                                        name="brith"
                                        rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                                    >
                                        <Input/>
                                    </Form.Item>

                    

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </AccountInfoLeft>
                            {/* <AccountInfoRight>
                              <ChooseImg>

                              </ChooseImg>
                            </AccountInfoRight> */}
        {/* </AccountInfoBottom>
                    </AccountIfoContentWrapper>
                </AccountIfoContainer>  */}
        <Order />
      </AccountRight>
    </AccountWrapper>
  );
};

export default MyAccount;

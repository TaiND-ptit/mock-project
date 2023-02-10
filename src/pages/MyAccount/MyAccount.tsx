import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import {
  AccountWrapper,
  AccountRight,
  AccountIfoContainer,
  AccountIfoContentWrapper,
  AccountIfoContent,
  AccountIfoContentHeader,
  AccountIfoContentTitle,
  AccountIfoContentDes,
  AccountInfoBottom,
  AccountInfoLeft,
  AccountInfoRight,
  ChooseImg
} from './MyAccount.styled';
import images from 'assets/images';
import Order from 'pages/Order/Order';
import MenuAccount from 'components/commons/MenuAccount/MenuAccount';

const MyAccount = () => {
  const onFinish = (values: any) => {
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };
  return (
    <AccountWrapper>
      <MenuAccount />
      <AccountRight>
        <AccountIfoContainer>
          <AccountIfoContentWrapper>
            <AccountIfoContent>
              <AccountIfoContentHeader>
                <AccountIfoContentTitle>Hồ sơ của tôi</AccountIfoContentTitle>
                <AccountIfoContentDes>Quản lý thông tin hồ sơ để bảo mật tài khoản</AccountIfoContentDes>
              </AccountIfoContentHeader>
            </AccountIfoContent>

            <AccountInfoBottom>
              <AccountInfoLeft>
                <Form
                  name='basic'
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete='off'
                >
                  <Form.Item
                    label='Tên Đăng nhập'
                    name='username'
                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label='Tên'
                    name='fullname'
                    rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ tên!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label='Số điện thoại'
                    name='phone'
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label='Ngày sinh'
                    name='brith'
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </AccountInfoLeft>
              <AccountInfoRight>
                <ChooseImg></ChooseImg>
              </AccountInfoRight>
            </AccountInfoBottom>
          </AccountIfoContentWrapper>
        </AccountIfoContainer>
        {/* <Order /> */}
      </AccountRight>
    </AccountWrapper>
  );
};

export default MyAccount;

import { Link, useNavigate } from 'react-router-dom';
import { Button, Select, Form, Input, Modal } from 'antd';
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
import MenuAccount from 'components/commons/MenuAccount/MenuAccount';
import { updateProfileUser } from 'api/edit-profile.api';
import { useSelector } from 'react-redux';
import { getToken } from 'store/authSlice';
type editProfileUserType = {
  phone: string;
  age: string;
  gender: string;
  address: string;
  image: string;
};
const MyAccount = () => {
  const { Option } = Select;
  const navigate = useNavigate();
  const token = useSelector(getToken);

  const onFinish = (values: any) => {
    const userData: editProfileUserType = {
      phone: values.phone,
      age: values.age,
      gender: values.gender,
      address: values.address,
      image: ''
    };

    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
      }
    };

    updateProfileUser(userData, config).then((response) => {
      if (response?.data.status === 'success')
        Modal.success({
          content: 'Cập nhật thành công'
        });
      // navigate('/');
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    Modal.error({
      content: 'Cập nhật thất bại'
    });
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
                    label='Số điện thoại'
                    name='phone'
                    rules={[
                      { required: true, message: 'Vui lòng nhập số điện thoại!' },
                      { min: 10, message: 'Số điện thoại cần 10 số' }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label='Tuổi' name='age' rules={[{ required: true, message: 'Vui lòng nhập tuổi!' }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name='gender' label='Giới tính' rules={[{ required: true }]}>
                    <Select
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value='1'>Nam</Option>
                      <Option value='2'>Nữ</Option>
                      <Option value='3'>Khác</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label='Địa chỉ'
                    name='address'
                    rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                      Cập nhật
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

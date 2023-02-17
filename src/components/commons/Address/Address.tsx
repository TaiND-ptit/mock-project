import { useMutation } from '@tanstack/react-query';
import {
  AddressContainer,
  AddressContentWrapper,
  AddressContent,
  AddressContentHeader,
  AddressContentTitle,
  AddressContentDes,
  AddressBottom,
  AddressLeft
} from './Address.styled';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getAllCarts } from 'store/cartSlice';
import { RootState } from 'store/store';
import { paymentUser } from 'api/payment.api';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'store/authSlice';
type paymentType = {
  name: string;
  phone: string;
  address: string;
  total: number;
  obj: object;
};
const Address = () => {
  const carts = useSelector(getAllCarts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const { totalAmount } = useSelector((state: RootState) => state.cart);
  const test = carts?.map((cart: any) => ({ product_id: cart.id, quantity: cart.quantity, price: cart.totalPrice }));

  const onFinish = (values: any) => {
    const paymentData: paymentType = {
      name: values.name,
      phone: values.phone,
      address: values.address,
      total: totalAmount,
      obj: test
    };

    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
      }
    };

    // paymentUser(paymentData, config);
    paymentUser(paymentData, config).then((response) => {
      if (response?.data.status === 'success') {
        dispatch(clearCart());
        navigate('/order');
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    Modal.error({
      content: 'Thanh toán thất bại'
    });
  };
  return (
    <AddressContainer>
      <AddressContentWrapper>
        <AddressContent>
          <AddressContentHeader>
            <AddressContentTitle>Địa chỉ</AddressContentTitle>
            <AddressContentDes>Quản lý thông tin hồ sơ để bảo mật tài khoản</AddressContentDes>
          </AddressContentHeader>
        </AddressContent>

        <AddressBottom>
          <AddressLeft>
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
                label='Tên khách hàng'
                name='name'
                rules={[
                  { required: true, message: 'Vui lòng nhập tên khách hàng!' },
                  { min: 3, message: 'Tên ít nhất 3 kí tự' }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Số điện thoại'
                name='phone'
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại!' },
                  { len: 10, message: 'Số điện thoại có 10 số!' }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Địa chỉ'
                name='address'
                rules={[
                  { required: true, message: 'Vui lòng nhập địa chỉ!' },
                  { min: 3, message: 'Địa chỉ ít nhất 3 kí tự!' }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </AddressLeft>
        </AddressBottom>
      </AddressContentWrapper>
    </AddressContainer>
  );
};

export default Address;

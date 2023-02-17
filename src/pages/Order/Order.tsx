import { Wrapper, OrderContainer } from './Order.styled';
import { Table, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { getListOrder } from 'api/listOrder.api';
import MenuAccount from 'components/commons/MenuAccount/MenuAccount';
import { AccountRight, AccountWrapper } from 'pages/MyAccount/MyAccount.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getToken } from 'store/authSlice';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: number;
  totalPrice: number;
  status: string;
}
const Order = () => {
  const [dataSource, setDataSource] = useState([]);
  const token = useSelector(getToken);
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    getListOrder(config).then((response) => {
      setDataSource(response?.data);
      // setDataSource(data);
    });
  }, [token]);

  const data: any = [...dataSource];

  const listOrder = data[0]?.map((order: any) => ({
    orderId: order.id,
    totalPrice: order.order_total,
    status: order.order_status === 1 ? 'Đơn hàng đang chờ xử lý' : 'Đơn hàng đã giao'
  }));

  const unpaidOrder = listOrder?.filter((order: any) => {
    return order.status === 'Đơn hàng đang chờ xử lý';
  });

  const paidOrder = listOrder?.filter((order: any) => {
    return order.status === 'Đơn hàng đã giao';
  });

  const onChange = (key: string) => {};

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tổng tiền',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (text) => <Link to=''>{text}</Link>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status'
    }
  ];
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tất cả`,
      children: (
        <>
          <Table dataSource={listOrder} columns={columns} />
        </>
      )
    },
    {
      key: '2',
      label: `Chờ thanh toán`,
      children: (
        <>
          <Table dataSource={unpaidOrder} columns={columns} />
        </>
      )
    },
    {
      key: '3',
      label: `Vận Chuyển`,
      children: (
        <>
          <Table dataSource={paidOrder} columns={columns} />
        </>
      )
    },
    {
      key: '4',
      label: `Đang giao`,
      children: `chưa có sp`
    },
    {
      key: '5',
      label: `Hoàn thành`,
      children: `chưa có sp`
    },
    {
      key: '6',
      label: `Đã hủy`,
      children: `chưa có sp`
    }
  ];
  return (
    <Wrapper>
      <AccountWrapper>
        <MenuAccount />
        <AccountRight>
          <OrderContainer>
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
          </OrderContainer>
        </AccountRight>
      </AccountWrapper>
    </Wrapper>
  );
};

export default Order;

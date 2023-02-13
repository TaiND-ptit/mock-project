import { Wrapper, OrderContainer } from './Order.styled';
import { Table, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { getListOrder } from 'api/listOrder.api';
import MenuAccount from 'components/commons/MenuAccount/MenuAccount';
import { AccountRight, AccountWrapper } from 'pages/MyAccount/MyAccount.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'store/authSlice';

const Order = () => {
  const [dataSource, setDataSource] = useState([]);
  const token = useSelector(getToken);
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    }
  };
  console.log(token);

  useEffect(() => {
    getListOrder(config).then((response) => {
      setDataSource(response?.data);
      // setDataSource(data);
    });
  }, [token]);

  const test = dataSource.map((orders: any) => {
    orders.map((order: any) => ({
    totalPrice: order?.order_total,
    status: order?.order_status
    }))
    //  console.log('order',order);
    //  console.log('order',order[0].order_total);
  });

  console.log(dataSource);
  console.log('test', test);

  const onChange = (key: string) => {
    // console.log(key);
  };
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];

  const columns = [
    {
      title: 'Tổng tiền',
      dataIndex: 'totalPrice',
      key: 'totalPrice'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status'
    }
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
  ];
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tất cả`,
      children: (
        <>
          <Table dataSource={dataSource} columns={columns} />
        </>
      )
    },
    {
      key: '2',
      label: `Chờ thanh toán`,
      children: (
        <>
        <h1> jjj</h1>
          {dataSource.map((data: any) => {
            console.log(data.order_total);
             
            <>
              <h1>hhhh</h1>
              {/* <h1>{data.order_total}</h1> */}
            </>;
          })}
        </>
      )
    },
    {
      key: '3',
      label: `Vận Chuyển`,
      children: `Content of Tab Pane 3`
    },
    {
      key: '4',
      label: `Đang giao`,
      children: `Content of Tab Pane 2`
    },
    {
      key: '5',
      label: `Hoàn thành`,
      children: `Content of Tab Pane 3`
    },
    {
      key: '6',
      label: `Đã hủy`,
      children: `Content of Tab Pane 3`
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

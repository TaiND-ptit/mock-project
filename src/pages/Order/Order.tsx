import { Wrapper, OrderContainer } from'./Order.styled';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import MenuAccount from 'components/commons/MenuAccount/MenuAccount';
import { AccountRight, AccountWrapper } from 'pages/MyAccount/MyAccount.styled';

const onChange = (key: string) => {
  // console.log(key);
};

const Order = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tất cả`,
      children: `Content of Tab Pane 1`
    },
    {
      key: '2',
      label: `Chờ thanh toán`,
      children: `Content of Tab Pane 2`
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
        <MenuAccount/>
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

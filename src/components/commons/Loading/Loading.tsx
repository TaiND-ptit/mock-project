import { Spin } from 'antd';
import { Wrapper } from './Loading.styled';

const Loading = () => {
  return (
    <Wrapper>
      <Spin size='large' />
    </Wrapper>
  );
};

export default Loading;

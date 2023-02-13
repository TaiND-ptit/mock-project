import images from 'assets/images';
import { NotFoundcontainer, ErrorImgWrapper, NotFoundTitle, NotFoundImg, BackHome } from './NotFound.styled';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <NotFoundcontainer>
      <ErrorImgWrapper>
        <NotFoundImg src={images.errorImg.errorImg} />
      </ErrorImgWrapper>
      <NotFoundTitle>404 | Not Found.</NotFoundTitle>
      <BackHome>
        <Link to='/'>Trở về trang chủ</Link>
      </BackHome>
    </NotFoundcontainer>
  );
};

export default NotFound;

import images from 'assets/images';
import { Wrapper, BannerMiddleContainer, BannerMiddleImg } from './BannerMiddle.styled';

const BannerMiddle = () => {
  return (
    <Wrapper>
      <BannerMiddleContainer>
        <BannerMiddleImg src={images.bannerMiddle.bannerMiddle} alt='image-banner' />
      </BannerMiddleContainer>
    </Wrapper>
  );
};

export default BannerMiddle;

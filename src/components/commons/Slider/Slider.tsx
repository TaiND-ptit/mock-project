import images from 'assets/images';
import {
  SliderContainer,
  BannerSlider,
  SliderItem,
  SliderImg,
  BannerRight,
  BannerRightList,
  BannerRightItem,
  BannerRightImg
} from './Slider.styled';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
const Slider = () => {
  return (
    <SliderContainer>
      <BannerSlider className='w-70'>
        <Carousel autoplay>
          <SliderItem>
            <SliderImg src={images.bannerSlider.bannerLeft.BannerLeft1} alt='Banner slider 1' />
          </SliderItem>
          <SliderItem>
            <SliderImg src={images.bannerSlider.bannerLeft.BannerLeft2} alt='Banner slider 2' />
          </SliderItem>
          <SliderItem>
            <SliderImg src={images.bannerSlider.bannerLeft.BannerLeft3} alt='Banner slider 3' />
          </SliderItem>
          <SliderItem>
            <SliderImg src={images.bannerSlider.bannerLeft.BannerLeft4} alt='Banner slider 4' />
          </SliderItem>
          <SliderItem>
            <SliderImg src={images.bannerSlider.bannerLeft.BannerLeft5} alt='Banner slider 5' />
          </SliderItem>
        </Carousel>
      </BannerSlider>
      <BannerSlider className='w-30'>
        <BannerRight>
          <BannerRightList>
            <BannerRightItem>
              <Link to=''>
                <BannerRightImg src={images.bannerSlider.bannerRight.BannerRight1} alt='Banner slider right 1' />
              </Link>
            </BannerRightItem>
            <BannerRightItem className='banner-right-second'>
              <Link to=''>
                <BannerRightImg src={images.bannerSlider.bannerRight.BannerRight2} alt='Banner slider right 1' />
              </Link>
            </BannerRightItem>
          </BannerRightList>
        </BannerRight>
      </BannerSlider>
    </SliderContainer>
  );
};

export default Slider;

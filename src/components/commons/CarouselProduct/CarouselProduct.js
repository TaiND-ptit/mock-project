import { Carousel } from 'react-carousel-minimal';

const CarouselProduct = ({ dataImages }) => {
  const test = dataImages?.map((img) => ({ image: `http://dung.fresher.ameladev.click/storage/uploads/${img.image}` }));
  return (
    <Carousel
      data={test}
      width='100%'
      height='auto'
      radius='10px'
      slideNumber={true}
      captionPosition='bottom'
      pauseIconColor='white'
      pauseIconSize='40px'
      slideBackgroundColor='darkgrey'
      slideImageFit='cover'
      thumbnails={true}
      thumbnailWidth='100px'
    />
  );
};

export default CarouselProduct;

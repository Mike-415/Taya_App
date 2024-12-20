import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const carouselImages = [
    '/z1.jpg',
    '/z2.jpg',
    '/z4.png',
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      stopOnHover={true}
    >
      {carouselImages.map((image, index) => (
        <div key={index}>
          {/* <img src={process.env.PUBLIC_URL + image} alt={`Slide ${index}`} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} /> */}
          <img src={process.env.PUBLIC_URL + image} alt={`Slide ${index}`} style={{ height: '100vh', objectFit: 'contain' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
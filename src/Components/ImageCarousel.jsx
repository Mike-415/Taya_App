import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const carouselImages = [
    '/Taya_Forrest.png',
    '/Taya_Orange.jpeg',
    '/pic3.png',
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
          <img src={process.env.PUBLIC_URL + image} alt={`Slide ${index}`} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

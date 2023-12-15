import React, { useState } from 'react';

const carouselContainerStyle = {
  height: '100vh', // Set the carousel container to fill the viewport height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative', // For absolute positioning of navigation buttons
};

const imageStyle = {
  maxHeight: '100%', // Ensure the image doesn't exceed the container height
  maxWidth: '100%', // Ensure the image doesn't exceed the container width
  objectFit: 'contain', // Maintain the aspect ratio of the image
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: 'none',
  padding: '10px',
};

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={carouselContainerStyle}>
      <button onClick={goToPrevious} style={{ ...buttonStyle, left: '10px' }}>Previous</button>
      <img src={process.env.PUBLIC_URL + images[currentIndex]} alt={`Slide ${currentIndex}`} style={imageStyle} />
      <button onClick={goToNext} style={{ ...buttonStyle, right: '10px' }}>Next</button>
    </div>
  );
};

// Your App component
const App = () => {
  const imageArray = ['/pic1.png', '/pic2.png', '/pic3.png'];

  return (
    <div>
      <Carousel images={imageArray} />
      <div style={{ padding: '20px' }}>
        {/* Additional content goes here */}
        <p>More content...</p>
      </div>
    </div>
  );
};

export default App;

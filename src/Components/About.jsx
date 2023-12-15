import React from 'react';

const aboutStyle = {
    padding: '20px 10px',
    textAlign: 'center', // Center-align the text
    maxWidth: '800px',
    margin: '0 auto', // Center the container itself
    fontSize: 'calc(16px + 0.5vw)', // Responsive font size
    lineHeight: '1.6',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
};

const imageStyle = {
    maxWidth: '100%', // Ensure the image is responsive and does not overflow the container
    height: 'auto', // Maintain the aspect ratio of the image
    margin: '20px 0', // Add some vertical space around the image
};


const About = () => (
    <div style={aboutStyle}>
        <h2>About Us</h2>
        <img
            src={process.env.PUBLIC_URL + '/Taya_Orange.jpeg'} // Replace with your image path
            alt="About Us"
            style={imageStyle}
        />
        <p>
            Welcome to our website! Here you will find information about our activities,
            mission, and team. We are dedicated to providing the best experience and
            value to our users. Stay tuned for updates and news!
        </p>
    </div>
);

export default About;


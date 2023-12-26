import React from 'react';

const aboutStyle = {
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
};

const videoContainerStyle = {
    position: 'relative',
    paddingBottom: '56.25%', // This sets the aspect ratio to 16:9
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
    margin: '20px 0', // Add some vertical space around the video
};

const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
};

const paragraphStyle = {
    textAlign: 'justify',
    // The 1st string arg for top and bottom
    // The 2nd string arg for top and bottom
    margin: 'calc(64px + 0.5vw) calc(24px + 0.5vw)',
    fontSize: 'calc(18px + 0.5vw)',
    lineHeight: '1.4',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
};


const section_titles = {
    margin: 'calc(32px + 0.5vw) calc(24px + 0.5vw)',
    fontSize: 'calc(64px + 0.5vw)',
    lineHeight: '1',
};

const About = () => (
    <div style={aboutStyle}>
        <h1 style={section_titles}>Welcome Taya!</h1>
        <div style={videoContainerStyle}>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/Iq8h3GEe22o?si=2WMkK2yfZyR5Fawj"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            />
        </div>
        <p style={paragraphStyle}>
            🌈 Hello Taya! Welcome to this wonderful space created just for you! This website is a little world of joy where you'll find delightful surprises and lots of love. 🎉<br /><br />

            Here, there are beautiful messages, and heartwarming stories waiting for you. You’ll also find cheerful videos that are sure to make you smile! 😊<br /><br />

            I'm always thinking of new and exciting things to add here, so every time you visit, keep an eye out for new surprises and fun adventures! 🎁🌟<br /><br />

            This place is all about sharing happiness, laughter, and magical moments. I hope it brings a big smile to your face and warms your heart every time you see it.<br /><br />

            Sending you lots of love and joy,<br />
            Michael Anthony Gonzalez 💖
        </p>
    </div>
);

export default About;



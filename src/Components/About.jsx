import React from 'react';

const aboutStyle = {
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    fontSize: 'calc(12px + 0.5vw)',
    lineHeight: '1.2',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
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
    margin: 'calc(16px + 0.5vw)',
};

const About = () => (
    <div style={aboutStyle}>
        <h1>Welcome Taya!</h1>
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







// import React from 'react';

// const aboutStyle = {
//     // padding: '20px 10px',
//     textAlign: 'center', // Center-align the text
//     maxWidth: '1000px',
//     margin: '0 auto', // Center the container itself
//     fontSize: 'calc(14px + 0.5vw)', // Responsive font size
//     lineHeight: '1',
//     fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//       "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//       sans-serif`,

// };

// const videoStyle = {
//     maxWidth: '100%', // Ensure the image is responsive and does not overflow the container
//     height: 'auto', // Maintain the aspect ratio of the image
//     //margin: '20px 0', // Add some vertical space around the image
// };

// const paragraphStyle = {
//     textAlign: 'justify',
//     margin: 'calc(16px + 0.5vw)',
// };


// const About = () => (
//     <div style={aboutStyle}>
//         <h2>About Us</h2>
//         <iframe
//             maxwidth="100%"
//             height="auto"
//             src="https://www.youtube.com/embed/Iq8h3GEe22o?si=2WMkK2yfZyR5Fawj"
//             title="YouTube video player"
//             frameBorder="0"
//             //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//         //style={videoStyle} 
//         />

//         {/*<img
//             src={process.env.PUBLIC_URL + '/Taya_Orange.jpeg'} // Replace with your image path
//             alt="Introduction"
//             style={imageStyle}
// /> */}
<p style={paragraphStyle}>
    🌈 Hello Taya! Welcome to this wonderful space created just for you! This website is a little world of joy where you'll find delightful surprises and lots of love. 🎉<br /><br />

    Here, there are beautiful messages, and heartwarming stories waiting for you. You’ll also find cheerful videos that are sure to make you smile! 😊<br /><br />

    I'm always thinking of new and exciting things to add here, so every time you visit, keep an eye out for new surprises and fun adventures! 🎁🌟<br /><br />

    This place is all about sharing happiness, laughter, and magical moments. I hope it brings a big smile to your face and warms your heart every time you see it.<br /><br />

    Sending you lots of love and joy,<br />
    Michael Anthony Gonzalez 💖
</p>
//     </div>
// );

// export default About;


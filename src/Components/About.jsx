import React from 'react';

const aboutStyle = {
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
};

// const videoContainerStyle = {
//     position: 'relative',
//     paddingBottom: '56.25%', // This sets the aspect ratio to 16:9
//     height: 0,
//     overflow: 'hidden',
//     maxWidth: '100%',
//     margin: '20px 0', // Add some vertical space around the video
// };

// const videoStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
// };

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
        {/* <div style={videoContainerStyle}>
            <iframe
                style={videoStyle}
                src="https://www.youtube.com/embed/Iq8h3GEe22o?si=2WMkK2yfZyR5Fawj"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            />
        </div> */}
        <p style={paragraphStyle}>
            Hi Taya! Welcome to this little corner of the internet that's just for you and me. I created this website because I wanted you to have a special place where you can always find a piece of me, no matter where we are. Think of it as a magical bridge that connects us, a place filled with memories, stories, and lots of love. It's our own little world, and I'm so excited to share it with you.<br /><br />

            I've got so many surprises planned for this site. I'll be updating it with all kinds of amazing content – stories about our family, fun facts, pictures, and even some secrets about the universe! So, remember to visit here often. Who knows what new treasures you'll find each time? Maybe a story, a photo, or a fun game waiting just for you. It's going to be a wonderful adventure, and I can't wait for you to see what's next.<br /><br />

            Most importantly, Taya, I want you to know how much I love you. You are the brightest star in my sky, and thinking of you lights up my whole day. This website is a big hug from me to you, a reminder that no matter where we are, my love is always with you. <br /><br />
        </p>


    </div>
);

export default About;



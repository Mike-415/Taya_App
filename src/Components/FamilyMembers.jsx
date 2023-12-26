import React from 'react';

const familyMembers = [
    {
        name: 'Grandma',
        image: '/mom.jpg',
        description: 'Your grandmother was born in a beautiful, small village in the Philippines called Tuguegarao. It\'s a place where her parents, your great-grandparents, were hardworking farmers, tending to the land with care and dedication.\n\nSeeking a brighter future filled with opportunities, she embarked on a big adventure in her twenties, all the way to America, and made a new home in San Francisco. It\'s a city she fell in love with, just like we do every day!\n\nYour grandma is an incredibly smart and hard-working'
    },
    {
        name: 'Grandpa',
        image: '/dad.jpg',
        description: 'Your grandfather was born in Sonora, Mexico, which is a beautiful and sunny place. He spent his childhood there, soaking up the vibrant culture and warmth of Mexico, until he was a teenager. Then, he embarked on a big adventure with his family, moving all the way to San Francisco.\n\nYour grandfather has a different kind of talent from ours – he\'s an incredible soccer player! He used to play so well that he became quite well-known and respected throughout the Bay Area. It\'s like he could do magic with a soccer ball!\n\nMore than anything, he\'s a man of great character. He\'s honest, kind, and deeply empathetic, always standing up for what\'s right. He\'s the kind of person who inspires everyone around him to be better.\n\nWe often talk about you, and he always has the sweetest things to say. He loves you so much and is really looking forward to seeing you soon. He\'s got so many stories and hugs waiting just for you.'
    },
    {
        name: 'Me',
        image: '/me.jpg',
        description: 'I was born in the lively city of San Francisco on December 22, 1982. It\'s a city as fun and colorful as our wonderful family, with its vibrant Mexican and Filipino communities, much like us.\nWhen I was a kid, just like you, I loved using my imagination to create beautiful things. I spent hours drawing pictures, bringing my ideas to life on paper. It was my way of exploring worlds beyond our own.\nIt is truly amazing to see how much we share in common, especially our passions. My first love was drawing. But as I grew up, I found myself drawn to the rhythm and energy of dancing. The very first dance move I mastered was the side glide. From there, I discovered the world of popping – a cool style of dance that is all about sharp movements and fun. It is a big part of hip-hop dance, which from what I understand is your favorite style.'
    }
    // Add more family members as needed
];



const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
};

const memberStyle = {
    margin: '20px',
    maxWidth: '300px',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '50%', // Circular images
};

const sectionTitleStyle = {
    margin: 'calc(32px + 0.5vw) calc(24px + 0.5vw)',
    fontSize: 'calc(64px + 0.5vw)',
    lineHeight: '1',
    textAlign: 'center', // Center the section title
};

const FamilyMembers = () => (
    <div>
        <h1 style={sectionTitleStyle}>Family Members</h1>
        <div style={containerStyle}>
            {familyMembers.map(member => (
                <div key={member.name} style={memberStyle}>
                    <img src={member.image} alt={member.name} style={imageStyle} />
                    <h2>{member.name}</h2>
                    <p>{member.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default FamilyMembers;

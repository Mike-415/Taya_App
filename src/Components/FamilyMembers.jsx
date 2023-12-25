import React from 'react';

const familyMembers = [
    { name: 'Member 1', image: '/Taya_Forrest.png', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' },
    { name: 'Member 2', image: '/Taya_Forrest.png', description: 'Description for Member 2' },
    { name: 'Member 3', image: '/Taya_Forrest.png', description: 'Description for Member 3' },
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

const FamilyMembers = () => (
    <div style={containerStyle}>
        {familyMembers.map(member => (
            <div key={member.name} style={memberStyle}>
                <img src={member.image} alt={member.name} style={imageStyle} />
                <h3>{member.name}</h3>
                <p>{member.description}</p>
            </div>
        ))}
    </div>
);

export default FamilyMembers;

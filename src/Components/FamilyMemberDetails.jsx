import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: '999',
  maxWidth: '600px', // Adjust as needed
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '15px', // Match the modal borderRadius
};

const closeBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

const FamilyMemberDetails = ({ name, image, description, onClose }) => {
  return (
    <div style={modalStyle}>
      <span style={closeBtnStyle} onClick={onClose}>
        Close
      </span>
      <h2>{name}</h2>
      <img src={image} alt={name} style={imageStyle} />
      <p>{description}</p>
    </div>
  );
};

export default FamilyMemberDetails;

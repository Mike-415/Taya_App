// Modal.js
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const Modal = ({ setShowModal }) => {
    const { width, height } = useWindowSize();

    useEffect(() => {
        // Set a timer to fade out the modal after 4 seconds
        const timer = setTimeout(() => {
            setShowModal(false); // Hide the modal after 6 seconds
        }, 6000);

        return () => clearTimeout(timer); // Clean up the timer
    }, [setShowModal]);

    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'opacity 2s ease-in-out 4s', // Fade out starts after 4 seconds and takes 2 seconds
        opacity: 1, // Start fully visible
    };

    const imageStyle = {
        width: '100vw', // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
        objectFit: 'cover', // Cover the entire area of the modal
        position: 'absolute', // Position it absolutely to ensure it covers the modal area
    };

    return (
        <div className="modal" style={modalStyle}>
            <Confetti width={width} height={height} />
            <img
                src={`${process.env.PUBLIC_URL}/Birthday_Cake.jpeg`}
                alt="Birthday Cake"
                style={imageStyle}
            />
        </div>
    );
};

export default Modal;

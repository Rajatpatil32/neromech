import React, { useState } from 'react';
import ImgBk from '../assets/robot-arm-bk.png';

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section style={styles.hero}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Revolutionize Your Industry with Advanced Robotics</h1>
                <p style={styles.description}>
                    Our cutting-edge robotic solutions empower businesses to achieve new levels of efficiency, precision, and productivity. Experience the future of automation today.
                </p>
                <button
                    style={{
                        ...styles.button,
                        backgroundColor: isHovered ? '#ccc' : '#fff',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Explore Our Solutions
                </button>
            </div>
        </section>
    );
};



const styles = {
    hero: {
        backgroundImage: `url(${ImgBk})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5rem',
        color: '#fff',
        minHeight: '100vh',
    },

    content: {
        textAlign: 'center',
        maxWidth: '800px',
    },
    heading: {
        fontSize: '3rem',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '20px',
        lineHeight: '1.5',
    },
    button: {
        color: '#000',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
    },
};

export default HeroSection;

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
        flexDirection: 'column', // Ensure content stacks in a column on small screens
        padding: '4rem 2rem',
        color: '#fff',
        minHeight: '100vh',
        textAlign: 'center',
    },

    content: {
        textAlign: 'center',
        maxWidth: '600px', // Reduce max width for better appearance on smaller devices
        padding: '0 20px', // Add horizontal padding for smaller screens
    },

    heading: {
        fontSize: '2.5rem', // Adjust font size for mobile
        marginBottom: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.3',
    },

    description: {
        fontSize: '1rem', // Slightly smaller text for better readability on mobile
        marginBottom: '1.5rem',
        lineHeight: '1.6',
    },

    button: {
        color: '#000',
        padding: '12px 24px', // Slightly smaller for better touch usability on mobile
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem', // Larger text for accessibility
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
    },

    // Responsive styles
    '@media (max-width: 768px)': {
        hero: {
            padding: '3rem 1rem',
        },
        heading: {
            fontSize: '2rem', // Reduce font size slightly for tablets
        },
        description: {
            fontSize: '0.95rem', // Keep text clear and readable
        },
        button: {
            padding: '10px 20px', // Slightly adjust button size
        },
    },

    '@media (max-width: 480px)': {
        hero: {
            padding: '2rem 1rem',
        },
        heading: {
            fontSize: '1.8rem', // Keep heading clear on mobile
        },
        description: {
            fontSize: '0.9rem',
        },
        button: {
            padding: '10px 18px',
            fontSize: '0.9rem', // Adjust text size for mobile buttons
        },
    },
};

export default HeroSection;

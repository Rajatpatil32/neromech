import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ImgBk from '../assets/background.jpg';
import RobotArmImg from '../assets/roboticArms.jpg';
import HomeAutomationImg from '../assets/homeAutomation.jpg';
import CobotsImg from '../assets/cobots.jpg';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration for each section
            once: false,     // Only animate once as the user scrolls
        });
    }, []);

    const sections = [
        {
            title: "Robotic Arms",
            description: "Engineered for precision, our robotic arms excel in manufacturing, healthcare, and research. They redefine automation with capabilities ranging from material handling to delicate surgeries.",
            imgSrc: RobotArmImg,
            textFirst: false, // Image on the left, text on the right
        },
        {
            title: "Home Automation",
            description: "Simplify your life with smart solutions. Our home automation systems offer unparalleled convenience, security, and energy efficiency, empowering you to control your space effortlessly.",
            imgSrc: HomeAutomationImg,
            textFirst: true, // Text on the left, image on the right
        },
        {
            title: "Cobots Technologies",
            description: "Collaborative robots (cobots) redefine workplace automation. Safe and efficient, cobots work alongside humans, optimizing productivity without compromising safety.",
            imgSrc: CobotsImg,
            textFirst: false, // Image on the left, text on the right
        },
    ];

    return (
        <section style={styles.hero}>
            {/* Hero Content */}
            <div style={styles.heroContent} data-aos="fade-in">
                <h1 style={styles.heading}>Revolutionize Your Industry with Advanced Robotics</h1>
                <p style={styles.description}>
                    Experience cutting-edge robotic solutions designed to elevate your efficiency, precision, and productivity. Step into the future of automation today.
                </p>
            </div>

            {/* Technology Sections */}
            {sections.map((section, index) => (
                <div
                    key={index}
                    style={{
                        ...styles.section,
                        flexDirection: section.textFirst ? 'row-reverse' : 'row',
                    }}
                    data-aos="fade-up"
                >
                    <img src={section.imgSrc} alt={section.title} style={styles.image} />
                    <div style={styles.textContent}>
                        <h2 style={styles.subHeading}>{section.title}</h2>
                        <p style={styles.sectionDescription}>{section.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

const styles = {
    hero: {
        backgroundImage: `url(${ImgBk})`, // Reapply background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        textAlign: 'center',
        padding: '4rem 2rem',
        minHeight: '150vh',
    },

    heroContent: {
        maxWidth: '600px',
        margin: '0 auto',
    },

    heading: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        lineHeight: '1.3',
    },

    description: {
        fontSize: '1rem',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },

    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '4rem 0',
        padding: '0 2rem',
    },

    textContent: {
        maxWidth: '50%',
    },

    image: {
        width: '40%',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    },

    subHeading: {
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#61dafb',
    },

    sectionDescription: {
        fontSize: '1rem',
        lineHeight: '1.5',
    },

    // Responsive Styles
    '@media (max-width: 768px)': {
        section: {
            flexDirection: 'column', // Stack image and text vertically
            textAlign: 'center',
        },
        textContent: {
            maxWidth: '100%',
        },
        image: {
            width: '80%',
            marginBottom: '1rem',
        },
    },
};

export default HeroSection;

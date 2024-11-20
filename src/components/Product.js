import React from 'react';
import { FaRobot } from 'react-icons/fa';

const ProductPage = () => {
    const products = [
        {
            name: 'Yaskawa',
            description:
                'Yaskawa’s industry-leading robotics provide precision and reliability. From assembly to welding, redefine automation with Yaskawa’s versatile solutions.',
            features: ['Precision Control', 'Reliable Operation', 'Energy Efficiency'],
        },
        {
            name: 'Fanuc',
            description:
                'Fanuc robotics bring innovative automation to your workflow. Explore scalable solutions perfect for factories of all sizes.',
            features: ['Advanced AI', 'Compact Design', 'Global Support'],
        },
        {
            name: 'ABB',
            description:
                'ABB offers cutting-edge robotics tailored for maximum productivity. Enhance your business with their high-performance systems.',
            features: ['Customizable Solutions', 'Seamless Integration', 'Smart Connectivity'],
        },
    ];

    return (
        <section style={styles.page}>
            <h1 style={styles.heading}>Our Robotics Portfolio</h1>
            <p style={styles.subHeading}>
                Discover our range of robotics solutions, designed to revolutionize your
                industry. Explore the features and benefits of each product below.
            </p>
            <div style={styles.productList}>
                {products.map((product, index) => (
                    <div key={index} style={styles.productCard}>
                        <div style={styles.icon}>
                            <FaRobot size={50} color="#007bff" />
                        </div>
                        <h2 style={styles.productName}>{product.name}</h2>
                        <p style={styles.description}>{product.description}</p>
                        <ul style={styles.featureList}>
                            {product.features.map((feature, i) => (
                                <li key={i} style={styles.feature}>
                                    • {feature}
                                </li>
                            ))}
                        </ul>
                        <button style={styles.button}>Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
    },
    heading: {
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
        color: '#666',
        textAlign: 'center',
        maxWidth: '800px',
        lineHeight: '1.5',
    },
    productList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
    },
    productCard: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
        maxWidth: '350px',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    },
    productCardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    },
    icon: {
        marginBottom: '1rem',
    },
    productName: {
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#007bff',
        fontWeight: '600',
    },
    description: {
        fontSize: '1rem',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
        color: '#555',
    },
    featureList: {
        listStyleType: 'none',
        padding: 0,
        marginBottom: '1.5rem',
    },
    feature: {
        fontSize: '0.9rem',
        color: '#444',
        lineHeight: '1.4',
    },
    button: {
        color: '#fff',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
};

export default ProductPage;

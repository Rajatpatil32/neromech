import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const ProductPage = () => {
    const products = [
        {
            name: 'Yaskawa',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Yaskawa_robot.jpg',
            description:
                'Yaskawa’s industry-leading robotics provide precision and reliability. From assembly to welding, redefine automation with Yaskawa’s versatile solutions.',
            features: ['Precision Control', 'Reliable Operation', 'Energy Efficiency'],
        },
        {
            name: 'Fanuc',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Fanuc_Robots_in_Action.jpg',
            description:
                'Fanuc robotics bring innovative automation to your workflow. Explore scalable solutions perfect for factories of all sizes.',
            features: ['Advanced AI', 'Compact Design', 'Global Support'],
        },
        {
            name: 'ABB',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/ABB_Industrial_Robot.jpg',
            description:
                'ABB offers cutting-edge robotics tailored for maximum productivity. Enhance your business with their high-performance systems.',
            features: ['Customizable Solutions', 'Seamless Integration', 'Smart Connectivity'],
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '4rem 2rem',
                backgroundColor: '#f5f5f5',
                minHeight: '100vh',
            }}
        >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
                Our Robotics Portfolio
            </h1>
            <p
                style={{
                    fontSize: '1.2rem',
                    marginBottom: '3rem',
                    color: '#666',
                    textAlign: 'center',
                    maxWidth: '800px',
                }}
            >
                Discover our range of robotics solutions, designed to revolutionize your industry. Explore the features
                and benefits of each product below.
            </p>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#fff',
                            padding: '1.5rem',
                            borderRadius: '15px',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={() => openModal(product)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <img
                            src={product.image}
                            alt={`${product.name} Image`}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                                marginBottom: '1rem',
                            }}
                        />
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: '600',
                                color: '#007bff',
                            }}
                        >
                            {product.name}
                        </h2>
                        <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#555' }}>
                            {product.description}
                        </p>
                        <button
                            style={{
                                color: '#fff',
                                backgroundColor: '#007bff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'transform 0.3s ease, background-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.backgroundColor = '#0056b3';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.backgroundColor = '#007bff';
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '2rem',
                            borderRadius: '10px',
                            maxWidth: '500px',
                            width: '90%',
                            position: 'relative',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                fontSize: '1.5rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
                            {selectedProduct.name}
                        </h2>
                        <img
                            src={selectedProduct.image}
                            alt={`${selectedProduct.name} Image`}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                                marginBottom: '1rem',
                            }}
                        />
                        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
                            {selectedProduct.description}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {selectedProduct.features.map((feature, i) => (
                                <li
                                    key={i}
                                    style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.5rem' }}
                                >
                                    • {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductPage;

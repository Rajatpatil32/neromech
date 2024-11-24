import React, { useState } from 'react';

const ContactTab = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call (you can integrate a real API here)
        console.log(formData);
        setIsSubmitted(true);
    };

    return (
        <section style={styles.page}>
            <h1 style={styles.heading}>Get in Touch</h1>
            <p style={styles.subHeading}>
                Have questions or need assistance? We'd love to hear from you. Fill out the form below, and our team will get back to you shortly.
            </p>
            <div style={styles.formContainer}>
                {isSubmitted ? (
                    <p style={styles.thankYouMessage}>
                        Thank you for reaching out! We'll respond as soon as possible.
                    </p>
                ) : (
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={styles.input}
                                required
                                placeholder="Enter your name"
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={styles.input}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                style={styles.textarea}
                                required
                                placeholder="Type your message here"
                            ></textarea>
                        </div>
                        <button type="submit" style={styles.button}>Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
};

const styles = {
    page: {
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
        justifyContent: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#2C3E50',
        marginBottom: '1rem',
        textAlign: 'center',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    subHeading: {
        fontSize: '1.2rem',
        color: '#7F8C8D',
        textAlign: 'center',
        marginBottom: '2rem',
        lineHeight: '1.5',
        maxWidth: '600px',
        fontStyle: 'italic',
    },
    formContainer: {
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
    },
    thankYouMessage: {
        fontSize: '1.2rem',
        color: '#28a745',
        textAlign: 'center',
        marginTop: '1rem',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontSize: '1rem',
        color: '#2C3E50',
        fontWeight: '500',
    },
    input: {
        padding: '0.75rem',
        fontSize: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: '#ecf0f1',
    },
    inputFocus: {
        borderColor: '#3498db',
        boxShadow: '0 0 5px rgba(52, 152, 219, 0.7)',
    },
    textarea: {
        padding: '0.75rem',
        fontSize: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        minHeight: '150px',
        outline: 'none',
        resize: 'vertical',
        backgroundColor: '#ecf0f1',
    },
    button: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#3498db',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
    },
    buttonHover: {
        backgroundColor: '#2980b9',
    },
    '@media (max-width: 768px)': {
        page: {
            padding: '3rem 1.5rem',
        },
        heading: {
            fontSize: '2rem',
        },
        subHeading: {
            fontSize: '1rem',
        },
        formContainer: {
            padding: '1.5rem',
        },
        input: {
            padding: '0.5rem',
        },
        textarea: {
            padding: '0.5rem',
        },
        button: {
            padding: '0.5rem 1rem',
        },
    },
    '@media (max-width: 480px)': {
        page: {
            padding: '2rem 1rem',
        },
        heading: {
            fontSize: '1.8rem',
        },
        subHeading: {
            fontSize: '0.9rem',
        },
        formContainer: {
            padding: '1rem',
        },
        input: {
            padding: '0.5rem',
        },
        textarea: {
            padding: '0.5rem',
        },
        button: {
            padding: '0.5rem 1rem',
        },
    },
};

export default ContactTab;

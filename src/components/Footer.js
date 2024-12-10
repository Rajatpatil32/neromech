import React from 'react';
import Logo from '../assets/NETRA.png'; // Import your logo here

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p style={textStyle}>123 Main Street,</p>
          <p style={textStyle}>Suite 456,</p>
          <p style={textStyle}>Indore, Madhya Pradesh, 452005</p>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Email</h3>
          <p style={textStyle}>
            <a href="mailto:netra.automation@gmail.com" style={linkStyle}>
            netra.automation@gmail.com
            </a>
          </p>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Phone</h3>
          <p style={textStyle}>
            <a href="tel:+919826992021" style={linkStyle}>
            +919826992021
            </a>
          </p>
        </div>
      </div>
      <div style={bottomStyleLogo}>
        <img src={Logo} alt="Company Logo" style={logoStyle} />
      </div>
      <div style={bottomStyle}>
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// Inline styles
const footerStyle = {
  backgroundColor: 'rgb(11, 15, 20)',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '0 10px',
};

const sectionStyle = {
  margin: '10px',
  minWidth: '200px',
};

const headingStyle = {
  fontSize: '1.2rem',
  marginBottom: '10px',
};

const textStyle = {
  margin: '5px 0',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
};

const bottomStyleLogo = {
  marginTop: '20px',
  borderTop: '1px solid #444',
  paddingTop: '10px',
  textAlign: 'center',
};

const bottomStyle = {
  marginTop: '20px',
  paddingTop: '10px',
  textAlign: 'center',
};

const logoStyle = {
  width: '25%', 
  marginBottom: '10px',
  height: 'auto'
};

export default Footer;

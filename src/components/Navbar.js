import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="Logo"
          style={styles.logo}
        />
      </Link>
      {/* <img
        src={logo}
        alt="Logo"
        style={styles.logo}
      /> */}
      <nav style={styles.nav}>
        <ul style={styles.navLinks}>
          <NavItem linkText="About Us" linkTo="/about" />
          <NavItem linkText="Products" linkTo="/products" />
          <NavItem linkText="Contact" linkTo="/contact" />
        </ul>
      </nav>
    </nav>
  );
};

const NavItem = ({ linkText, linkTo = "#" }) => { // Default linkTo to "#" if not provided
  return (
    <li style={styles.navItem}>
      <Link to={linkTo} style={styles.navLink}>
        {linkText}
      </Link>
    </li>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',

    background: '#0b0f14',
    color: '#fff',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #fff',
    objectFit: 'cover',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },

  // Adding hover effect for logo
  logoHover: {
    '&:hover': {
      transform: 'scale(1.1)',  // Slight zoom effect
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',  // Stronger shadow on hover
    }
  },
  navLinks: {
    display: 'flex', // Flexbox layout for the navigation items
    gap: '1rem',
    listStyle: 'none',
    marginTop: '15px',
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff', // White text color
    padding: '0.3rem 2rem',
    borderRadius: '5px',
    transition: 'color 0.4s ease',
  },
};

export default Navbar;

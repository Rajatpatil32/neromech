import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
  const navRef = useRef(null); // Ref for navbar
  const logoRef = useRef(null); // Ref for logo
  const leftNavRef = useRef(null); // Ref for leftmost nav item

  // Resize function to detect when hamburger should appear
  const handleResize = () => {
    if (window.innerWidth <= 800) { // Mobile view at 600px or below
      setIsHamburgerVisible(true); // Always show hamburger on mobile
    } else {
      setIsHamburgerVisible(false); // Hide hamburger in desktop view
    }
  };

  useEffect(() => {
    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize); // Listen to window resize events
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  const toggleMobileMenu = () => {
    if (isHamburgerVisible) {
      setIsMobileMenuOpen(!isMobileMenuOpen); // Only toggle in mobile view
    }
  };

  return (
    <nav ref={navRef} style={styles.navbar}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img ref={logoRef} src={logo} alt="Logo" style={styles.logo} />
      </Link>

      {/* Hamburger Menu for Mobile */}
      {isHamburgerVisible && (
        <div style={styles.hamburger} onClick={toggleMobileMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <ul
          style={
            isMobileMenuOpen
              ? {
                  ...styles.navLinksMobile,
                  display: 'flex',
                }
              : {
                  ...styles.navLinks,
                  display: isHamburgerVisible ? 'none' : 'flex',
                }
          }
        >
          <NavItem ref={leftNavRef} linkText="About Us" linkTo="/about" toggleMobileMenu={toggleMobileMenu} />
          <NavItem linkText="Products" linkTo="/products" toggleMobileMenu={toggleMobileMenu} />
          <NavItem linkText="Contact" linkTo="/contact" toggleMobileMenu={toggleMobileMenu} />
        </ul>
      </nav>
    </nav>
  );
};

const NavItem = React.forwardRef(({ linkText, linkTo = '#', toggleMobileMenu }, ref) => {
  const handleClick = () => {
    toggleMobileMenu(); // Close the menu on click
  };

  return (
    <li ref={ref} style={styles.navItem}>
      <Link to={linkTo} style={styles.navLink} onClick={handleClick}>
        {linkText}
      </Link>
    </li>
  );
});

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#0b0f14',
    color: '#fff',
    position: 'relative',
    zIndex: 10,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    filter: 'brightness(0) invert(1)', 
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '2rem',
    transition: 'opacity 0.3s ease',
  },
  navLinksMobile: {
    display: 'none',
    flexDirection: 'column',
    listStyle: 'none',
    padding: '1rem 0',
    margin: 0,
    gap: '1rem',
    backgroundColor: '#212121',
    position: 'absolute',
    top: '60px',
    right: '0',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    zIndex: 9,
    alignItems: 'center',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    padding: '0.6rem 2rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textAlign: 'center',
    width: '100%',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '20px',
    cursor: 'pointer',
    zIndex: 10,
    position: 'absolute',
    right: '20px',
    transition: 'transform 0.3s ease',
  },
  bar: {
    height: '3px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '2px',
  },
};

export default Navbar;

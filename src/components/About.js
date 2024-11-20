import React from 'react';
import TeamMemberImg from '../assets/team-member.jpg';
import HeroImg from '../assets/hero-image.jpg';

const AboutPage = () => {
  return (
    <div style={styles.aboutPage}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>About Us</h1>
          <p style={styles.heroDescription}>
            A brief overview of our company's mission and values. Discover how we are revolutionizing the industry.
          </p>
          <img src={HeroImg} alt="Hero" style={styles.heroImage} />
        </div>
      </section>

      {/* Company History */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our History</h2>
        <p style={styles.sectionText}>
          We started with a vision to bring innovation to industries, and today, we are proud to be pioneers in advanced robotics.
        </p>
      </section>

      {/* Our Team */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Team</h2>
        <div style={styles.team}>
          <div style={styles.teamMember}>
            <img src={TeamMemberImg} alt="Team Member" style={styles.teamImage} />
            <h3 style={styles.teamName}>[Team Member Name]</h3>
            <p style={styles.teamBio}>[Team Member's Bio]</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Mission and Vision */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Mission and Vision</h2>
        <p style={styles.sectionText}>
          <strong>Mission:</strong> To empower industries with cutting-edge robotics for unparalleled efficiency and precision.
        </p>
        <p style={styles.sectionText}>
          <strong>Vision:</strong> To shape the future of automation and set new benchmarks for excellence.
        </p>
      </section>

      {/* Core Values */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Core Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.valueItem}>Innovation</li>
          <li style={styles.valueItem}>Integrity</li>
          <li style={styles.valueItem}>Customer Success</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Contact Us</h2>
        <p style={styles.sectionText}>
          Reach out to us for inquiries, collaborations, or support.
        </p>
        <div style={styles.contactLinks}>
          <a href="mailto:your@email.com" style={styles.contactLink}>
            Email Us
          </a>
          <a href="tel:+1234567890" style={styles.contactLink}>
            Call Us
          </a>
        </div>
      </section>
    </div>
  );
};

const styles = {
  aboutPage: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  hero: {
    background: '#f4f4f4',
    textAlign: 'center',
    padding: '3rem 2rem',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroHeading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  heroImage: {
    maxWidth: '100%',
    borderRadius: '10px',
  },
  section: {
    padding: '2rem 2rem',
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  sectionText: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  team: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  teamMember: {
    maxWidth: '200px',
    textAlign: 'center',
  },
  teamImage: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  teamName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  teamBio: {
    fontSize: '0.9rem',
  },
  valuesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  valueItem: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  contactLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  contactLink: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  contactLinkHover: {
    backgroundColor: '#0056b3',
  },
};

export default AboutPage;

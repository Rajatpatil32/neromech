import React from 'react';
import TeamMemberImg from '../assets/team-member.jpg';
import HeroImg from '../assets/hero-image.jpg';

const AboutPage = () => {
  return (
    <div style={styles.aboutPage}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>About XYZ Robotics</h1>
          <p style={styles.heroDescription}>
            Transforming industries with cutting-edge robotics and AI solutions. Discover how we drive innovation and shape the future of automation.
          </p>
          <img src={HeroImg} alt="Cutting-edge Robotics Technology" style={styles.heroImage} />
        </div>
      </section>

      {/* Company History */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Journey</h2>
        <p style={styles.sectionText}>
          Founded in 2024 in Indore, Madhya Pradesh, India, XYZ Robotics specializes in integrating advanced industrial robots and cobots from global leaders like Fanuc, ABB, Kuka, and Yaskawa. Our solutions redefine automation for applications like material handling, packaging, palletizing, sorting, and more.  
        </p>
        <p style={styles.sectionText}>
          Driven by a commitment to innovation, we address industry challenges such as labor shortages, high costs, and safety risks with robotics and AI-powered automation. Our goal is to deliver smarter, safer, and more efficient operations for businesses worldwide.  
        </p>
      </section>

      {/* Our Team */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Meet the Team</h2>
        <div style={styles.team}>
          <div style={styles.teamMember}>
            <img src={TeamMemberImg} alt="Dedicated Team Member" style={styles.teamImage} />
            <h3 style={styles.teamName}>Rajat Patil</h3>
            <p style={styles.teamBio}>[Team Member's expertise in robotics and AI integration.]</p>
          </div>
          <div style={styles.teamMember}>
            <img src={TeamMemberImg} alt="Dedicated Team Member" style={styles.teamImage} />
            <h3 style={styles.teamName}>Ujjwal Bhati</h3>
            <p style={styles.teamBio}>[Team Member's expertise in robotics and AI integration.]</p>
          </div>
          <div style={styles.teamMember}>
            <img src={TeamMemberImg} alt="Dedicated Team Member" style={styles.teamImage} />
            <h3 style={styles.teamName}>Nitesh Bagora</h3>
            <p style={styles.teamBio}>[Team Member's expertise in robotics and AI integration.]</p>
          </div>
          {/* Additional team members can be added here */}
        </div>
      </section>

      {/* Mission and Vision */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Mission & Vision</h2>
        <p style={styles.sectionText}>
          <strong>Mission:</strong> To revolutionize industries with robotics and AI solutions that enhance productivity, reduce costs, and ensure safety.  
        </p>
        <p style={styles.sectionText}>
          <strong>Vision:</strong> To become a global leader in robotics and AI integration, creating intelligent systems that shape the future of industrial automation.
        </p>
      </section>

      {/* Core Values */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Core Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.valueItem}>Innovation</li>
          <li style={styles.valueItem}>Collaboration</li>
          <li style={styles.valueItem}>Customer Success</li>
          <li style={styles.valueItem}>Sustainability</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaHeading}>Connect with Us</h2>
        <p style={styles.ctaText}>
          Interested in collaborating or learning more? Reach out to our team today!
        </p>
        <div style={styles.ctaLinks}>
          <a href="mailto:your@email.com" style={styles.ctaLink}>
            Email Us
          </a>
          <a href="tel:+1234567890" style={styles.ctaLink}>
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
    lineHeight: '1.8',
  },
  hero: {
    background: 'linear-gradient(to right, #002f4b, #dc4225)',
    color: '#fff',
    textAlign: 'center',
    padding: '4rem 2rem',
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
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  section: {
    padding: '2rem',
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  sectionText: {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#555',
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
    padding: '50px'
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
    color: '#666',
  },
  valuesList: {
    listStyle: 'none',
    padding: 0,
  },
  valueItem: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  ctaSection: {
    backgroundColor: '#f4f4f4',
    padding: '2rem',
    textAlign: 'center',
  },
  ctaHeading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  ctaLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  ctaLink: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  ctaLinkHover: {
    backgroundColor: '#0056b3',
  },
};

export default AboutPage;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css'

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our company! We are dedicated to providing the best services and products to our customers.
        Our team is made up of experienced professionals who are passionate about what they do.
      </p>
      <p>
        Our mission is to deliver high-quality solutions that meet the needs of our clients and help them achieve their goals.
        We believe in innovation, integrity, and excellence in everything we do.
      </p>
      <h2>Our Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Alice Johnson - Lead Developer</li>
        <li>Bob Brown - Marketing Director</li>
      </ul>
      <h2>Our Values</h2>
      <ul>
        <li>Customer Focus</li>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Excellence</li>
      </ul>
    </div>
  );
};

export default AboutUs;
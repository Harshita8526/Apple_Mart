import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css'; // Ensure this CSS file exists

const About = () => {
  return (
    <div className="about-container">
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to Apple Mart, your premier destination for premium apples and apple-based products. At Apple Mart, we’re passionate about delivering the finest quality apples directly from the orchard to your table. Our journey began with a simple mission: to offer a diverse selection of apples that cater to every taste and preference.
            </p>
            <p className="lead mb-4">
              Founded with a love for all things apple, Apple Mart started as a small local vendor with a commitment to freshness and excellence. Over the years, we’ve grown into a trusted name in the industry, known for our extensive range of apple varieties, including classic favorites and unique heirloom varieties.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 about-image-harshita">
            <img src="/assets/images/about.png" alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './Footer.css'; // Ensure you create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Apple Mart</h5>
            <p>
              Apple Mart is dedicated to providing the best quality products and exceptional customer service. Our mission is to make your shopping experience as smooth and enjoyable as possible.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p> Street 4,Delhi</p>
            <p>India</p>
            <p>+91 1234567789</p>
          </div>
          <div className="col-md-2">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a> */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

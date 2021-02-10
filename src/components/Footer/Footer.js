import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__rows'>
        <div className='footer__row'>
          <h1>About Us</h1>
          <h1>Student Discount</h1>
          <h1>Coupons</h1>
        </div>
        <div className='footer__row'>
          <h1>Contact Us</h1>
          <h1>Customer Service</h1>
        </div>
        <div className='footer__row'>
          <h1>FAQ</h1>
          <h1>Order Status</h1>
        </div>
        <div className='footer__row'>
          <h1>Call Us: +123 456789</h1>
          <h1>Hours: Monday-Friday 10:00-21:0</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

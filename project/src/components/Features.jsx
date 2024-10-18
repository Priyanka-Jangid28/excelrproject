import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <div className="feature-box">
        <h2>Secure Booking</h2>
        <p>Book services easily with secure payment options.</p>
      </div>
      <div className="feature-box">
        <h2>Instant Confirmation</h2>
        <p>Get immediate confirmation for all your reservations.</p>
      </div>
      <div className="feature-box">
        <h2>24/7 Support</h2>
        <p>Our team is available around the clock to assist you.</p>
      </div>
    </section>
  );
}

export default Features;
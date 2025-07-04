import React from 'react';
import './floatingBackground.css';  

export default function Contact() {
  return (
    <main className="container py-5">
      <div className="floating-bg">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <h1 className="text-center mb-5">Contact</h1>

      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="/Headshot.jpg"
            alt="Your photo"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '300px' }}
          />
        </div>

        {/* Right: Contact Info */}
        <div className="col-md-7">
          <p><strong>Email:</strong> honorine.ishimwe20@gmail.com</p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/honorine-ishimwe-twahirwa-73bbb8150/"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/honorine-ishimwe-twahirwa
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Honorine-Ishimwe"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Honorine-Ishimwe
            </a>
          </p>
          <p><strong>Location:</strong> Montreal, Canada</p>
        </div>
      </div>
    </main>
  );
}
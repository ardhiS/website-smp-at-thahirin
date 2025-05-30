// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // Import file CSS

const Footer = () => {
  return (
    <footer className='footer'>
      {' '}
      {/* Ganti style dengan className */}
      <div className='container'>
        {' '}
        {/* Gunakan class container */}
        <p>
          © {new Date().getFullYear()} SMP PLUS AT-THAHIRIN. All Rights
          Reserved.
        </p>
        <p>Website ini sedang dalam tahap pengembangan. </p>
        <p>Made by Ole</p>
        {/* Contoh tambahan */}
      </div>
    </footer>
  );
};

export default Footer;

// src/components/ScrollToTopButton/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
// import { FaArrowUp } from 'react-icons/fa'; // Jika ingin pakai ikon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Tampilkan tombol ketika scroll melewati tinggi tertentu
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Tampilkan setelah scroll 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasi scroll halus
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <button onClick={scrollToTop} title='Kembali ke atas'>
          {/* <FaArrowUp /> */}↑ {/* Karakter panah atas HTML Unicode */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

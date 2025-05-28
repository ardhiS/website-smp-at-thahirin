// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
// import heroImage from '../../assets/images/mock-hero-image.jpg'; // Siapkan gambar di src/assets/images/

const HeroSection = () => {
  return (
    <div
      className='hero-section' /* style={{ backgroundImage: `url(${heroImage})` }} */
    >
      <div className='hero-overlay'></div>
      <div className='container hero-content'>
        <h1 className='hero-title'>Selamat Datang di {schoolProfile.name}</h1>
        <p className='hero-subtitle'>
          Mencetak Generasi Unggul, Berprestasi, dan Berakhlak Mulia
        </p>
        <Link to='/ppdb' className='hero-cta-button'>
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};
// Mock data sementara jika tidak mau import dari file terpisah
const schoolProfile = { name: 'SMP PLUS AT-THAHIRIN' };
export default HeroSection;

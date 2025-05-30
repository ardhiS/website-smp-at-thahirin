// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroImg from '../../assets/images/Hero.jpg';
// import heroImage from '../../assets/images/mock-hero-image.jpg'; // Siapkan gambar di src/assets/images/

const HeroSection = () => {
  return (
    <div
      className='hero-section'
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className='hero-overlay'></div>
      <div className='container hero-content'>
        <h1 className='hero-title'>
          <i className='hero-title__selamat-datang'>Selamat Datang di</i>
          <br />
          <i className='hero-title__smp-atthahirin'> {schoolProfile.name}</i>
        </h1>
        <p className='hero-subtitle'>
          "Mencetak Generasi Unggul, Berprestasi, dan Berakhlak Mulia"
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

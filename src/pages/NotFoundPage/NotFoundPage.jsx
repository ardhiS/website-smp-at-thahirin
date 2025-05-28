// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
// import notFoundImage from '../../assets/images/404-illustration.svg'; // Opsional: siapkan ilustrasi 404

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <div className='not-found-content'>
        {/* {notFoundImage && <img src={notFoundImage} alt="Halaman tidak ditemukan" className="not-found-image" />} */}
        <h1 className='not-found-title'>404</h1>
        <h2 className='not-found-subtitle'>Oops! Halaman Tidak Ditemukan.</h2>
        <p className='not-found-text'>
          Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
        </p>
        <Link to='/' className='not-found-button'>
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

// src/pages/AboutPage/AboutPage.jsx
import React from 'react';
import { schoolProfile } from '../../data/mockSchoolData'; // Import mock data
import './AboutPage.css'; // Kita akan buat file CSS ini

const AboutPage = () => {
  const { history, vision, missions } = schoolProfile.about;

  return (
    <div className='about-page'>
      {/* Judul halaman sudah ada dari App.jsx, jadi kita langsung ke konten */}
      {/* Jika ingin judul spesifik di sini, bisa tambahkan <h1 className="page-title">Tentang Kami</h1> */}

      <section className='about-section'>
        <h2 className='sub-section-title'>Sejarah Singkat</h2>
        <p className='about-text'>{history}</p>
      </section>

      <section className='about-section vision-mission-section'>
        <div className='vision-container'>
          <h2 className='sub-section-title'>Visi</h2>
          <p className='about-text vision-text'>{vision}</p>
        </div>
        <div className='mission-container'>
          <h2 className='sub-section-title'>Misi</h2>
          <ul className='mission-list'>
            {missions.map((mission, index) => (
              <li key={index} className='mission-item'>
                {mission}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
      Nantinya bisa ditambahkan bagian lain di sini:
      <section className="about-section">
        <h2 className="sub-section-title">Struktur Organisasi</h2>
        {schoolProfile.about.organizationalStructureImage && (
          <img src={schoolProfile.about.organizationalStructureImage} alt="Struktur Organisasi" className="org-structure-image" />
        )}
        <p>Detail struktur organisasi...</p>
      </section>

      <section className="about-section">
        <h2 className="sub-section-title">Fasilitas Sekolah</h2>
        <ul className="facilities-list">
          {schoolProfile.about.facilities && schoolProfile.about.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </section>
      */}
    </div>
  );
};

export default AboutPage;

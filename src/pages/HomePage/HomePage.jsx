// src/pages/HomePage/HomePage.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection'; // Import HeroSection
import { schoolProfile } from '../../data/mockSchoolData'; // Import mock data
import './HomePage.css'; // Buat file ini jika perlu styling khusus untuk HomePage

const HomePage = () => {
  return (
    <div>
      <HeroSection /> {/* Gunakan komponen HeroSection */}
      {/* Bagian Sambutan Kepala Sekolah */}
      <section className='home-section welcome-section'>
        <div className='container'>
          <h2 className='section-title'>Sambutan Kepala Sekolah</h2>
          <div className='welcome-content'>
            {/* <img src="path/to/kepsek-photo.jpg" alt="Kepala Sekolah" className="headmaster-photo" /> */}
            <p className='welcome-text'>{schoolProfile.headmasterWelcome}</p>
          </div>
        </div>
      </section>
      {/* Bagian Program Unggulan */}
      <section className='home-section featured-programs-section'>
        <div className='container'>
          <h2 className='section-title'>Program Unggulan Kami</h2>
          <div className='programs-grid'>
            {schoolProfile.featuredPrograms.map((program) => (
              <div key={program.id} className='program-card'>
                <div className='program-icon'>{program.icon}</div>{' '}
                {/* Ganti dengan gambar/icon jika ada */}
                <h3 className='program-title'>{program.title}</h3>
                <p className='program-description'>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bagian Berita Terbaru (Opsional) */}
      {schoolProfile.latestNews && schoolProfile.latestNews.length > 0 && (
        <section className='home-section latest-news-section'>
          <div className='container'>
            <h2 className='section-title'>Berita & Pengumuman</h2>
            <div className='news-grid'>
              {schoolProfile.latestNews.slice(0, 2).map(
                (
                  news // Tampilkan 2 berita terbaru
                ) => (
                  <div key={news.id} className='news-card'>
                    <h3 className='news-title'>{news.title}</h3>
                    <p className='news-date'>{news.date}</p>
                    <p className='news-summary'>{news.summary}</p>
                    <a href={news.link} className='news-readmore'>
                      Baca Selengkapnya
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;

// src/pages/PpdbPage/PpdbPage.jsx
import React from 'react';
import { schoolProfile } from '../../data/mockSchoolData';
import './Ppdbpage.css'; // Kita akan buat file CSS ini

const PpdbPage = () => {
  const ppdbData = schoolProfile.ppdb;

  return (
    <div className='ppdb-page'>
      <section className='ppdb-section ppdb-intro-section'>
        <div className='container-content'>
          <h2 className='sub-section-title'>{ppdbData.title}</h2>
          {ppdbData.isOpen ? (
            <p className='ppdb-status open'>PENDAFTARAN DIBUKA!</p>
          ) : (
            <p className='ppdb-status closed'>PENDAFTARAN TELAH DITUTUP</p>
          )}
          <p className='ppdb-text'>{ppdbData.introduction}</p>
        </div>
      </section>

      <section className='ppdb-section'>
        <div className='container-content'>
          <h3 className='ppdb-sub-heading'>Jadwal Penting PPDB</h3>
          <table className='ppdb-table'>
            <thead>
              <tr>
                <th>Kegiatan</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {ppdbData.schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.event}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className='ppdb-section'>
        <div className='container-content'>
          <h3 className='ppdb-sub-heading'>Alur Pendaftaran</h3>
          <ol className='ppdb-list ordered-list'>
            {ppdbData.registrationFlow.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className='ppdb-section'>
        <div className='container-content'>
          <h3 className='ppdb-sub-heading'>Syarat Pendaftaran</h3>
          <ul className='ppdb-list'>
            {ppdbData.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className='ppdb-section'>
        <div className='container-content'>
          <h3 className='ppdb-sub-heading'>Informasi Biaya</h3>
          <p className='ppdb-text'>{ppdbData.tuitionInfo}</p>
        </div>
      </section>

      <section className='ppdb-section ppdb-contact-section'>
        <div className='container-content'>
          <h3 className='ppdb-sub-heading'>Kontak & Pendaftaran</h3>
          <p className='ppdb-text'>
            <strong>Narahubung:</strong> {ppdbData.contactInfo.person} <br />
            <strong>Telepon:</strong> {ppdbData.contactInfo.phone} <br />
            <strong>Email:</strong> {ppdbData.contactInfo.email}
          </p>
          {ppdbData.contactInfo.registrationLink && ppdbData.isOpen && (
            <a
              href={ppdbData.contactInfo.registrationLink}
              target='_blank'
              rel='noopener noreferrer'
              className='ppdb-button cta-button'
            >
              Formulir Pendaftaran Online
            </a>
          )}
          <p className='ppdb-text' style={{ marginTop: '15px' }}>
            <strong>Lokasi Pendaftaran Offline:</strong>
            <br />
            {ppdbData.contactInfo.offlineLocation}
          </p>
        </div>
      </section>

      {ppdbData.faq && ppdbData.faq.length > 0 && (
        <section className='ppdb-section'>
          <div className='container-content'>
            <h3 className='ppdb-sub-heading'>FAQ (Tanya Jawab)</h3>
            <div className='faq-container'>
              {ppdbData.faq.map((item, index) => (
                <details key={index} className='faq-item'>
                  <summary className='faq-question'>{item.question}</summary>
                  <p className='faq-answer'>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PpdbPage;

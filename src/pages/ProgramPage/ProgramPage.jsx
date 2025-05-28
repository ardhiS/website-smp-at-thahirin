// src/pages/ProgramPage/ProgramPage.jsx
import React from 'react';
import { schoolProfile } from '../../data/mockSchoolData';
import './ProgramPage.css'; // Kita akan buat file CSS ini

const ProgramPage = () => {
  const { curriculum, extracurriculars } = schoolProfile.academic;
  const featuredPrograms = schoolProfile.featuredPrograms; // Ambil dari root profile

  return (
    <div className='program-page'>
      {/* Bagian Kurikulum */}
      <section className='program-section curriculum-section'>
        <div className='container-content'>
          {' '}
          {/* Menggunakan class baru untuk styling konten */}
          <h2 className='sub-section-title'>{curriculum.title}</h2>
          <p className='program-text'>{curriculum.description}</p>
          {curriculum.subjectsIntegrated &&
            curriculum.subjectsIntegrated.length > 0 && (
              <>
                <h3 className='sub-heading'>
                  Integrasi Nilai dan Program Khas:
                </h3>
                <ul className='integrated-list'>
                  {curriculum.subjectsIntegrated.map((subject, index) => (
                    <li key={index} className='integrated-item'>
                      {subject}
                    </li>
                  ))}
                </ul>
              </>
            )}
        </div>
      </section>

      {/* Bagian Program Unggulan */}
      <section className='program-section featured-programs-section-alt'>
        {' '}
        {/* Class berbeda untuk styling jika perlu */}
        <div className='container-content'>
          <h2 className='sub-section-title'>Program Unggulan</h2>
          <div className='programs-grid'>
            {featuredPrograms.map((program) => (
              <div key={program.id} className='program-card-alt'>
                {' '}
                {/* Class berbeda */}
                <div className='program-icon-alt'>{program.icon}</div>
                <h3 className='program-title-alt'>{program.title}</h3>
                <p className='program-description-alt'>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Ekstrakurikuler */}
      <section className='program-section extracurricular-section'>
        <div className='container-content'>
          <h2 className='sub-section-title'>Ekstrakurikuler</h2>
          <p className='program-text'>
            Kami menyediakan beragam kegiatan ekstrakurikuler untuk menyalurkan
            minat, bakat, dan kreativitas siswa di luar jam pelajaran formal.
          </p>
          <div className='extracurricular-grid'>
            {extracurriculars.map((eko) => (
              <div key={eko.id} className='extracurricular-card'>
                {/* {eko.icon && <div className="eko-icon">{eko.icon}</div>} */}
                <h3 className='eko-name'>{eko.name}</h3>
                <p className='eko-category'>
                  <strong>Kategori:</strong> {eko.category}
                </p>
                <p className='eko-description'>{eko.description}</p>
                <p className='eko-schedule'>
                  <strong>Jadwal:</strong> {eko.schedule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;

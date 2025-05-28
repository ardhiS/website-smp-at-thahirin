// src/pages/GalleryPage/GalleryPage.jsx
import React, { useState } from 'react';
import { schoolProfile } from '../../data/mockSchoolData';
import './GalleryPage.css'; // Kita akan buat file CSS ini

const GalleryPage = () => {
  const galleryData = schoolProfile.gallery;
  const [selectedImage, setSelectedImage] = useState(null); // State untuk lightbox

  const openLightbox = (imageSrc, altText) => {
    setSelectedImage({ src: imageSrc, alt: altText });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Fungsi untuk menutup lightbox jika klik di luar gambar
  const handleLightboxClick = (e) => {
    if (e.target.classList.contains('lightbox-overlay')) {
      closeLightbox();
    }
  };

  return (
    <div className='gallery-page'>
      <section className='gallery-intro-section'>
        <div className='container-content'>
          <h2 className='sub-section-title'>{galleryData.title}</h2>
          <p className='gallery-text'>{galleryData.description}</p>
        </div>
      </section>

      <section className='gallery-grid-section'>
        <div className='container-content'>
          {galleryData.photos.length > 0 ? (
            <div className='gallery-grid'>
              {galleryData.photos.map((photo) => (
                <div
                  key={photo.id}
                  className='gallery-item'
                  onClick={() => openLightbox(photo.src, photo.alt)}
                >
                  <img src={photo.src} alt={photo.alt} loading='lazy' />
                  <div className='gallery-item-caption'>
                    <p>
                      {photo.caption.length > 50
                        ? photo.caption.substring(0, 50) + '...'
                        : photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Belum ada foto untuk ditampilkan.</p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className='lightbox-overlay' onClick={handleLightboxClick}>
          <div className='lightbox-content'>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className='lightbox-close-button' onClick={closeLightbox}>
              ×
            </button>
            <p className='lightbox-caption'>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

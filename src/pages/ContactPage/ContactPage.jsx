// src/pages/ContactPage/ContactPage.jsx
import React, { useState } from 'react'; // Tambahkan useState
import { schoolProfile } from '../../data/mockSchoolData';
import './ContactPage.css';

const ContactPage = () => {
  const contactData = schoolProfile.contact;

  // State untuk input formulir
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // Untuk pesan sukses/error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Mengirim...');

    try {
      const response = await fetch('https://formspree.io/f/xyzwrbpd', {
        // <-- GANTI DENGAN ENDPOINT FORM ANDA
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(formData), // Kirim sebagai JSON jika endpoint Anda menerimanya
        // Atau gunakan FormData jika Formspree meminta format form-data
        // Jika menggunakan FormData:
        // const data = new FormData();
        // Object.keys(formData).forEach(key => data.append(key, formData[key]));
        // body: data,
      });

      if (response.ok) {
        setFormStatus('Pesan berhasil terkirim! Terima kasih.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        // Coba parse error dari Formspree jika ada
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.errors) {
          setFormStatus(
            `Error: ${errorData.errors.map((err) => err.message).join(', ')}`
          );
        } else {
          setFormStatus('Oops! Terjadi kesalahan saat mengirim pesan.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('Oops! Terjadi kesalahan koneksi.');
    }
  };

  return (
    <div className='contact-page'>
      {/* ... (bagian intro dan detail kontak tetap sama) ... */}
      <section className='contact-intro-section'>
        {/* ... kode intro ... */}
      </section>

      <section className='contact-details-section'>
        {/* ... kode detail kontak dan peta ... */}
      </section>

      {/* BAGIAN FORMULIR KONTAK */}
      <section className='contact-form-section'>
        <div className='container-content'>
          <div className='container__contact-sub-heading'>
            <h3 className='contact-sub-heading'>Kirim Pesan Langsung</h3>
          </div>

          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Nama Lengkap</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Alamat Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>Subjek Pesan</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Isi Pesan</label>
              <textarea
                id='message'
                name='message'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='contact-form-button'>
              Kirim Pesan
            </button>
            {formStatus && (
              <p
                className={`form-status ${
                  formStatus.includes('Error') || formStatus.includes('Oops')
                    ? 'error'
                    : 'success'
                }`}
              >
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

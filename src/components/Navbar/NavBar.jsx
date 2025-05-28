// src/components/Navbar/Navbar.jsx
import React from 'react';
// GANTI 'Link' menjadi 'NavLink' dan tambahkan 'useLocation'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Dapatkan informasi lokasi saat ini

  // Definisikan link navigasi dalam bentuk array objek agar lebih mudah dikelola
  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/program', label: 'Program' },
    { path: '/ppdb', label: 'PPDB' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className='navbar'>
      <div className='container navbar-content'>
        <NavLink to='/' className='navbar-brand'>
          SMP PLUS AT-THAHIRIN
        </NavLink>
        <ul className='navbar-links'>
          {navLinks.map((link) => (
            <li key={link.path}>
              {/* Gunakan NavLink, ia akan otomatis menambahkan class 'active' */}
              <NavLink
                to={link.path}
                // className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} // Cara manual jika tidak pakai style default NavLink
                // Atau biarkan NavLink menangani class 'active' secara otomatis
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

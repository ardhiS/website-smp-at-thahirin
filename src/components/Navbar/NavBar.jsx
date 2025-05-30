// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/icons/logo.svg';
// Jika Anda tidak menggunakan react-icons, Anda bisa menggunakan karakter HTML:
// const hamburgerIcon = <span>☰</span>;
// const closeIcon = <span>×</span>;

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/program', label: 'Program' },
    { path: '/ppdb', label: 'PPDB' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/kontak', label: 'Kontak' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false); // Tutup menu saat navigasi
  }, [location]);

  return (
    <nav className='navbar'>
      <div className='container navbar-content'>
        <NavLink to='/' className='navbar-brand'>
          <img
            src={logo}
            alt='Logo SMP Plus At-Thahirin'
            className='navbar-logo'
          />
          <span className='navbar-brand-text'>SMP PLUS AT-THAHIRIN</span>
        </NavLink>

        <button
          className='mobile-menu-toggle'
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label='Toggle navigation'
        >
          {isMobileMenuOpen ? <span>×</span> : <span>☰</span>}
        </button>

        <ul
          className={`navbar-links ${
            isMobileMenuOpen ? 'mobile-menu-open' : ''
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => isMobileMenuOpen && toggleMobileMenu()}
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

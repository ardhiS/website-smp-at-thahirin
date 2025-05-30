// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import PpdbPage from './pages/PpdbPage/PpdbPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ScrollToTop from './components/scrollToTop';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='app-layout'>
        {/* 1. Pembungkus utama untuk flex layout */}
        <Navbar />
        <main className='app-main-content'>
          {' '}
          {/* 2. Main content yang akan flex-grow */}
          <Routes>
            {/* 3. Bungkus setiap halaman normal dengan div.container */}
            <Route
              path='/'
              element={
                <div className='container page-content-wrapper'>
                  <HomePage />
                </div>
              }
            />
            <Route
              path='/tentang-kami'
              element={
                <div className='container page-content-wrapper'>
                  <AboutPage />
                </div>
              }
            />
            <Route
              path='/program'
              element={
                <div className='container page-content-wrapper'>
                  <ProgramPage />
                </div>
              }
            />
            <Route
              path='/ppdb'
              element={
                <div className='container page-content-wrapper'>
                  <PpdbPage />
                </div>
              }
            />
            <Route
              path='/galeri'
              element={
                <div className='container page-content-wrapper'>
                  <GalleryPage />
                </div>
              }
            />
            <Route
              path='/kontak'
              element={
                <div className='container page-content-wrapper'>
                  <ContactPage />
                </div>
              }
            />
            {/* 4. NotFoundPage bisa langsung, tidak perlu div.container jika desainnya full-width di main area */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;

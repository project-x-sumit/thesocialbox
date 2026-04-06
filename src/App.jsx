import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import CaseStudyPage from './pages/CaseStudyPage';
import { ContactProvider } from './context/ContactContext';
import ContactModal from './components/ContactModal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ContactProvider>
      <ScrollToTop />
      <Navigation />
      <ContactModal />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/case-studies" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </ContactProvider>
  );
}

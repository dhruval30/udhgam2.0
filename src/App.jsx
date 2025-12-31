import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AboutSection from './components/AboutSection';
import AgendaSection from './components/AgendaSection';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import PartnerSection from './components/PartnerSection';
import PartnershipPage from './components/PartnershipPage';
import SectionDivider from './components/SectionDivider';
import Udhgam1 from './components/Udhgam1';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const Home = () => (
  <>
    <LandingPage />
    <AboutSection />
    <AgendaSection />
    <Udhgam1 />
    <PartnerSection />
    <SectionDivider />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    const storageType = localStorage;
    const hasVisited = storageType.getItem('udhgam_visit_counted');

    if (!hasVisited) {
      storageType.setItem('udhgam_visit_counted', 'true');
      fetch('https://api.counterapi.dev/v2/dhruval-padias-team-2232/production/up')
        .then(response => {
           if (!response.ok) throw new Error("Network response was not ok");
           return response.json();
        })
        .then(data => {
          console.log("Visit counted:", data);
        })
        .catch(err => {
          console.error("Counter API Error:", err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partnerships" element={<PartnershipPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
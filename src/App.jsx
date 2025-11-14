import React from 'react';
import AboutSection from './components/AboutSection';
import AgendaSection from './components/AgendaSection';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import PartnerSection from './components/PartnerSection';
import SectionDivider from './components/SectionDivider';
import Udhgam1 from './components/Udhgam1';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutSection />
      <AgendaSection />
      <Udhgam1 />
      <PartnerSection />
      <SectionDivider />
      <Footer />
    </div>
  );
}

export default App;
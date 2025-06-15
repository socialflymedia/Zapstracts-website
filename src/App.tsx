import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import BenefitsSection from './components/BenefitsSection';
import AppShowcaseSection from './components/AppShowcaseSection';
import AboutSection from './components/AboutSection';
import QualitySection from './components/QualitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <BenefitsSection />
      <AppShowcaseSection />
      <AboutSection />
      <QualitySection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
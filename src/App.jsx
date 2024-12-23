import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default App;

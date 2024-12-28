import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  console.log('App rendering');
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;

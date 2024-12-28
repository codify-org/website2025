import React, { useState } from 'react';
import BacktestingIcon from '../assets/icons/backtesting.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import MarketDataIcon from '../assets/icons/market-data.svg';
import ScannerIcon from '../assets/icons/scanner.svg';
import AnalyticsIcon from '../assets/icons/analytics.svg';
import PositionIcon from '../assets/icons/position.svg';
import Modal from './Modal';
import SignupForm from './SignupForm';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    {/* Gradient border effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative flex flex-col h-full p-8 bg-black bg-opacity-90 backdrop-blur-xl rounded-xl border border-purple-900/50 transform hover:-translate-y-1 transition duration-300">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
          <img 
            src={Icon} 
            alt={title} 
            className="w-8 h-8 [filter:brightness(5)_saturate(0)] opacity-100 group-hover:opacity-90 transition-opacity"
            style={{ filter: 'invert(1)' }}
          />
        </div>
        <h3 className="ml-4 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
          {title}
        </h3>
      </div>
      <p className="text-purple-100/80 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupSubmit = (formData) => {
    // Here you would typically send the data to your backend
    console.log('Signup data:', formData);
    setShowSignupModal(false);
    // Show success message or redirect
  };

  return (
    <>
      <div className="relative overflow-hidden bg-black bg-opacity-90 py-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
                AI-Powered Trading Tools
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-purple-100/80">
              Everything you need to analyze, backtest, and perfect your options strategies with AI-driven insights
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BacktestingIcon}
              title="AI Backtesting"
              description="Test your strategies with AI-powered analysis, using real market conditions, millisecond-accurate historical data, and true bid-ask spreads."
            />
            <FeatureCard
              icon={CalendarIcon}
              title="Smart Calendar"
              description="AI-enhanced earnings calendar with volatility forecasts, historical moves analysis, and predictive insights for better timing."
            />
            <FeatureCard
              icon={MarketDataIcon}
              title="Premium Data"
              description="Access institutional-grade options data enhanced by AI, including real-time Greeks, implied volatility surfaces, and order flow analysis."
            />
            <FeatureCard
              icon={ScannerIcon}
              title="AI Strategy Scanner"
              description="Discover high-probability setups with our advanced AI scanner that analyzes market conditions and historical patterns."
            />
            <FeatureCard
              icon={AnalyticsIcon}
              title="Risk Analytics"
              description="AI-driven risk analysis with professional-grade metrics including Greeks exposure, IV percentile, and profit probability calculations."
            />
            <FeatureCard
              icon={PositionIcon}
              title="Smart Sizing"
              description="Optimize your position sizes with AI-powered risk management tools based on your account size and risk tolerance."
            />
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <button 
              onClick={() => setShowSignupModal(true)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
            >
              <span>Start Trading Smarter</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <Modal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        title="Get Early Access"
      >
        <div className="space-y-4">
          <p className="text-purple-100">
            Join our exclusive early access program and be among the first to experience AI-powered options backtesting.
          </p>
          <SignupForm onSubmit={handleSignupSubmit} />
        </div>
      </Modal>
    </>
  );
};

export default FeaturesSection;
  
import React from 'react';
import { FaChartLine, FaClock, FaDatabase, FaRobot, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    {/* Gradient border effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative flex flex-col h-full p-8 bg-black bg-opacity-90 backdrop-blur-xl rounded-xl border border-purple-900/50 transform hover:-translate-y-1 transition duration-300">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
          <Icon className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
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

const FeaturesSection = () => (
  <div className="relative overflow-hidden bg-black bg-opacity-90 py-24">
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
            Professional Trading Tools
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-purple-100/80">
          Everything you need to analyze, backtest, and perfect your earnings options strategies
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={FaChartLine}
          title="Advanced Backtesting"
          description="Test your strategies against real market conditions with millisecond-accurate historical data and true bid-ask spreads."
        />
        <FeatureCard
          icon={FaClock}
          title="Earnings Calendar"
          description="Never miss a trade with our comprehensive earnings calendar, complete with volatility forecasts and historical moves."
        />
        <FeatureCard
          icon={FaDatabase}
          title="Premium Market Data"
          description="Access institutional-grade options data including real-time Greeks, implied volatility surfaces, and order flow."
        />
        <FeatureCard
          icon={FaRobot}
          title="Strategy Scanner"
          description="Discover high-probability setups with our AI-powered scanner that analyzes market conditions and historical patterns."
        />
        <FeatureCard
          icon={FaChartBar}
          title="Risk Analytics"
          description="Visualize your risk with professional-grade analytics including Greeks exposure, IV percentile, and profit probability."
        />
        <FeatureCard
          icon={FaShieldAlt}
          title="Position Sizing"
          description="Optimize your position sizes with our advanced risk management tools based on your account size and risk tolerance."
        />
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50">
          <span>Start Trading Smarter</span>
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
  
import React from 'react';

const HeroSection = () => (
  <div className="hero relative overflow-hidden">
    {/* Background with gradient and noise effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50"></div>
    </div>
    
    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="space-y-12 text-center">
        {/* Status badge */}
        <div className="inline-block">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 bg-opacity-10 text-purple-200 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
            AI-Powered Market Data
          </span>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-white">
            Codify AI Backtesting
          </span>
          <span className="block text-3xl md:text-4xl mt-3 text-purple-200 font-light">
            Pro-Grade Options Analysis
          </span>
        </h1>

        {/* Description with better messaging for pro traders */}
        <p className="max-w-2xl mx-auto text-xl text-purple-100 leading-relaxed">
          Stop gambling on earnings plays. Get institutional-grade backtesting with 
          <span className="font-semibold text-pink-300"> real bid-ask spread data</span> and 
          <span className="font-semibold text-purple-300"> AI-powered analysis</span>. 
          Built by traders, for traders.
        </p>

        {/* CTA Buttons with modern styling */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50">
            Start Backtesting Now
          </button>
          <button className="w-full sm:w-auto group px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-20 transition duration-300">
            <span>See Live Results</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-12 border-t border-purple-800">
          <div>
            <div className="text-3xl font-bold text-white">500ms</div>
            <div className="text-purple-300 text-sm">Tick Precision</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">10+ Years</div>
            <div className="text-purple-300 text-sm">Historical Data</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-purple-300 text-sm">Data Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-purple-300 text-sm">Market Coverage</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
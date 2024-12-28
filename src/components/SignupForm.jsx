import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    tradingExperience: '',
    interests: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-purple-200 mb-2">Email Address</label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 bg-purple-900/20 border border-purple-900/50 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-purple-200 mb-2">Trading Experience</label>
        <select
          required
          className="w-full px-4 py-2 bg-purple-900/20 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={formData.tradingExperience}
          onChange={(e) => setFormData(prev => ({ ...prev, tradingExperience: e.target.value }))}
        >
          <option value="">Select your experience</option>
          <option value="beginner">Beginner (0-2 years)</option>
          <option value="intermediate">Intermediate (2-5 years)</option>
          <option value="advanced">Advanced (5+ years)</option>
          <option value="professional">Professional Trader</option>
        </select>
      </div>

      <div>
        <label className="block text-purple-200 mb-2">Interested In</label>
        <div className="grid grid-cols-2 gap-3">
          {[
            'Earnings Plays',
            'Options Flow',
            'Volatility Trading',
            'Risk Management',
            'Market Analysis',
            'AI Signals'
          ].map((interest) => (
            <label
              key={interest}
              className={`
                flex items-center p-3 rounded-lg border cursor-pointer transition-colors
                ${formData.interests.includes(interest)
                  ? 'border-purple-500 bg-purple-900/30'
                  : 'border-purple-900/50 bg-purple-900/10 hover:bg-purple-900/20'}
              `}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestToggle(interest)}
              />
              <span className="text-sm text-purple-100">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
      >
        Get Early Access
      </button>
    </form>
  );
};

export default SignupForm; 
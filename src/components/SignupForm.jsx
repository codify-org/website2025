import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    tradingExperience: '',
    interests: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          tradingExperience: formData.tradingExperience,
          interests: formData.interests
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Network error. Please try again later.');
      }

      setIsLoading(false);
      setSuccess(true);
      onSubmit(formData);
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message || 'Network error. Please try again later.');
      setIsLoading(false);
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-purple-200 mb-2">Thank You!</h3>
        <p className="text-purple-100">
          Check your email for your welcome message and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-300">
          {error}
        </div>
      )}

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
        disabled={isLoading}
        className={`
          w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg 
          transform transition duration-300 ease-in-out shadow-lg
          ${isLoading 
            ? 'opacity-75 cursor-not-allowed'
            : 'hover:scale-105 hover:shadow-purple-500/50'
          }
        `}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          'Get Early Access'
        )}
      </button>
    </form>
  );
};

export default SignupForm; 
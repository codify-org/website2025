import React from 'react';

const TwitterIcon = () => (
  <svg className="w-5 h-5 group-hover:text-purple-100" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 group-hover:text-purple-100" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Codify AI LLC</h3>
            <address className="not-italic">
              1021 E Lincolnway, Suite #6656<br />
              Cheyenne, Wyoming 82001<br />
              USA
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-purple-100 transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-100 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-100 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-100 mb-4">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://x.com/codifycapital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                >
                  <TwitterIcon />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/codifycapital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-100 transition-colors group"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-purple-900/50 text-center">
          <p>&copy; {new Date().getFullYear()} Codify AI LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
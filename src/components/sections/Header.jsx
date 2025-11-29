import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="https://gnathosface.com/images/gna-logop.png" alt="Gnathos Face Logo" className="h-12 w-auto object-contain rounded-lg" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/919000666476" className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
              <SafeIcon icon={FaWhatsapp} className="mr-2" />
              WhatsApp
            </a>
            <button 
              onClick={() => {
                  const element = document.getElementById('hero-name');
                  if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      element.focus();
                  }
              }}
              className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SafeIcon icon={FaPhone} className="mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

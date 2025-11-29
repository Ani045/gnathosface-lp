import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-primary-900 text-white py-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-medical/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
                    {/* Left - Logo and Description */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://gnathosface.com/images/gna-logop.png"
                                alt="Gnathos Face Logo"
                                className="h-16 w-auto object-contain bg-white/10 rounded-lg p-2 backdrop-blur-sm"
                            />

                        </div>

                        <div className="hidden lg:block w-px h-16 bg-gray-600"></div>

                        <div className="text-center lg:text-left">
                            <p className="text-gray-300 text-sm mb-2">
                                Specialized in TMJ disorders, facial injuries, jaw correction & cosmetic facial surgery
                            </p>
                            <div className="flex items-center justify-center lg:justify-start space-x-4 text-xs text-gray-400">
                                <span>CARE Hospitals, Hi-tech City</span>
                                <span>•</span>
                                <span>20+ Years Experience</span>
                                <span>•</span>
                                <span>12,000+ Patients</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => {
                                const element = document.getElementById('hero-name');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                    element.focus();
                                }
                            }}
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
                        >
                            <SafeIcon icon={FaPhone} className="mr-2" />
                            Schedule Consultation
                        </button>
                        <a
                            href="https://wa.me/919000666476"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
                        >
                            <SafeIcon icon={FaWhatsapp} className="mr-2" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

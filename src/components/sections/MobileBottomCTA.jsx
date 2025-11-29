import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const MobileBottomCTA = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-50">
            <div className="flex gap-3">
                <button 
                    onClick={() => {
                        const element = document.getElementById('hero-name');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                            element.focus();
                        }
                    }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
                >
                    <SafeIcon icon={FaPhone} className="mr-2" />
                    Schedule Consultation
                </button>
                <a href="https://wa.me/919000666476" className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                    <SafeIcon icon={FaWhatsapp} className="mr-2" />
                    WhatsApp
                </a>
            </div>
        </div>
    );
};

export default MobileBottomCTA;

import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {
    return (
        <section className="relative py-16 bg-gradient-to-r from-primary-600 via-primary-500 to-medical overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 via-transparent to-white/5"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Life?
                    </h3>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Don't let jaw pain or facial concerns affect your quality of life. Get expert consultation from Dr. Suresh P today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => {
                                const element = document.getElementById('hero-name');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                    element.focus();
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl"
                        >
                            <SafeIcon icon={FaPhone} className="mr-3" />
                            Schedule Consultation
                        </button>
                        <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-2xl">
                            <SafeIcon icon={FaWhatsapp} className="mr-3" />
                            WhatsApp Now
                        </a>
                    </div>
                    <p className="text-white/70 text-sm mt-4">
                        Available 24/7 for emergency consultations
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

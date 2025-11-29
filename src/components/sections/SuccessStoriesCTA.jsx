import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaHeart, FaPhone, FaWhatsapp } from 'react-icons/fa';

const SuccessStoriesCTA = () => {
    return (
        <section className="relative py-16 bg-gradient-to-br from-medical-pale via-primary-50 to-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-24 h-24 bg-primary-200/40 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-medical-pale/60 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/70 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <SafeIcon icon={FaHeart} className="text-red-500" />
                        <span>Success Stories</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Join Thousands of
                        <span className="text-primary-500"> Happy Patients</span>
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Read real experiences from patients who found relief and renewed confidence through expert maxillofacial care.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">98%</div>
                            <div className="text-sm text-gray-600">Patient Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">12,000+</div>
                            <div className="text-sm text-gray-600">Successful Treatments</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">4.9★</div>
                            <div className="text-sm text-gray-600">Average Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">20+</div>
                            <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                        <p className="text-gray-700 italic text-lg mb-4">
                            "Don't let pain control your life. Take the first step towards healing."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+919000666476" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                                <SafeIcon icon={FaPhone} className="mr-2" />
                                Start Your Healing Journey
                            </a>
                            <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-primary-600 font-semibold rounded-xl transition-all duration-200 shadow-lg border border-primary-200">
                                <SafeIcon icon={FaWhatsapp} className="mr-2" />
                                Ask Questions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesCTA;

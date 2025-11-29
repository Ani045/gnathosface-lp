import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ResultsSection = () => {
    return (
        <section className="relative py-8 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-medical-pale/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <SafeIcon icon={FaCheckCircle} className="text-green-500" />
                        <span>Real Results</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Amazing
                        <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                            Results
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See the life-changing transformations achieved through expert maxillofacial surgery.
                    </p>
                </div>

                {/* Simple Slider */}
                <div className="overflow-x-auto pb-4">
                    <div className="flex space-x-6" style={{ width: 'max-content' }}>
                        {[
                            { image: "Cosmetic-Facial-Surgery.png", title: "TMJ & Jaw Correction" },
                            { image: "Facial-Fracture.png", title: "Facial Reconstruction" },
                            { image: "Jaw-Correction.png", title: "Sleep Apnea Treatment" },
                            { image: "TMJ-Pain.png", title: "Cosmetic Enhancement" },
                            { image: "Cosmetic-Facial-Surgery.png", title: "TMJ & Jaw Correction" },
                            { image: "Facial-Fracture.png", title: "Facial Reconstruction" },
                            { image: "Jaw-Correction.png", title: "Sleep Apnea Treatment" },
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex-shrink-0 w-80 hover:shadow-xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
                                    <img
                                        src={item.image}
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600&h=400";
                                        }}
                                        alt={item.title}
                                    />
                                </div>

                                {/* Treatment Name */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-primary-500 to-medical rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Simple CTA */}
                {/* <div className="text-center mt-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-100/50 shadow-xl inline-block">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Ready for Your Transformation?
                        </h4>
                        <p className="text-gray-600 mb-4">
                            Schedule your consultation with Dr. Suresh P today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a href="tel:+919000666476" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                                <SafeIcon icon={FaPhone} className="mr-2" />
                                Book Now
                            </a>
                            <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                                <SafeIcon icon={FaWhatsapp} className="mr-2" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default ResultsSection;

import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaStar, FaHospital, FaMicroscope, FaClipboardList, FaHeart, FaPhone } from 'react-icons/fa';

const WhyChooseSection = () => {
    const features = [
        {
            icon: FaHospital,
            title: "Specialized Centre",
            description: "Exclusively focused on facial, jaw and oral surgery – not a generic dental clinic.",
            color: "from-blue-500 to-primary-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: FaMicroscope,
            title: "Advanced Technology",
            description: "Digital imaging, 3D surgical planning, and modern operating theatre setup.",
            color: "from-purple-500 to-primary-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: FaClipboardList,
            title: "Comprehensive Care",
            description: "Complete treatment pathway from TMJ to trauma reconstruction and cosmetic procedures.",
            color: "from-green-500 to-primary-600",
            bgColor: "bg-green-50"
        },
        {
            icon: FaHeart,
            title: "Compassionate Approach",
            description: "Clear explanations, ethical recommendations, and comfort-focused care throughout.",
            color: "from-red-500 to-primary-600",
            bgColor: "bg-red-50"
        }
    ];

    return (
        <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 right-10 w-32 h-32 bg-primary-100/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-medical-pale/40 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-primary-100/60 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <SafeIcon icon={FaStar} className="text-yellow-500" />
                        <span>Why Patients Choose Us</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Excellence in
                        <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                            Maxillofacial Care
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Specialized expertise with a patient-first approach, combining advanced technology with compassionate care.
                    </p>
                </div>

                {/* Features Grid - 2 cards per row on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                            {/* Icon */}
                            <div className={`relative w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-md`}>
                                    <SafeIcon icon={item.icon} className="text-white text-lg" />
                                </div>
                            </div>

                            {/* Content - Mobile: Title only, Desktop: Title + Description */}
                            <div className="text-center">
                                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-600 leading-relaxed hidden lg:block">
                                    {item.description}
                                </p>
                            </div>

                            {/* Hover Effect Line */}
                            <div className={`absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {/* <div className="text-center mt-12">
                    <div className="inline-flex items-center justify-center flex-wrap gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 sm:px-8 sm:py-6 shadow-xl border border-primary-100/50">
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-primary-600">20+</div>
                            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                        </div>
                        <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-primary-600">12,000+</div>
                            <div className="text-xs sm:text-sm text-gray-600">Happy Patients</div>
                        </div>
                        <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-primary-600">4.8★</div>
                            <div className="text-xs sm:text-sm text-gray-600">Patient Rating</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default WhyChooseSection;

import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaMicroscope, FaUserMd, FaHospital, FaHeart, FaCheckCircle, FaClipboardList, FaPaperPlane, FaStar } from 'react-icons/fa';

const ConditionsSection = ({ handleScroll }) => {
    const conditions = [
        {
            title: "TMJ Disorders",
            symptom: "Jaw pain, clicking, locking?",
            benefit: "Restore comfortable jaw movement",
            icon: FaUserMd,
            iconImage: "jaw.png", // Your image icons here
           
        },
        {
            title: "Facial Trauma",
            symptom: "Accident or sports injury?",
            benefit: "Expert reconstruction & recovery",
            icon: FaHospital,
            iconImage: "facial-massage.png",
           
        },
        {
            title: "Jaw Correction",
            symptom: "Misaligned bite issues?",
            benefit: "Achieve proper facial balance",
            icon: FaMicroscope,
            iconImage: "jaw-cor.png",
           
        },
        {
            title: "Sleep Apnea",
            symptom: "Snoring & sleep problems?",
            benefit: "Better sleep & health",
            icon: FaHeart,
            iconImage: "facial-massage.png",
        
        },
        {
            title: "Facial Surgery",
            symptom: "Seeking enhancement?",
            benefit: "Natural-looking precision results",
            icon: FaCheckCircle,
            iconImage: "jaw-recons.png",
           
        },
        {
            title: "Cysts & Tumors",
            symptom: "Unusual growths?",
            benefit: "Safe removal & full recovery",
            icon: FaClipboardList,
            iconImage: "cyst-removal.png",
           
        },
        {
            title: "Oral Cancers",
            symptom: "Persistent mouth issues?",
            benefit: "Expert diagnosis & care",
            icon: FaMicroscope,
            iconImage: "cancer.png",
            
        },
        {
            title: "Jaw Reconstruction",
            symptom: "Complex jaw problems?",
            benefit: "Advanced reconstruction solutions",
            icon: FaHospital,
            iconImage: "jaw-recons.png",
            
        }
    ];

    return (
        <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-24 h-24 bg-primary-100/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-medical-pale/40 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-primary-100/60 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <SafeIcon icon={FaMicroscope} className="text-primary-500" />
                        <span>Expert Treatment</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Conditions We
                        <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                            Specialize In
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive maxillofacial solutions for complex facial and jaw conditions.
                    </p>
                </div>

                {/* Mobile: 2 cards per row - Image Icon + Name */}
                <div className="grid grid-cols-2 gap-3 md:hidden">
                    {conditions.map((item, index) => (
                        <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full text-center">
                            {/* Mobile Image Icon */}
                            <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-2 mx-auto p-1 shadow-md group-hover:scale-105 transition-transform duration-200 bg-gradient-to-br`}>
                                <img 
                                    src={item.iconImage}
                                    alt={item.title}
                                    className="w-10 h-10 object-contain rounded shadow-sm"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        // Fallback to React icon
                                        const fallback = document.createElement('div');
                                        fallback.innerHTML = `<svg class="text-white text-lg">${SafeIcon({icon: item.icon})}</svg>`;
                                        e.target.parentNode.appendChild(fallback);
                                    }}
                                />
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary-600">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Desktop Grid - Image Icon + Full content */}
                <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {conditions.map((item, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            {/* Desktop Image Icon */}
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <img 
                                    src={item.iconImage}
                                    alt={item.title}
                                    className="w-12 h-12 object-contain rounded-lg shadow-sm"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        // Fallback to React icon
                                        e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><SafeIcon icon={${item.icon.name}} className="text-white text-xl" /></div>`;
                                    }}
                                />
                            </div>

                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                {item.symptom}
                            </p>
                            <p className="text-sm text-primary-600 font-medium">
                                {item.benefit}
                            </p>

                            {/* Hover Effects */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                            <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center justify-center flex-wrap gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-primary-100/50">
                        <div className="text-primary-600 text-center">
                            <SafeIcon icon={FaCheckCircle} className="text-xl mx-auto mb-1" />
                            <p className="text-sm font-medium">Expert Diagnosis</p>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-primary-600 text-center">
                            <SafeIcon icon={FaHeart} className="text-xl mx-auto mb-1" />
                            <p className="text-sm font-medium">Personalized Care</p>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-primary-600 text-center">
                            <SafeIcon icon={FaStar} className="text-xl mx-auto mb-1" />
                            <p className="text-sm font-medium">Proven Results</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConditionsSection;

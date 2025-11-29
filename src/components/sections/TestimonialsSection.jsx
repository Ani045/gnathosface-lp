import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
    const testimonials = [
        {
            text: "After years of jaw pain and clicking, Dr. Gnathos team diagnosed my TMJ and created a treatment plan that actually worked. The surgery was smooth and recovery was much easier than I expected.",
            author: "Priya B.",
            case: "TMJ surgery & jaw pain relief",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
            color: "from-blue-500 to-primary-600"
        },
        {
            text: "My underbite was affecting my confidence and ability to chew properly. The team explained every step of the corrective jaw surgery and the results exceeded my expectations. My face looks balanced and I feel like a new person.",
            author: "Aditya R.",
            case: "Corrective jaw surgery",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
            color: "from-green-500 to-emerald-600"
        },
        {
            text: "After a road accident left my face severely injured, I was devastated. The Gnathos team performed reconstructive surgery that restored not just my appearance but my confidence. Their care and expertise gave me my life back.",
            author: "Vikram S.",
            case: "Facial trauma reconstruction",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
            color: "from-purple-500 to-indigo-600"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-white via-gray-50/50 to-primary-50/30 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-medical-pale/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <SafeIcon icon={FaStar} className="text-yellow-500" />
                        <span>Patient Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Life-Changing
                        <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                            Success Stories
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Real experiences from patients who found relief and renewed confidence through expert maxillofacial care.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Quote Icon */}
                            <div className={`absolute top-6 left-6 w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-md`}>
                                <SafeIcon icon={FaQuoteLeft} className="text-white text-sm" />
                            </div>

                            {/* Stars */}
                            <div className="flex items-center justify-end space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-sm flex items-center justify-center shadow-sm">
                                        <SafeIcon icon={FaStar} className="text-white text-xs" />
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                "{item.text}"
                            </p>

                            {/* Profile */}
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full p-0.5`}>
                                        <div className="w-full h-full bg-white rounded-full p-0.5">
                                            <img
                                                src={item.img}
                                                alt={item.author}
                                                className="w-12 h-12 object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{item.author}</h4>
                                    <p className="text-primary-600 text-xs font-medium">{item.case}</p>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                            {/* Bottom Accent */}
                            <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Indicators */}
                <div className="text-center mt-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-primary-100/50 inline-flex items-center space-x-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">4.9★</div>
                            <div className="text-xs text-gray-600">Google Reviews</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">98%</div>
                            <div className="text-xs text-gray-600">Satisfied Patients</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">12K+</div>
                            <div className="text-xs text-gray-600">Success Stories</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

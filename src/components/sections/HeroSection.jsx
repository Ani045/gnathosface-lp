import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import {
    FaWhatsapp,
    FaPhone,
    FaStar,
    FaUserMd,
    FaHeart,
    FaMicroscope,
    FaCheckCircle,
    FaPaperPlane
} from 'react-icons/fa';

const HeroSection = ({ heroFormData, handleHeroFormChange, handleHeroFormSubmit }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-medical-pale overflow-hidden py-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-grid" />
            <div className="absolute top-0 -right-4 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-4 w-64 h-64 bg-medical-pale/30 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="space-y-5 order-1 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-primary-100/50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                                <span>World-Class Maxillofacial Surgery</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Advanced Care for
                                <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                                    Facial Surgery
                                </span>
                                in Hyderabad
                            </h1>

                            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                Specialized treatment for facial injuries, TMJ disorders, jaw correction and cosmetic facial surgery by experienced surgeons.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { icon: FaUserMd, text: "20+ years expertise", color: "from-blue-500 to-primary-600", bgColor: "bg-blue-50" },
                                { icon: FaHeart, text: "12K+ patients", color: "from-red-500 to-pink-600", bgColor: "bg-red-50" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2 group">
                                    <div className={`w-7 h-7 ${item.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                        <div className={`w-5 h-5 bg-gradient-to-br ${item.color} rounded-md flex items-center justify-center shadow-sm`}>
                                            <SafeIcon icon={item.icon} className="text-white text-xs" />
                                        </div>
                                    </div>
                                    <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators */}
                        {/* <div className="flex items-center space-x-3 p-2 bg-white/70 backdrop-blur-sm rounded-lg border border-primary-100/50">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-sm flex items-center justify-center shadow-sm">
                                        <SafeIcon icon={FaStar} className="text-white text-xs" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">4.4/5 • 500+ reviews</span>
                        </div> */}

                        {/* CTA Buttons - Hidden on mobile, shown on desktop */}
                        <div className="hidden lg:flex gap-3">
                            <button 
                                onClick={() => {
                                    const element = document.getElementById('hero-name');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                        element.focus();
                                    }
                                }}
                                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl text-sm"
                            >
                                <SafeIcon icon={FaPhone} className="mr-2" />
                                Schedule Consultation
                            </button>
                            <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl text-sm">
                                <SafeIcon icon={FaWhatsapp} className="mr-2" />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Form & Image */}
                    <div className="space-y-3 order-2 lg:order-2">
                        {/* Form - Second on mobile */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-primary-100/50 p-5 hover:shadow-3xl transition-all duration-300">
                            <div className="text-center mb-4">
                                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-medical mx-auto mb-3 rounded-full"></div>
                                <h3 className="text-xl font-bold text-gray-900">Quick Consultation</h3>
                                <p className="text-gray-600 text-sm">Get expert advice on your condition</p>
                            </div>

                            <form onSubmit={handleHeroFormSubmit} className="space-y-3">
                                {/* Two fields in one row */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="hero-name" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            id="hero-name"
                                            name="name"
                                            value={heroFormData.name}
                                            onChange={handleHeroFormChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="hero-phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="hero-phone"
                                            name="phone"
                                            value={heroFormData.phone}
                                            onChange={handleHeroFormChange}
                                            required
                                            placeholder="Your phone"
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="hero-concern" className="block text-xs font-medium text-gray-700 mb-1">Primary Concern</label>
                                    <select
                                        id="hero-concern"
                                        name="concern"
                                        value={heroFormData.concern}
                                        onChange={handleHeroFormChange}
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
                                    >
                                        <option value="">Select your condition</option>
                                        <option value="tmj">TMJ Pain / Jaw Problems</option>
                                        <option value="facial-injury">Facial Fracture / Injury</option>
                                        <option value="jaw-correction">Jaw Correction / Alignment</option>
                                        <option value="cosmetic">Cosmetic Facial Surgery</option>
                                        <option value="sleep-apnea">Sleep Apnea</option>
                                        <option value="other">Other Condition</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="hero-message" className="block text-xs font-medium text-gray-700 mb-1">Message (Optional)</label>
                                    <textarea
                                        id="hero-message"
                                        name="message"
                                        value={heroFormData.message}
                                        onChange={handleHeroFormChange}
                                        rows="3"
                                        placeholder="Tell us about your symptoms or questions..."
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm resize-none"
                                    />
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2 text-sm">
                                    <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">
                                        <SafeIcon icon={FaPaperPlane} className="text-white text-xs" />
                                    </div>
                                    <span>Get Expert Advice</span>
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Secure & confidential consultation
                                </p>
                            </form>
                        </div>

                        {/* Hero Image - Third on mobile */}
                        <div className="relative">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=220"
                                    alt="Maxillofacial Surgeon Consultation"
                                    className="w-full h-36 lg:h-44 object-cover"
                                />
                                {/* Overlay Card */}
                                {/* <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-primary-600 rounded-md flex items-center justify-center shadow-sm">
                                                <SafeIcon icon={FaUserMd} className="text-white text-xs" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-xs">Expert Surgeons</h4>
                                                <p className="text-xs text-gray-600">Complex Procedures</p>
                                            </div>
                                        </div>
                                        <div className="flex -space-x-1">
                                            {['photo-1537368910025-700350fe46c7', 'photo-1612349317150-e413f6a5b16d'].map((photo, i) => (
                                                <img key={i} className="w-5 h-5 rounded-full border border-white" src={`https://images.unsplash.com/${photo}?w=20&h=20&fit=crop`} alt="" />
                                            ))}
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

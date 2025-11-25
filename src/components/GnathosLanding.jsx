import React, { useState } from 'react';
import '../styles/GnathosLanding.css';
import SafeIcon from '../common/SafeIcon';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaCheckCircle, 
  FaStar, 
  FaUserMd, 
  FaHospital, 
  FaMicroscope, 
  FaClipboardList, 
  FaHeart, 
  FaPaperPlane, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaChevronDown,
  FaQuoteLeft
} from 'react-icons/fa';

const GnathosLanding = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    phone: '',
    concern: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 2 hours during business hours.');
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 2 hours during business hours.');
    setHeroFormData({ name: '', phone: '', concern: '', message: '' });
  };

  const handleHeroFormChange = (e) => {
    const { name, value } = e.target;
    setHeroFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="gnathos-wrapper">
      {/* Header */}
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
              <a href="tel:+919000666476" className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5">
                <SafeIcon icon={FaPhone} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-50">
        <div className="flex gap-3">
          <a href="tel:+919000666476" className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors">
            <SafeIcon icon={FaPhone} className="mr-2" />
            Call Now
          </a>
          <a href="https://wa.me/919000666476" className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
            <SafeIcon icon={FaWhatsapp} className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>

      <main className="pt-20 pb-20 md:pb-0">
        {/* Hero Section */}
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
                    { icon: FaHeart, text: "12,000+ patients", color: "from-red-500 to-pink-600", bgColor: "bg-red-50" },
                    { icon: FaMicroscope, text: "Advanced tech", color: "from-purple-500 to-indigo-600", bgColor: "bg-purple-50" },
                    { icon: FaCheckCircle, text: "Same-day slots", color: "from-green-500 to-emerald-600", bgColor: "bg-green-50" },
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
                <div className="flex items-center space-x-3 p-2 bg-white/70 backdrop-blur-sm rounded-lg border border-primary-100/50">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-sm flex items-center justify-center shadow-sm">
                        <SafeIcon icon={FaStar} className="text-white text-xs" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8/5 • 12,000+ reviews</span>
                </div>

                {/* CTA Buttons - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:flex gap-3">
                  <a href="tel:+919000666476" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl text-sm">
                    <SafeIcon icon={FaPhone} className="mr-2" />
                    Call Now
                  </a>
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
                    <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

 {/* Why Choose Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-10 w-32 h-32 bg-primary-100/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-medical-pale/40 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
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
                Specialized expertise with a patient-first approach, combining advanced technology with compassionate care for optimal outcomes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  icon: FaHospital,
                  title: "Specialized Centre",
                  description: "Exclusively focused on facial, jaw and oral surgery – not a generic dental clinic.",
                  color: "from-blue-500 to-primary-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200"
                },
                {
                  icon: FaMicroscope,
                  title: "Advanced Technology",
                  description: "Digital imaging, 3D surgical planning, and modern operating theatre setup.",
                  color: "from-purple-500 to-primary-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200"
                },
                {
                  icon: FaClipboardList,
                  title: "Comprehensive Care",
                  description: "Complete treatment pathway from TMJ to trauma reconstruction and cosmetic procedures.",
                  color: "from-green-500 to-primary-600",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200"
                },
                {
                  icon: FaHeart,
                  title: "Compassionate Approach",
                  description: "Clear explanations, ethical recommendations, and comfort-focused care throughout.",
                  color: "from-red-500 to-primary-600",
                  bgColor: "bg-red-50",
                  borderColor: "border-red-200"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <SafeIcon icon={item.icon} className="text-white text-xl" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-primary-100/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">12,000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">4.8★</div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                <div className="hidden md:flex items-center space-x-3">
                  <a href="tel:+919000666476" className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-1">
                    <SafeIcon icon={FaPhone} className="mr-2" />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Doctor Section - Compact & Professional */}
        <section className="relative py-16 bg-gradient-to-br from-white via-primary-50/30 to-medical-pale/20 overflow-hidden">
          {/* Subtle Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-32 h-32 bg-primary-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-40 h-40 bg-medical-pale/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary-100/50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <SafeIcon icon={FaUserMd} className="text-primary-500" />
                <span>Expert Care</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our 
                <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                  Expert Doctor
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized maxillofacial expertise with decades of experience in complex facial and jaw surgeries.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-primary-100/50 overflow-hidden">
              {/* Simple header accent */}
              <div className="h-1 bg-gradient-to-r from-primary-500 to-medical"></div>
              
              <div className="p-6 md:p-8">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                  
                  {/* Doctor Image */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="relative">
                      <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                        {/* Simple elegant border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-medical rounded-full p-0.5">
                          <div className="w-full h-full bg-white rounded-full p-1">
                            <img 
                              src="https://gnathosface.com/assets/images/Dr.-Suresh.webp" 
                              alt="Dr. Suresh P - Maxillofacial Surgeon" 
                              className="w-full h-full object-cover rounded-full shadow-lg"
                            />
                          </div>
                        </div>
                        
                        {/* Clean badges */}
                        <div className="absolute -top-2 -right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          20+ Years
                        </div>
                        <div className="absolute -bottom-2 -left-2 bg-medical text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Expert Surgeon
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="space-y-4">
                      {/* Badge */}
                      <div className="inline-flex items-center space-x-2 bg-primary-100/50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                        <SafeIcon icon={FaStar} className="text-primary-500" />
                        <span>Meet Your Specialist</span>
                      </div>

                      {/* Name & Title */}
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                          Dr. Suresh P
                        </h2>
                        <p className="text-lg lg:text-xl text-primary-600 font-semibold mb-2">
                          Senior Consultant & TMJ Specialist
                        </p>
                        <p className="text-gray-600">
                          Dedicated to advanced care for jaw joints, facial structure and oral function.
                        </p>
                      </div>

                      {/* Description */}
                      <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Dr. Suresh P is a highly experienced Oral and Maxillofacial Surgeon at GNATHOS, specialising in TMJ disorders, jaw correction surgery and facial trauma. With over two decades of surgical expertise, he helps patients restore comfort, function and aesthetics with precision and compassion.
                        </p>
                      </div>

                      {/* Simple Stats */}
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <div className="bg-primary-50 text-primary-700 rounded-lg p-3 text-center min-w-[70px]">
                          <div className="text-lg font-bold">98%</div>
                          <div className="text-xs">Success</div>
                        </div>
                        <div className="bg-primary-50 text-primary-700 rounded-lg p-3 text-center min-w-[70px]">
                          <div className="text-lg font-bold">4.9★</div>
                          <div className="text-xs">Rating</div>
                        </div>
                        <div className="bg-primary-50 text-primary-700 rounded-lg p-3 text-center min-w-[70px]">
                          <div className="text-lg font-bold">12K+</div>
                          <div className="text-xs">Patients</div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {["TMJ Disorders", "Facial Trauma", "Jaw Correction", "Aesthetic Surgery"].map((specialty, index) => (
                          <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                        <a href="tel:+919000666476" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                          <SafeIcon icon={FaPhone} className="mr-2" />
                          Consult Dr. Suresh P
                        </a>
                        <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                          <SafeIcon icon={FaWhatsapp} className="mr-2" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Beautiful CTA Section */}
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
                <a href="tel:+919000666476" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl">
                  <SafeIcon icon={FaPhone} className="mr-3" />
                  Call Now - Free Consultation
                </a>
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

        {/* Conditions We Treat - Redesigned */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-24 h-24 bg-primary-100/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-medical-pale/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-50/30 to-medical-pale/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
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
                Comprehensive maxillofacial solutions for complex facial and jaw conditions with precision and care.
              </p>
            </div>

            {/* Conditions Grid - Compact & Modern */}
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "TMJ Disorders", 
                  symptom: "Jaw pain, clicking, locking?", 
                  benefit: "Restore comfortable jaw movement",
                  icon: FaUserMd,
                  color: "from-blue-500 to-primary-600"
                },
                { 
                  title: "Facial Trauma", 
                  symptom: "Accident or sports injury?", 
                  benefit: "Expert reconstruction & recovery",
                  icon: FaHospital,
                  color: "from-red-500 to-pink-600"
                },
                { 
                  title: "Jaw Correction", 
                  symptom: "Misaligned bite issues?", 
                  benefit: "Achieve proper facial balance",
                  icon: FaMicroscope,
                  color: "from-green-500 to-emerald-600"
                },
                { 
                  title: "Sleep Apnea", 
                  symptom: "Snoring & sleep problems?", 
                  benefit: "Better sleep & health",
                  icon: FaHeart,
                  color: "from-purple-500 to-indigo-600"
                },
                { 
                  title: "Facial Surgery", 
                  symptom: "Seeking enhancement?", 
                  benefit: "Natural-looking precision results",
                  icon: FaCheckCircle,
                  color: "from-pink-500 to-rose-600"
                },
                { 
                  title: "Cysts & Tumors", 
                  symptom: "Unusual growths?", 
                  benefit: "Safe removal & full recovery",
                  icon: FaClipboardList,
                  color: "from-orange-500 to-amber-600"
                },
                { 
                  title: "Oral Cancers", 
                  symptom: "Persistent mouth issues?", 
                  benefit: "Expert diagnosis & care",
                  icon: FaMicroscope,
                  color: "from-cyan-500 to-blue-600"
                },
                { 
                  title: "Jaw Reconstruction", 
                  symptom: "Complex jaw problems?", 
                  benefit: "Advanced reconstruction solutions",
                  icon: FaHospital,
                  color: "from-teal-500 to-green-600"
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Icon Header */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={item.icon} className="text-white text-xl" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {item.symptom}
                  </p>
                  <p className="text-sm text-primary-600 font-medium">
                    {item.benefit}
                  </p>
                  
                  {/* Hover Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>
            
            {/* Mobile Slider */}
            <div className="md:hidden">
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4" style={{ width: 'max-content' }}>
                  {[
                    { 
                      title: "TMJ Disorders", 
                      symptom: "Jaw pain, clicking, locking?", 
                      benefit: "Restore comfortable jaw movement",
                      icon: FaUserMd,
                      color: "from-blue-500 to-primary-600"
                    },
                    { 
                      title: "Facial Trauma", 
                      symptom: "Accident or sports injury?", 
                      benefit: "Expert reconstruction & recovery",
                      icon: FaHospital,
                      color: "from-red-500 to-pink-600"
                    },
                    { 
                      title: "Jaw Correction", 
                      symptom: "Misaligned bite issues?", 
                      benefit: "Achieve proper facial balance",
                      icon: FaMicroscope,
                      color: "from-green-500 to-emerald-600"
                    },
                    { 
                      title: "Sleep Apnea", 
                      symptom: "Snoring & sleep problems?", 
                      benefit: "Better sleep & health",
                      icon: FaHeart,
                      color: "from-purple-500 to-indigo-600"
                    },
                    { 
                      title: "Facial Surgery", 
                      symptom: "Seeking enhancement?", 
                      benefit: "Natural-looking precision results",
                      icon: FaCheckCircle,
                      color: "from-pink-500 to-rose-600"
                    },
                    { 
                      title: "Cysts & Tumors", 
                      symptom: "Unusual growths?", 
                      benefit: "Safe removal & full recovery",
                      icon: FaClipboardList,
                      color: "from-orange-500 to-amber-600"
                    },
                    { 
                      title: "Oral Cancers", 
                      symptom: "Persistent mouth issues?", 
                      benefit: "Expert diagnosis & care",
                      icon: FaMicroscope,
                      color: "from-cyan-500 to-blue-600"
                    },
                    { 
                      title: "Jaw Reconstruction", 
                      symptom: "Complex jaw problems?", 
                      benefit: "Advanced reconstruction solutions",
                      icon: FaHospital,
                      color: "from-teal-500 to-green-600"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-shrink-0 w-72">
                      {/* Icon Header */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <SafeIcon icon={item.icon} className="text-white text-xl" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {item.symptom}
                      </p>
                      <p className="text-sm text-primary-600 font-medium">
                        {item.benefit}
                      </p>
                      
                      {/* Hover Gradient Border */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      
                      {/* Bottom Accent Line */}
                      <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <p className="text-sm text-gray-500 bg-white/60 px-4 py-2 rounded-full">
                  ← Scroll to see all conditions →
                </p>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-primary-100/50">
                <div className="text-primary-600">
                  <SafeIcon icon={FaCheckCircle} className="text-2xl mb-1" />
                  <p className="text-sm font-medium">Expert Diagnosis</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-primary-600">
                  <SafeIcon icon={FaHeart} className="text-2xl mb-1" />
                  <p className="text-sm font-medium">Personalized Care</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-primary-600">
                  <SafeIcon icon={FaStar} className="text-2xl mb-1" />
                  <p className="text-sm font-medium">Proven Results</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                <div className="hidden md:flex items-center space-x-3">
                  <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200">
                    <SafeIcon icon={FaPaperPlane} className="mr-2" />
                    Get Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* Success Stories CTA */}
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
                <span className="text-primary-500">Happy Patients</span>
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


         {/* Before & After Results - Simple Slider */}
        <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
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
                  { image: "fb1.webp", title: "TMJ & Jaw Correction" },
                  { image: "fb2.webp", title: "Facial Reconstruction" },
                  { image: "fb3.webp", title: "Sleep Apnea Treatment" },
                  { image: "fb4.webp", title: "Cosmetic Enhancement" }
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
                      />
                      {/* Badge */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-primary-500 to-medical text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Before & After
                      </div>
                    </div>
                    
                  
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-primary-500 to-medical rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
            
        
            
            {/* Simple CTA */}
            <div className="text-center mt-12">
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
            </div>
          </div>
        </section>

        {/* Patient Testimonials - Redesigned */}
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
              {[
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
              ].map((item, index) => (
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


         {/* Lead Capture Section - Enhanced */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden" id="contact">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-medical-pale/40 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <SafeIcon icon={FaUserMd} className="text-green-500" />
                <span>Expert Consultation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Talk to a Maxillofacial 
                <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                  Expert at Gnathos
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get personalized guidance from Dr. Suresh P and discover the best treatment options for your specific condition.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Benefits List */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What You Can Expect:</h3>
                  <ul className="space-y-4">
                    {[
                      "Share your symptoms or condition with our specialists",
                      "Get expert guidance on whether you need in-person evaluation",
                      "We'll help you plan your next steps for treatment",
                      "Receive personalized treatment recommendations"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <SafeIcon icon={FaCheckCircle} className="text-green-600 text-sm" />
                        </div>
                        <span className="text-gray-700">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Location Information */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <SafeIcon icon={FaMapMarkerAlt} className="text-primary-500 mr-3" />
                    Our Location
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <SafeIcon icon={FaHospital} className="text-primary-600 text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">CARE Hospitals</h4>
                        <p className="text-gray-700 text-sm">Jayabheri Pine Valley, Road No. 2, Gachibowli, Hi-tech City, Hyderabad - 500032</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FaPhone} className="text-green-600 text-sm" />
                      </div>
                      <span className="text-gray-700">+91 9000666476</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FaEnvelope} className="text-blue-600 text-sm" />
                      </div>
                      <span className="text-gray-700">gnathosface@gmail.com</span>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">Consultation Hours:</p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium">Emergency Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Direct Contact */}
                <div className="bg-gradient-to-r from-primary-500 to-medical rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">Prefer Direct Contact?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/919000666476" className="inline-flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg" target="_blank" rel="noopener noreferrer">
                      <SafeIcon icon={FaWhatsapp} className="mr-2" />
                      Chat on WhatsApp
                    </a>
                    <a href="tel:+919000666476" className="inline-flex items-center justify-center px-4 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm">
                      <SafeIcon icon={FaPhone} className="mr-2" />
                      Call Clinic
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Call Back</h3>
                    <p className="text-gray-600">We'll contact you within 2 hours during business hours</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="contact-name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="contact-phone" 
                        name="phone" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      name="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-concern" className="block text-sm font-medium text-gray-700 mb-2">Primary Concern</label>
                    <select 
                      id="contact-concern" 
                      name="concern" 
                      defaultValue=""
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="" disabled>Select your condition</option>
                      <option value="tmj">TMJ Pain / Jaw Problems</option>
                      <option value="facial-injury">Facial Fracture / Injury</option>
                      <option value="jaw-correction">Jaw Correction / Alignment</option>
                      <option value="cosmetic">Cosmetic Facial Surgery</option>
                      <option value="sleep-apnea">Sleep Apnea</option>
                      <option value="other">Other Condition</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea 
                      id="contact-message" 
                      name="message" 
                      rows="4" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe your symptoms or questions..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2">
                    <SafeIcon icon={FaPaperPlane} />
                    <span>Request a Call Back</span>
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    🔒 Your details are secure and used only to respond to your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Redesigned */}
        <section className="relative py-20 bg-gradient-to-br from-primary-50/30 via-white to-gray-50/50 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-24 h-24 bg-primary-100/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-medical-pale/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary-100/50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <SafeIcon icon={FaClipboardList} className="text-primary-500" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked 
                <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about maxillofacial treatment and what to expect from your consultation.
              </p>
            </div>
            
            {/* FAQ List */}
            <div className="space-y-4">
              {[
                { q: "Do I always need surgery for TMJ or jaw problems?", a: "Not necessarily. We always try conservative treatments first, including medication, physiotherapy, and lifestyle modifications. Surgery is recommended only when non-surgical methods don't provide adequate relief and the condition significantly impacts your quality of life." },
                { q: "How do I know if I need a maxillofacial surgeon instead of a dentist?", a: "Maxillofacial surgeons specialize in complex conditions involving the face, jaw bones, and surrounding structures. If you have jaw pain, facial trauma, misaligned bite, facial swellings, or need surgical correction of facial deformities, a maxillofacial surgeon is the right specialist." },
                { q: "What is the recovery time after jaw or facial surgery?", a: "Recovery varies depending on the procedure. Minor procedures may require 1-2 weeks, while major jaw corrections can take 6-8 weeks for initial healing. We provide detailed recovery guidelines and support throughout your healing process." },
                { q: "Will my treatment be painful?", a: "We use advanced anesthesia and pain management techniques to ensure your comfort. Most patients report that post-surgical discomfort is very manageable with prescribed medications, and pain typically decreases significantly within the first few days." },
                { q: "Is treatment available for accidents and emergency facial injuries?", a: "Yes, we provide 24/7 emergency care for facial trauma at CARE Hospitals. Facial injuries require immediate attention to prevent complications and ensure optimal healing. Contact us immediately for any facial emergency." },
                { q: "Do you accept referrals from dentists and other doctors?", a: "Absolutely. We work closely with referring doctors and dentists, providing detailed reports and maintaining collaborative care. You can also directly contact us for consultation without a referral." }
              ].map((item, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <button 
                    className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors pr-4">
                      {item.q}
                    </h4>
                    <div 
                      className={`flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        openFaq === index ? 'rotate-180 bg-primary-500' : 'group-hover:bg-primary-200'
                      }`}
                    >
                      <SafeIcon 
                        icon={FaChevronDown} 
                        className={`text-sm transition-colors ${
                          openFaq === index ? 'text-white' : 'text-primary-600'
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* FAQ Bottom CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-primary-50 to-medical-pale rounded-2xl p-8 border border-primary-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Still Have Questions?
                </h4>
                <p className="text-gray-600 mb-6">
                  Our specialists are here to help. Get personalized answers to your specific concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919000666476" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                    <SafeIcon icon={FaPhone} className="mr-2" />
                    Call for Consultation
                  </a>
                  <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                    <SafeIcon icon={FaWhatsapp} className="mr-2" />
                    Ask via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Final CTA Section */}
        <section className="final-cta section">
          <div className="section-container">
            <h2 className="final-heading">Ready to Fix Your Facial or Jaw Problem?</h2>
            <p className="final-subheading">Whether it's TMJ pain, facial injury or jaw alignment, Gnathos Face offers advanced maxillofacial solutions in Hyderabad.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <SafeIcon icon={FaPhone} />
                </div>
                <div className="contact-details">
                  <h4>Call or WhatsApp</h4>
                  <p>+91 9000666476</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <SafeIcon icon={FaEnvelope} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>gnathosface@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                   <SafeIcon icon={FaMapMarkerAlt} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>CARE Hospitals Hi-tech City<br/>Jayabheri Pine Valley, Gachibowli</p>
                </div>
              </div>
            </div>
            
            <div className="final-buttons">
              <a href="https://wa.me/919000666476" className="btn btn-whatsapp-large" target="_blank" rel="noopener noreferrer">
                <SafeIcon icon={FaWhatsapp} /> Book WhatsApp Appointment
              </a>
              <a href="tel:+919000666476" className="btn btn-white-large">
                <SafeIcon icon={FaPhone} /> Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Enhanced */}
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
              <a 
                href="tel:+919000666476" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
              >
                <SafeIcon icon={FaPhone} className="mr-2" />
                Call Now
              </a>
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
    </div>
  );
};

export default GnathosLanding;
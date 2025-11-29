import React, { useState } from 'react';
import '../styles/GnathosLanding.css';

// Import section components
import Header from './sections/Header';
import MobileBottomCTA from './sections/MobileBottomCTA';
import HeroSection from './sections/HeroSection';
import WhyChooseSection from './sections/WhyChooseSection';
import DoctorSection from './sections/DoctorSection';
import CTASection from './sections/CTASection';
import ConditionsSection from './sections/ConditionsSection';
import SuccessStoriesCTA from './sections/SuccessStoriesCTA';
import ResultsSection from './sections/ResultsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './sections/Footer';

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
      <Header />
      <MobileBottomCTA />

      <main className="pt-20 pb-20 md:pb-0">
        <HeroSection
          heroFormData={heroFormData}
          handleHeroFormChange={handleHeroFormChange}
          handleHeroFormSubmit={handleHeroFormSubmit}
        />
         <ResultsSection />
           <DoctorSection />
        <WhyChooseSection />
        <CTASection />
        <ConditionsSection handleScroll={handleScroll} />
       
       
        
        <ContactSection openFaq={openFaq} toggleFaq={toggleFaq} />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default GnathosLanding;
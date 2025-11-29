import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const FinalCTASection = () => {
    return (
        <section className="final-cta section">
            <div className="section-container">
                <h2 className="final-heading">Ready to Fix Your Facial or Jaw Problem?</h2>
                <p className="final-subheading">Whether it's TMJ pain, facial injury or jaw alignment, Gnathos Face offers advanced maxillofacial solutions in Hyderabad.</p>

                <div className="contact-info">
                    {/* <div className="contact-item">
                        <div className="contact-icon">
                            <SafeIcon icon={FaPhone} />
                        </div>
                        <div className="contact-details">
                            <h4>Call or WhatsApp</h4>
                            <p>+91 9000666476</p>
                        </div>
                    </div> */}

                    {/* <div className="contact-item">
                        <div className="contact-icon">
                            <SafeIcon icon={FaEnvelope} />
                        </div>
                        <div className="contact-details">
                            <h4>Email</h4>
                            <p>gnathosface@gmail.com</p>
                        </div>
                    </div> */}

                    <div className="contact-item">
                        <div className="contact-icon">
                            <SafeIcon icon={FaMapMarkerAlt} />
                        </div>
                        <div className="contact-details">
                            <h4>Location</h4>
                            <p>CARE Hospitals Hi-tech City<br />Jayabheri Pine Valley, Gachibowli</p>
                        </div>
                    </div>
                </div>

                <div className="final-buttons">
                    <a href="https://wa.me/919000666476" className="btn btn-whatsapp-large" target="_blank" rel="noopener noreferrer">
                        <SafeIcon icon={FaWhatsapp} /> Book WhatsApp Appointment
                    </a>
                    <button 
                        onClick={() => {
                            const element = document.getElementById('hero-name');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                element.focus();
                            }
                        }}
                        className="btn btn-white-large"
                    >
                        <SafeIcon icon={FaPhone} /> Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;

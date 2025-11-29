import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import {
    FaUserMd,
    FaCheckCircle,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaHospital,
    FaWhatsapp,
    FaChevronDown,
    FaClipboardList
} from 'react-icons/fa';

const ContactSection = ({ openFaq, toggleFaq }) => {
    const faqs = [
        { q: "Do I always need surgery for TMJ or jaw problems?", a: "Not necessarily. We always try conservative treatments first, including medication, physiotherapy, and lifestyle modifications. Surgery is recommended only when non-surgical methods don't provide adequate relief and the condition significantly impacts your quality of life." },
        { q: "How do I know if I need a maxillofacial surgeon instead of a dentist?", a: "Maxillofacial surgeons specialize in complex conditions involving the face, jaw bones, and surrounding structures. If you have jaw pain, facial trauma, misaligned bite, facial swellings, or need surgical correction of facial deformities, a maxillofacial surgeon is the right specialist." },
        { q: "What is the recovery time after jaw or facial surgery?", a: "Recovery varies depending on the procedure. Minor procedures may require 1-2 weeks, while major jaw corrections can take 6-8 weeks for initial healing. We provide detailed recovery guidelines and support throughout your healing process." },
        { q: "Will my treatment be painful?", a: "We use advanced anesthesia and pain management techniques to ensure your comfort. Most patients report that post-surgical discomfort is very manageable with prescribed medications, and pain typically decreases significantly within the first few days." },
        { q: "Is treatment available for accidents and emergency facial injuries?", a: "Yes, we provide 24/7 emergency care for facial trauma at CARE Hospitals. Facial injuries require immediate attention to prevent complications and ensure optimal healing. Contact us immediately for any facial emergency." },
        { q: "Do you accept referrals from dentists and other doctors?", a: "Absolutely. We work closely with referring doctors and dentists, providing detailed reports and maintaining collaborative care. You can also directly contact us for consultation without a referral." }
    ];
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden" id="contact">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-medical-pale/40 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Get answers to common questions about maxillofacial treatment and what to expect from your consultation.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <button
                                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors pr-4">
                                    {item.q}
                                </h4>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-primary-500' : 'group-hover:bg-primary-200'
                                        }`}
                                >
                                    <SafeIcon
                                        icon={FaChevronDown}
                                        className={`text-sm transition-colors ${openFaq === index ? 'text-white' : 'text-primary-600'
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
                    <div className="bg-gradient-to-r from-primary-50 to-medical-pale rounded-2xl p-8 border border-primary-100 max-w-4xl mx-auto">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Still Have Questions?
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Our specialists are here to help. Get personalized answers to your specific concerns.
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
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg"
                            >
                                <SafeIcon icon={FaPhone} className="mr-2" />
                                Schedule Consultation
                            </button>
                            <a href="https://wa.me/919000666476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
                                <SafeIcon icon={FaWhatsapp} className="mr-2" />
                                Ask via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import { FaUserMd, FaPhone, FaWhatsapp } from 'react-icons/fa';

const DoctorSection = () => {
    const doctors = [
        {
            name: "Dr. Suresh P",
            title: "20+ Years • Senior Consultant and TMJ Specialist",
            image: "https://gnathosface.com/assets/images/Dr.-Suresh.webp",
            phone: "+919000666476"
        },
        {
            name: "Dr. Navatha Mortha",
            title: "15+ Years • Senior Consultant and TMJ Specialist",
            image: "https://gnathosface.com/assets/images/Dr.%20Navatha-Mortha-Facial.webp",
            phone: "+919000666476"
        }
    ];

    return (
        <section className="relative py-8 bg-gradient-to-br from-white via-primary-50/30 to-medical-pale/20 overflow-hidden">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-32 h-32 bg-primary-100/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-40 h-40 bg-medical-pale/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center space-x-2 bg-primary-100/50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <SafeIcon icon={FaUserMd} className="text-primary-500" />
                        <span>Expert Team</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Meet Our
                        <span className="block text-primary-500 bg-gradient-to-r from-primary-500 to-medical bg-clip-text text-transparent">
                            Specialist Doctors
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experienced maxillofacial surgeons delivering exceptional care in facial and jaw treatments.[attached_file:1]
                    </p>
                </div>

                {/* Doctors Grid - 2 cards per row on ALL screens including mobile */}
                <div className="grid grid-cols-2 gap-4">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-primary-100/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {/* Header Accent */}
                            <div className="h-1 bg-gradient-to-r from-primary-500 to-medical"></div>

                            <div className="p-4 text-center">
                                {/* Doctor Image */}
                                <div className="relative mx-auto mb-3">
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-medical rounded-full p-0.5 group-hover:scale-105 transition-transform duration-300">
                                            <div className="w-full h-full bg-white rounded-full p-1">
                                                <img
                                                    src={doctor.image}
                                                    alt={doctor.name}
                                                    className="w-full h-full object-cover rounded-full shadow-md"
                                                    onError={(e) => {
                                                        e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400";
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Doctor Info */}
                                <div className="space-y-1.5">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-primary-600 hidden  font-semibold text-xs sm:text-sm leading-relaxed">
                                        {doctor.title}
                                    </p>

                                    {/* Small CTA Buttons - Side by side even on mobile */}
                                    <div className="flex gap-1.5 pt-2">
                                        {/* <a 
                                            href={`tel:${doctor.phone}`} 
                                            className="flex-1 inline-flex items-center justify-center px-2.5 py-1.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 shadow-sm text-xs"
                                        >
                                            <SafeIcon icon={FaPhone} className="mr-1 text-xs flex-shrink-0" />
                                            Call
                                        </a> */}
                                        <a 
                                            href={`https://wa.me/${doctor.phone}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center px-2.5 py-1.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200 shadow-sm text-xs"
                                        >
                                            <SafeIcon icon={FaWhatsapp} className="mr-1 text-xs flex-shrink-0" />
                                            Whatsapp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorSection;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 blur-[150px] rounded-full" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Find Us</span>
                        <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight text-[#1A1A1A]">Visit Our Boutique <br /> <span className="text-primary italic">In Islamabad</span></h2>

                        <div className="space-y-10 mt-16">
                            <div className="flex items-start gap-6 group">
                                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100 group-hover:border-primary/50 transition-colors shadow-sm">
                                    <MapPin className="text-primary" size={28} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl mb-2 text-[#1A1A1A]">Location</h4>
                                    <p className="text-gray-600 font-light text-lg">Suite 12, First Floor, F-10 Markaz, Islamabad, 44000, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100 group-hover:border-primary/50 transition-colors shadow-sm">
                                    <Phone className="text-primary" size={28} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl mb-2 text-[#1A1A1A]">Call Us</h4>
                                    <p className="text-gray-600 font-light text-lg">051 0000000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100 group-hover:border-primary/50 transition-colors shadow-sm">
                                    <Clock className="text-primary" size={28} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl mb-2 text-[#1A1A1A]">Hours</h4>
                                    <p className="text-primary font-semibold italic text-lg">Open · Closes 11 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-6">
                            <a
                                href="https://wa.me/92510000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-3 !px-10"
                            >
                                <MessageSquare size={20} /> WhatsApp Us
                            </a>
                            <a
                                href="tel:+92510000000"
                                className="btn-secondary flex items-center gap-3 !px-10"
                            >
                                <Phone size={20} /> Call Now
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[600px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.34444!2d71.4938!3d30.2158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3d4fba0005d5%3A0x6a0f084be1ddae93!2sFragrance%20Atelier!5e0!3m2!1sen!2s!4v1707210000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

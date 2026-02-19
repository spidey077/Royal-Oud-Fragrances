import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding bg-[#F8F9FA] relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-10 -left-10 w-64 h-64 border-2 border-primary/10 z-0 rounded-2xl" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-primary/10 z-0 rounded-2xl" />
                        <img
                            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
                            alt="Store Interior"
                            className="relative z-10 w-full h-[650px] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Story</span>
                        <h2 className="text-5xl md:text-6xl mb-10 leading-tight text-[#1A1A1A] font-serif">
                            Boutique Fragrance <br /> Shop in <span className="text-primary italic">Islamabad</span>
                        </h2>
                        <div className="space-y-8 text-gray-600 text-lg font-light leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Established in the heart of Islamabad at F-10 Markaz, Royal Oud Fragrances is born from a passion for scent artistry. We specialize in premium, long-lasting fragrances that leave a lasting impression.
                            </motion.p>
                            <p>
                                Our curated selection focuses on fresh, daily-use scents that resonate with the local perfume enthusiast. We believe a fragrance is more than just a scent—it's a signature of your personality.
                            </p>
                            <p>
                                Trusted by scent enthusiasts in Islamabad, we pride ourselves on personalized recommendations and quality that rivals global luxury brands.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-2 gap-12">
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h4 className="text-primary text-4xl font-serif mb-2 drop-shadow-sm">11PM</h4>
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Premium Service</p>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h4 className="text-primary text-4xl font-serif mb-2 drop-shadow-sm">500+</h4>
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Premium Fragrances</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

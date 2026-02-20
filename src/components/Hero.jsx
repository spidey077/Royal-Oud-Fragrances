import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 lg:pt-20">
            {/* Clean minimalist background */}
            <div className="absolute inset-0 z-0 bg-[#FBFBFB]" />

            <div className="container mx-auto px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl py-8 md:py-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center space-x-3 mb-6 mt-8 md:mt-0"
                        >
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#E63946" className="mr-1" />
                                ))}
                            </div>
                            <span className="text-[10px] tracking-[0.3em] text-gray-600 font-medium uppercase">
                                4.9 / 5 Excellence Rated
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-7xl font-serif leading-tight mb-6 text-[#1A1A1A]"
                        >
                            Royal Oud Fragrances <br />
                            <span className="text-primary italic drop-shadow-sm text-3xl md:text-6xl">Islamabad</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-gray-700 mb-8 max-w-xl font-light leading-relaxed"
                        >
                            Discover Islamabad's most exclusive boutique perfumes. Long-lasting quality and signature scents curated for you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#collection" className="btn-primary">Explore Collection</a>
                            <a href="#contact" className="btn-secondary">Visit Our Store</a>
                        </motion.div>
                    </div>

                    {/* Stylish Product Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:flex justify-center items-center relative"
                    >
                        <div className="relative w-[450px] h-[550px]">
                            {/* Decorative background shape */}
                            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-3 z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop"
                                alt="Royal Oud Signature Perfume"
                                className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 border border-primary/10"
                            />
                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-primary/5"
                            >
                                <p className="text-primary font-serif text-2xl italic mb-1">Signature</p>
                                <p className="text-[10px] tracking-widest uppercase text-gray-500">Collection 2026</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#E63946] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;

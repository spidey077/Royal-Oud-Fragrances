import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-32">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1563170351-be82bc888bb4?q=80&w=1920&auto=format&fit=crop"
                    alt="Premium Perfume Bottle"
                    className="w-full h-full object-cover scale-105"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-3 mb-8"
                    >
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#E63946" className="mr-1" />
                            ))}
                        </div>
                        <span className="text-sm tracking-[0.3em] text-gray-600 font-medium uppercase">
                            4.9 / 5 Excellence Rated
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-serif leading-tight mb-8 text-[#1A1A1A]"
                    >
                        Royal Oud Fragrances <br />
                        <span className="text-primary italic drop-shadow-sm">Islamabad</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl font-light leading-relaxed"
                    >
                        Discover Islamabad's most exclusive boutique perfumes. Long-lasting quality and signature scents curated for you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <a href="#collection" className="btn-primary">Explore Collection</a>
                        <a href="#contact" className="btn-secondary">Visit Our Store</a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#E63946] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;

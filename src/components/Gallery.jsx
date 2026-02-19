import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop", title: "Product Detail" },
        { url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop", title: "Lifestyle" },
        { url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop", title: "Store View" }
    ];

    return (
        <section id="gallery" className="section-padding bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Visual Journey</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A]">Store Gallery</h2>
                    <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-sm aspect-square border border-gray-100"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 backdrop-blur-[2px]">
                                <span className="text-sm tracking-[0.3em] text-white uppercase font-bold drop-shadow-md">{img.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

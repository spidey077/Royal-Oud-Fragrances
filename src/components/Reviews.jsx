import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Fahad Ali Naqvi",
            rating: 5,
            text: "I liked their services and bought 2 perfumes for testing purposes. They have good variety for both ladies and gents. I liked their concept and will visit again.",
            date: "4 months ago",
            avatar: "https://i.pravatar.cc/150?u=fahad"
        },
        {
            name: "Syed Gardezi",
            rating: 5,
            text: "I am their regular customer and they are doing really great work in their field.",
            date: "a year ago",
            avatar: "https://i.pravatar.cc/150?u=syed"
        },
        {
            name: "Ahmad Qureshi",
            rating: 5,
            text: "One of the best Fragrance studio in the town.",
            date: "a year ago",
            avatar: "https://i.pravatar.cc/150?u=ahmad"
        }
    ];

    return (
        <section id="reviews" className="section-padding bg-[#F8F9FA] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 blur-[150px] rounded-full" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="flex justify-center text-primary mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={28} fill="#E63946" stroke="#E63946" className="mx-1 font-bold" />
                        ))}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif mb-6 text-[#1A1A1A]">Trusted by Enthusiasts</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-light text-xl leading-relaxed">
                        With an average rating of <span className="text-primary font-bold text-2xl drop-shadow-sm">4.9/5</span> from our elite clientele in Islamabad.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-10 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 glass-effect rounded-3xl relative border border-gray-100 hover:border-primary/30 transition-all duration-500 overflow-hidden group bg-white shadow-sm"
                        >
                            <Quote className="absolute -top-4 -right-4 text-primary/5 group-hover:text-primary/10 transition-colors duration-500" size={120} />
                            <div className="flex text-primary mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#E63946" stroke="#E63946" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-10 font-light leading-relaxed text-lg relative z-10">"{review.text}"</p>
                            <div className="flex justify-between items-center border-t border-gray-100 pt-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm tracking-tight text-[#1A1A1A]">{review.name}</span>
                                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

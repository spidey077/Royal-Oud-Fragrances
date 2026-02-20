import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, UserCheck, Truck } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Clock className="gold-text" size={32} />,
            title: "Long-Lasting",
            description: "Our fragrances are formulated to linger, ensuring you feel fresh from dawn till dusk."
        },
        {
            icon: <Award className="gold-text" size={32} />,
            title: "Premium Selection",
            description: "Handpicked boutique scents that offer a unique alternative to mainstream brands."
        },
        {
            icon: <UserCheck className="gold-text" size={32} />,
            title: "Expert Advice",
            description: "Receive personalized recommendations from our scent experts to find your match."
        },
        {
            icon: <Truck className="gold-text" size={32} />,
            title: "Fast Delivery",
            description: "Convenient in-store pickup and reliable home delivery across Islamabad."
        }
    ];

    return (
        <section id="why-us" className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Fragrance City Edge</span>
                    <h2 className="text-5xl md:text-6xl font-serif mb-6 text-[#1A1A1A]">Why Choose Us?</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-12 glass-effect rounded-2xl border border-gray-100 hover:border-primary/30 transition-all duration-500 group bg-white shadow-sm"
                        >
                            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 text-primary">
                                {React.cloneElement(feature.icon, { className: "text-primary" })}
                            </div>
                            <h3 className="text-2xl font-serif mb-5 group-hover:text-primary transition-colors text-[#1A1A1A]">{feature.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

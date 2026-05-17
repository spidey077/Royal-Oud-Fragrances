import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { useCart } from '../context/CartContext';

const Collection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    const categories = ['All', 'Men', 'Women', 'Unisex', 'Best Sellers'];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('products')
                    .select('*')
                    .order('id', { ascending: true });
                
                if (error) throw error;
                setProductsList(data || []);
            } catch (err) {
                console.error('Error fetching products:', err.message);
                setError(err.message);
                // Fallback to initial local products so the UI doesn't break if Supabase isn't configured yet!
                setProductsList([
                    { id: 1, name: "Midnight Oud", category: "Men", price: "Rs. 4,500", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&h=800&fit=crop", desc: "Deep, woody and mysterious." },
                    { id: 2, name: "Velvet Rose", category: "Women", price: "Rs. 3,800", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&h=800&fit=crop", desc: "Elegant floral notes for the modern woman." }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = activeCategory === 'All'
        ? productsList
        : productsList.filter(p => p.category === activeCategory);

    return (
        <section id="collection" className="section-padding bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Exquisite Selection</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A]">The Collection</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-wrap gap-3"
                    >
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-2.5 rounded-full text-xs tracking-widest uppercase font-bold transition-all duration-500 border-2 ${activeCategory === cat ? 'bg-primary text-white border-primary shadow-[0_5px_15px_rgba(230,57,70,0.3)]' : 'border-gray-200 hover:border-primary/50 text-gray-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[1, 2].map((i) => (
                            <div key={i} className="animate-pulse flex flex-col group relative">
                                <div className="relative overflow-hidden aspect-[4/5] rounded-xl mb-6 bg-gray-50 border border-gray-100 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                                </div>
                                <div className="flex justify-between items-start w-full">
                                    <div className="space-y-2 w-2/3">
                                        <div className="h-6 bg-gray-50 rounded w-full" />
                                        <div className="h-3 bg-gray-50 rounded w-1/2" />
                                    </div>
                                    <div className="h-6 bg-gray-50 rounded w-1/4" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={product.id}
                                    className="group relative"
                                >
                                    <div className="relative overflow-hidden aspect-[4/5] rounded-xl mb-6 shadow-sm border border-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm">
                                            <p className="text-white mb-6 font-light">{product.desc}</p>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="bg-white text-primary px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer border-none"
                                            >
                                                <ShoppingCart size={16} /> Order Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-serif mb-1 text-[#1A1A1A]">{product.name}</h3>
                                            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{product.category}</p>
                                        </div>
                                        <span className="text-primary font-bold">{product.price}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Collection;

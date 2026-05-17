import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ToastContainer = () => {
    const { toasts } = useCart();

    return (
        <div className="fixed top-24 right-6 z-[999] pointer-events-none flex flex-col gap-3 w-full max-w-[350px]">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, x: 50, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9, transition: { duration: 0.2 } }}
                        className="pointer-events-auto w-full glass-effect rounded-xl p-4 flex items-center gap-4 shadow-xl border border-primary/20 bg-white/95 backdrop-blur-md"
                        layout
                    >
                        {/* Image Thumbnail */}
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                            <img
                                src={toast.image}
                                alt={toast.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />
                                <span className="text-[10px] tracking-wider font-bold uppercase text-primary">Saved in Cart!</span>
                            </div>
                            <h4 className="text-sm font-serif text-[#1A1A1A] truncate">{toast.name}</h4>
                            <p className="text-[10px] text-gray-500 font-medium">Boutique Perfume Added</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ToastContainer;

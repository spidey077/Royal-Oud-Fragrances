import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        subtotal,
        deliveryCharges,
        total,
        checkoutOrder,
        clearCart
    } = useCart();

    const [view, setView] = useState('cart'); // 'cart' | 'checkout' | 'success'
    const [loading, setLoading] = useState(false);
    const [orderRef, setOrderRef] = useState('');
    const [whatsappUrl, setWhatsappUrl] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: 'Islamabad'
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        else if (!/^03[0-9]{9}$/.test(formData.phone.trim()) && !/^\+92[0-9]{10}$/.test(formData.phone.trim())) {
            errors.phone = 'Enter a valid Pakistani mobile number (e.g., 03318962777)';
        }
        if (!formData.address.trim()) errors.address = 'Shipping address is required';
        return errors;
    };

    const handleCheckoutSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setLoading(true);
        const result = await checkoutOrder(formData);
        setLoading(false);

        if (result.success) {
            setOrderRef(result.orderId);
            setWhatsappUrl(result.whatsappUrl);
            setView('success');
            
            // Redirect using window.location.href (which is never blocked by browser popup blockers!)
            setTimeout(() => {
                window.location.href = result.whatsappUrl;
            }, 1000);
        } else {
            alert('Failed to place order: ' + result.error);
        }
    };

    const handleClose = () => {
        setIsCartOpen(false);
        // Reset states if they were on success or checkout, but keep cart items unless checked out
        setTimeout(() => {
            if (view === 'success') {
                clearCart();
                setView('cart');
                setFormData({ name: '', phone: '', address: '', city: 'Islamabad' });
            } else {
                setView('cart');
            }
        }, 300);
    };

    const handleContinueShopping = () => {
        clearCart();
        setIsCartOpen(false);
        setTimeout(() => {
            setView('cart');
            setFormData({ name: '', phone: '', address: '', city: 'Islamabad' });
        }, 300);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm cursor-pointer"
                    />

                    {/* Drawer Content */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-screen w-full max-w-md bg-white z-[210] shadow-2xl flex flex-col overflow-hidden border-l border-primary/10"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="text-primary w-5 h-5" />
                                <h2 className="text-xl font-serif text-[#1A1A1A]">Your Cart</h2>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Views Container */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {view === 'cart' && (
                                <div className="h-full flex flex-col">
                                    {cart.length === 0 ? (
                                        <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                                            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                                                <ShoppingBag className="text-primary/70 w-8 h-8" />
                                            </div>
                                            <h3 className="text-lg font-serif mb-2 text-[#1A1A1A]">Your Cart is Empty</h3>
                                            <p className="text-gray-500 text-xs max-w-xs font-light leading-relaxed mb-8">
                                                Discover our exclusive royal collection and start adding long-lasting perfumes to your boutique order.
                                            </p>
                                            <button
                                                onClick={handleClose}
                                                className="btn-primary !py-2.5 !px-8 text-xs tracking-widest cursor-pointer"
                                            >
                                                EXPLORE COLLECTION
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-6 flex-1">
                                            {cart.map((item) => (
                                                <motion.div
                                                    key={item.id}
                                                    layout
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, x: -50 }}
                                                    className="flex gap-4 border-b border-gray-100 pb-4 group"
                                                >
                                                    {/* Image Thumbnail */}
                                                    <div className="w-20 h-24 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0 relative">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Details */}
                                                    <div className="flex-1 flex flex-col justify-between">
                                                        <div>
                                                            <div className="flex justify-between items-start">
                                                                <h4 className="text-sm font-serif text-[#1A1A1A] font-bold leading-tight">{item.name}</h4>
                                                                <button
                                                                    onClick={() => removeFromCart(item.id)}
                                                                    className="text-gray-400 hover:text-primary transition-colors ml-2"
                                                                >
                                                                    <Trash2 size={15} />
                                                                </button>
                                                            </div>
                                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-0.5">{item.category}</p>
                                                        </div>

                                                        {/* Quantity controls & Price */}
                                                        <div className="flex justify-between items-end mt-2">
                                                            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 transition-colors"
                                                                >
                                                                    <Minus size={12} />
                                                                </button>
                                                                <span className="px-3 text-xs font-semibold text-[#1A1A1A] min-w-[20px] text-center">
                                                                    {item.quantity}
                                                                </span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 transition-colors"
                                                                >
                                                                    <Plus size={12} />
                                                                </button>
                                                            </div>
                                                            <span className="text-sm font-bold text-primary">{item.price}</span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {view === 'checkout' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <button
                                        onClick={() => setView('cart')}
                                        className="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-primary transition-colors mb-4 uppercase tracking-wider"
                                    >
                                        <ArrowLeft size={14} /> Back to Cart
                                    </button>

                                    <h3 className="text-lg font-serif border-b border-gray-100 pb-2 text-[#1A1A1A]">Checkout Information</h3>
                                    
                                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your name"
                                                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 ${formErrors.name ? 'border-primary/50 focus:ring-primary' : 'border-gray-200 focus:ring-primary focus:border-primary'}`}
                                            />
                                            {formErrors.name && <p className="text-[10px] text-primary font-medium mt-1">{formErrors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">WhatsApp Mobile Number *</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="e.g. 03318962777"
                                                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 ${formErrors.phone ? 'border-primary/50 focus:ring-primary' : 'border-gray-200 focus:ring-primary focus:border-primary'}`}
                                            />
                                            {formErrors.phone && <p className="text-[10px] text-primary font-medium mt-1">{formErrors.phone}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">Shipping Address *</label>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="House #, Street #, Sector / Area"
                                                rows={3}
                                                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 ${formErrors.address ? 'border-primary/50 focus:ring-primary' : 'border-gray-200 focus:ring-primary focus:border-primary'}`}
                                            />
                                            {formErrors.address && <p className="text-[10px] text-primary font-medium mt-1">{formErrors.address}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">City *</label>
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                                            >
                                                <option value="Islamabad">Islamabad</option>
                                                <option value="Rawalpindi">Rawalpindi</option>
                                                <option value="Lahore">Lahore</option>
                                                <option value="Karachi">Karachi</option>
                                                <option value="Peshawar">Peshawar</option>
                                                <option value="Faisalabad">Faisalabad</option>
                                                <option value="Multan">Multan</option>
                                                <option value="Sialkot">Sialkot</option>
                                                <option value="Quetta">Quetta</option>
                                                <option value="Gujranwala">Gujranwala</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full btn-primary !py-3.5 mt-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" /> PLACING ORDER...
                                                </>
                                            ) : (
                                                'CONFIRM & CHECKOUT VIA WHATSAPP'
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {view === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col justify-center items-center text-center p-4"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle className="text-emerald-500 w-12 h-12" />
                                    </motion.div>

                                    <h3 className="text-2xl font-serif mb-2 text-[#1A1A1A]">Order Placed!</h3>
                                    
                                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 my-4 w-full max-w-sm">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Order Reference ID</p>
                                        <p className="text-xl font-mono text-primary font-bold mt-1">{orderRef}</p>
                                    </div>

                                    <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-6">
                                        Your order has been logged! If you were not automatically redirected, please click the button below to send your confirmation to our team.
                                    </p>

                                    <a
                                        href={whatsappUrl}
                                        className="w-full bg-[#25D366] text-white py-3.5 rounded-sm font-semibold text-xs tracking-widest uppercase hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg mb-4 text-center"
                                    >
                                        Send to WhatsApp
                                    </a>

                                    <button
                                        onClick={handleContinueShopping}
                                        className="text-xs font-bold text-gray-500 hover:text-primary tracking-widest uppercase transition-colors py-2 cursor-pointer"
                                    >
                                        Continue Shopping
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer (only visible when cart has items and not on success screen) */}
                        {cart.length > 0 && view !== 'success' && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                                        <span>Subtotal</span>
                                        <span>{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                                        <span>Delivery Charges</span>
                                        <span>{deliveryCharges}</span>
                                    </div>
                                    <div className="border-t border-gray-200/60 my-2 pt-2 flex justify-between text-base font-bold text-[#1A1A1A]">
                                        <span>Total Amount</span>
                                        <span className="text-primary">{total}</span>
                                    </div>
                                </div>

                                {view === 'cart' && (
                                    <button
                                        onClick={() => setView('checkout')}
                                        className="w-full btn-primary !py-3.5 text-xs font-bold uppercase tracking-widest text-center shadow-lg cursor-pointer"
                                    >
                                        PROCEED TO CHECKOUT
                                    </button>
                                )}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    // Persistent cart state using localStorage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('royal_oud_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        localStorage.setItem('royal_oud_cart', JSON.stringify(cart));
    }, [cart]);

    // Parse price string (e.g. "Rs. 4,500" -> 4500)
    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        const cleanStr = priceStr.replace(/Rs\./gi, '').replace(/,/g, '').trim();
        return parseFloat(cleanStr) || 0;
    };

    // Format price to string (e.g. 4500 -> "Rs. 4,500")
    const formatPrice = (amount) => {
        return `Rs. ${amount.toLocaleString()}`;
    };

    // Add item to cart and trigger animated toast notification
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });

        // Trigger custom toast notification
        const toastId = Date.now();
        setToasts((prevToasts) => [
            ...prevToasts,
            { id: toastId, name: product.name, image: product.image },
        ]);

        // Auto-dismiss toast after 3 seconds
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toastId));
        }, 3000);
    };

    // Remove item from cart completely
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Update quantity of an item
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
    };

    // Calculate totals
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    const subtotal = cart.reduce((total, item) => {
        return total + parsePrice(item.price) * item.quantity;
    }, 0);

    const deliveryCharges = 200; // Flat standard shipping in Pakistan
    const total = subtotal > 0 ? subtotal + deliveryCharges : 0;

    // Checkout process: Save lead to Supabase & generate WhatsApp url
    const checkoutOrder = async (customerDetails) => {
        try {
            // 1. Generate Order ID: RO-XXXXX (where XXXXX is random 5 digits)
            const orderId = `RO-${Math.floor(10000 + Math.random() * 90000)}`;

            // 2. Format product details for Supabase schema
            const productNamesSummary = cart
                .map((item) => `${item.name} (x${item.quantity})`)
                .join(', ');

            // 3. Save to Supabase (Leads table)
            // Save order detail + customer info in product_name to maximize utility without modifying columns
            const extendedSummary = `${productNamesSummary} | Customer: ${customerDetails.name} (${customerDetails.phone}) | Address: ${customerDetails.address}, ${customerDetails.city}`;

            const { error: dbError } = await supabase.from('leads').insert([
                {
                    order_id: orderId,
                    product_name: extendedSummary,
                    price: formatPrice(total),
                },
            ]);

            if (dbError) throw dbError;

            // 4. Construct WhatsApp Message
            const itemLines = cart
                .map((item) => `- *${item.name}* (Qty: ${item.quantity}) @ ${item.price}`)
                .join('\n');

            const whatsappText = `Hello! I would like to place an order:

*Order Reference:* ${orderId}

*Items Ordered:*
${itemLines}

*Subtotal:* ${formatPrice(subtotal)}
*Delivery Charges:* ${formatPrice(deliveryCharges)}
*Total Amount:* ${formatPrice(total)}

---
*Customer Details:*
- *Name:* ${customerDetails.name}
- *Phone:* ${customerDetails.phone}
- *Shipping Address:* ${customerDetails.address}
- *City:* ${customerDetails.city}

Please confirm my order and let me know the payment details. Thank you!`;

            const encodedText = encodeURIComponent(whatsappText);
            // Default WhatsApp number: 923318962777
            const whatsappUrl = `https://wa.me/923318962777?text=${encodedText}`;

            return { success: true, orderId, whatsappUrl };
        } catch (error) {
            console.error('Checkout error:', error.message);
            return { success: false, error: error.message };
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                isCartOpen,
                toasts,
                setIsCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                subtotal: formatPrice(subtotal),
                deliveryCharges: formatPrice(deliveryCharges),
                total: formatPrice(total),
                checkoutOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

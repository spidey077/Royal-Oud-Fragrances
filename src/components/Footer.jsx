import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#F8F9FA] border-t border-gray-100 pt-32 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex flex-col items-start mb-8 group">
                            <span className="text-2xl font-serif text-primary tracking-[0.2em] font-bold leading-tight group-hover:scale-105 transition-transform origin-left">Royal Oud Fragrances</span>
                            <span className="text-[10px] tracking-[0.5em] uppercase text-gray-500 font-light">F-10 Markaz Islamabad</span>
                        </a>
                        <p className="text-gray-600 text-sm font-light leading-relaxed mb-10 max-w-xs">
                            Islamabad's premier boutique for long-lasting, luxury fragrances. Crafting signature scents for the discerning personality.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1"><Facebook size={22} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1"><Instagram size={22} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1"><Twitter size={22} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#1A1A1A] font-serif text-xl mb-8 border-b border-primary/20 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-5 text-gray-600 text-sm">
                            <li><a href="#home" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Our Story</a></li>
                            <li><a href="#collection" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Collection</a></li>
                            <li><a href="#gallery" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#1A1A1A] font-serif text-xl mb-8 border-b border-primary/20 pb-2 inline-block">Customer Care</h4>
                        <ul className="space-y-5 text-gray-600 text-sm">
                            <li><a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Contact Us</a></li>
                            <li><a href="https://wa.me/92510000000" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">WhatsApp Order</a></li>
                            <li><a href="#why-us" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Why Choose Us</a></li>
                            <li><a href="#reviews" className="hover:text-primary transition-colors flex items-center gap-2 font-medium uppercase tracking-widest text-[11px]">Reviews</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#1A1A1A] font-serif text-xl mb-8 border-b border-primary/20 pb-2 inline-block">Store Info</h4>
                        <div className="space-y-6">
                            <div className="text-gray-600 text-sm">
                                <p className="font-bold text-[#1A1A1A] mb-1 uppercase tracking-tighter">Location:</p>
                                <p>Suite 12, F-10 Markaz, Islamabad</p>
                            </div>
                            <div className="text-gray-600 text-sm">
                                <p className="font-bold text-[#1A1A1A] mb-1 uppercase tracking-tighter">Hours:</p>
                                <p className="text-primary italic">Open · Closes 11 PM</p>
                            </div>
                            <div className="text-gray-600 text-sm">
                                <p className="font-bold text-[#1A1A1A] mb-1 uppercase tracking-tighter">Phone:</p>
                                <p>051 0000000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-bold">
                        © 2026 Royal Oud Fragrances. ISLAMABAD.
                    </p>
                    <div className="flex items-center space-x-10">
                        <a href="#" className="text-gray-400 text-[10px] tracking-[0.2em] hover:text-[#1A1A1A] transition-colors uppercase font-bold">PRIVACY</a>
                        <a href="#" className="text-gray-400 text-[10px] tracking-[0.2em] hover:text-[#1A1A1A] transition-colors uppercase font-bold">TERMS</a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/92510000000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce group"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    stroke="currentColor"
                    strokeWidth="0"
                    fill="currentColor"
                    className="transform transition-transform group-hover:rotate-12"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </footer>
    );
};

export default Footer;

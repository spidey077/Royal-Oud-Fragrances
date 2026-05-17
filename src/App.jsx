import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Collection from './components/Collection'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'
import ToastContainer from './components/ToastContainer'

function App() {
  return (
    <CartProvider>
      <main id="home" className="min-h-screen bg-white text-[#1A1A1A]">
        <Navbar />
        <Hero />
        <About />
        <WhyChooseUs />
        <Collection />
        <Reviews />
        <Gallery />
        <Contact />
        <Footer />
        
        {/* Global Shopping Cart Drawer & Toast Notifications */}
        <CartDrawer />
        <ToastContainer />
      </main>
    </CartProvider>
  )
}

export default App

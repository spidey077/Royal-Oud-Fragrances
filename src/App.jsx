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

function App() {
  return (
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
    </main>
  )
}

export default App

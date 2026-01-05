import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Coach from './components/Coach';
import Programs from './components/Programs';
import Appointment from './components/Appointment';
import Achievements from './components/Achievements';
import Grandmasters from './components/Grandmasters';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';
import Courses from './components/Courses';
import { RevealOnScroll } from './components/RevealOnScroll';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Wait for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="font-body text-secondary bg-white overflow-x-hidden">
          <Navbar />

          <main>
            <Hero />
            <RevealOnScroll delay={0.2} variant="slide-right">
              <About />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="slide-left">
              <Founder />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="zoom-in">
              <Coach />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="fade-up">
              <Programs />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="flip-up">
              <Courses />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="slide-right">
              <Appointment />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="zoom-in">
              <Achievements />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="slide-left">
              <Grandmasters />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="fade-in">
              <Gallery />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="scale-up">
              <Testimonials />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="slide-right">
              <Events />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="slide-left">
              <Admissions />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} variant="zoom-in">
              <Contact />
            </RevealOnScroll>
          </main>

          <Footer />

          {/* AI Chatbot */}
          <Chatbot />

          {/* Persistent Floating WhatsApp Button */}
          <WhatsAppButton variant="float" />
        </div>
      )}
    </>
  );
};

export default App;
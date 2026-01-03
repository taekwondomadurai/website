import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="font-body text-secondary bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <About />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Founder />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Coach />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Programs />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Courses />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Appointment />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Achievements />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Grandmasters />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Gallery />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Events />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Admissions />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <Contact />
        </RevealOnScroll>
      </main>

      <Footer />

      {/* AI Chatbot */}
      <Chatbot />

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppButton variant="float" />
    </div>
  );
};

export default App;
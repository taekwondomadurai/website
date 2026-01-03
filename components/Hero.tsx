import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner.jpeg"
          alt="Taekwondo Action High Kick"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary px-3 py-1 text-sm font-bold uppercase tracking-wider mb-4 animate-fade-in-up">
            Taekwondo Sports Association of Madurai District
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-6 animate-fade-in-up delay-100">
            Discipline Strength <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Confidence</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300 mb-8 max-w-xl animate-fade-in-up delay-200">
            World-class Taekwondo training in Madurai for kids and adults.
            Build character, learn self-defense, and become a champion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <WhatsAppButton
              variant="primary"
              className="text-lg px-10 py-4 shadow-lg shadow-red-900/50"
              message="Hi, I am interested in learning more about your programs."
            >
              Chat with Coach
            </WhatsAppButton>
            <a
              href="#programs"
              className="inline-flex items-center justify-center font-semibold bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-3 px-8 rounded uppercase tracking-wide transition-all duration-200 transform active:scale-95 active:bg-gray-100 active:shadow-inner"
            >
              View Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
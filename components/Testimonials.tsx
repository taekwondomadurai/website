import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <SectionHeading title="Success Stories" subtitle="What Parents & Students Say" />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-lg relative">
              <Quote className="text-primary/20 absolute top-4 right-4" size={40} />
              <div className="flex text-yellow-500 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.content}"</p>
              <div className="mt-auto">
                <h4 className="font-heading font-bold text-lg">{t.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton variant="primary" message="I want to start my journey.">
            Start Your Journey
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
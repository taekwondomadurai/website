import React from 'react';
import SectionHeading from './SectionHeading';
import { CORE_VALUES } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import Affiliations from './Affiliations';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <SectionHeading title="About Us" subtitle="Building Champions Since 1980" alignment="center" />

          <p className="text-gray-600 mb-6 leading-relaxed">
            Taekwondo Madurai is a premier martial arts institution affiliated with the Taekwondo Association of Tamilnadu, India Taekwondo, and World Taekwondo. Under the guidance of Master Channa K. Nagaraj, we have been shaping the lives of students through the art of Taekwondo.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our mission goes beyond teaching kicks and punches. We strive to instill core values of respect, discipline, and perseverance in every student, whether they are a 5-year-old beginner or a competitive athlete.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded border-l-4 border-primary">
                <val.icon className="text-primary" size={24} />
                <span className="font-heading font-semibold uppercase">{val.label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <WhatsAppButton variant="secondary" message="Hi, I have some questions about Taekwondo Madurai.">
              Ask Questions
            </WhatsAppButton>
          </div>
        </div>

        {/* Affiliations Subsection */}
        <Affiliations />
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import SectionHeading from './SectionHeading';
import { PROGRAMS } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import { CheckCircle } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Programs" subtitle="Training For Every Age & Goal" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border-t-4 border-primary">
              <div className="p-8 flex-grow">
                <div className="inline-block bg-gray-100 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  {program.age}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-secondary">{program.title}</h3>
                <p className="text-primary font-medium mb-4">{program.targetAudience}</p>
                <p className="text-gray-600 mb-6 text-sm">{program.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto text-center">
                <WhatsAppButton 
                  variant="primary" 
                  className="w-full text-sm"
                  message={`Hi, I'm interested in the ${program.title} program. Can you share fee details?`}
                >
                  Inquire Fees & Timings
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
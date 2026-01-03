import React from 'react';
import SectionHeading from './SectionHeading';
import WhatsAppButton from './WhatsAppButton';
import { Award, Star, Globe } from 'lucide-react';

const Coach: React.FC = () => {
  return (
    <section id="coach" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Meet The Master" subtitle="Master Channa K. Nagaraj" light />

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/3 flex justify-center">
            {/* Coach Photo - Using a high quality stock image of an instructor */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary rounded-lg transform rotate-6 transition-transform group-hover:rotate-12"></div>
              <img
                src="/images/13.jpeg"
                alt="Master Channa K. Nagaraj"
                className="relative rounded-lg shadow-xl w-full max-w-sm object-cover h-[500px] border-4 border-zinc-800"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded text-center">
                <p className="font-heading text-xl text-primary font-bold">Black Belt</p>
                <p className="text-sm text-gray-300">International Referee</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-heading mb-4 text-primary">General Secretary, Taekwondo Sports Association of Madurai District</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              With years of dedicated practice and teaching, Master Nagaraj has trained hundreds of students to achieve their Black Belts and win medals at district, state, and international levels. His training philosophy balances traditional martial arts values with modern competitive techniques.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Globe className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">State Recognition</h4>
                  <p className="text-gray-400 text-sm">Affiliated with State Taekwondo Asia & India Taekwondo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Award className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Championship Mentality</h4>
                  <p className="text-gray-400 text-sm">Produced Gold Medalists in Malaysia Championship 2024.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Star className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Elite Guest Interactions</h4>
                  <p className="text-gray-400 text-sm">Hosted Grand Master Na Zih (9th Dan, UK) and Padma Shri Dr. Nachiyar.</p>
                </div>
              </div>
            </div>

            <WhatsAppButton variant="primary" message="Hi Master, I would like to book a demo class.">
              Book Demo Class
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
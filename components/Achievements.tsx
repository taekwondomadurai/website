import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { ACHIEVEMENTS } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import { Trophy, Medal, X } from 'lucide-react';

const Achievements: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!bgRef.current) return;

      // Use requestAnimationFrame for smoother performance during scroll
      rafId = requestAnimationFrame(() => {
        const element = bgRef.current;
        if (!element) return;

        const rect = element.parentElement?.getBoundingClientRect();
        if (!rect) return;

        const viewHeight = window.innerHeight;

        // Check if section is in viewport
        if (rect.top < viewHeight && rect.bottom > 0) {
          // Speed factor for parallax (0.15 is subtle)
          const speed = 0.15;
          // Calculate offset based on scroll position relative to viewport center
          const offset = (rect.top - viewHeight * 0.5) * speed;
          element.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="achievements" className="py-20 text-white relative overflow-hidden bg-zinc-900">
      {/* Parallax Background - Black Belt Detail */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-900/95 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Hall of Fame" subtitle="Celebrating Our Champions" light />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className={`relative bg-zinc-800/60 backdrop-blur-md rounded-lg p-6 border-b-4 ${item.highlight ? 'border-yellow-500' : 'border-zinc-600'} hover:transform hover:-translate-y-1 transition-all duration-300 shadow-xl`}
            >
              {item.highlight && (
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-black p-2 rounded-full shadow-lg animate-pulse-slow">
                  <Trophy size={20} />
                </div>
              )}
              <div className="mb-4 text-gray-400 font-mono text-sm">{item.date}</div>
              <h3 className={`font-heading text-xl font-bold mb-2 ${item.highlight ? 'text-yellow-500' : 'text-white'}`}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
              {!item.highlight && <Medal size={40} className="absolute bottom-4 right-4 text-zinc-600 opacity-20" />}
            </div>
          ))}
        </div>

        {/* Certificate Showcase Placeholder */}
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-md border border-white/10 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-heading mb-6">Recent Recognitions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Certificate Images */}
              {[
                "/images/1.jpeg",
                "/images/3.jpeg",
                "/images/5.jpeg"
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-32 h-44 bg-gray-200 rounded shadow-md transform hover:scale-105 active:scale-95 transition-transform duration-200 overflow-hidden relative group/cert cursor-pointer border border-white/20"
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xs opacity-0 group-hover/cert:opacity-100 transition-opacity text-white font-bold uppercase tracking-wider">View</div>
                  <img src={src} alt="Certificate" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <WhatsAppButton variant="primary" message="I want to join the champions team!">
                Join The Champions Team
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {
        selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Close recognition view"
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Full screen recognition"
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )
      }
    </section>
  );
};

export default Achievements;
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import WhatsAppButton from './WhatsAppButton';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
    "/images/17.jpeg",
    "/images/18.jpeg",
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Gallery" subtitle="Training in Action" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Taekwondo Madurai Event ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center pb-6">
                <span className="text-white font-medium tracking-wide uppercase px-6 py-2 border-t border-b border-white/30 backdrop-blur-sm">View Moment</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton variant="secondary" message="Can you share videos of the training sessions?">
            Watch Training Videos
          </WhatsAppButton>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery view"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
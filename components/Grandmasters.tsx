import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

const Grandmasters: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Explicitly list available images (gm13 does not exist, gm12 excluded by request)
    const images = [
        "/images/gm2.jpeg",
        "/images/gm3.jpeg",
        "/images/gm4.jpeg",
        "/images/gm5.jpeg",
        "/images/gm6.jpeg",
        "/images/gm7.jpeg",
        "/images/gm8.jpeg",
        "/images/gm9.jpeg",
        "/images/gm10.jpeg",
        "/images/gm11.jpeg",
        "/images/gm14.jpeg",
        "/images/gm15.jpeg",
        "/images/gm16.jpeg"
    ];

    return (
        <section id="grandmasters" className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4">
                <SectionHeading title="Grandmasters" subtitle="Our Legacy & Inspiration" />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="group relative h-64 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer bg-white"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Grandmaster ${idx + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium border border-white/50 px-4 py-1 rounded-full backdrop-blur-sm">View</span>
                            </div>
                        </div>
                    ))}
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
                        aria-label="Close view"
                    >
                        <X size={32} />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Grandmaster Full View"
                        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Grandmasters;

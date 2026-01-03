import React from 'react';
import SectionHeading from './SectionHeading';

const Founder: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <SectionHeading title="Leadership" subtitle="The Visionaries Behind Our Success" alignment="center" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
                    {/* Profile 1 */}
                    <div className="flex flex-col items-center max-w-sm">
                        <div className="relative mb-6 group w-64 h-72 shrink-0">
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-300"></div>
                            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 z-10">
                                <img
                                    src="/images/founder.jpeg"
                                    alt="Master Channa K. Nagaraj"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Master Channa K. Nagaraj</h3>
                        <p className="font-semibold text-primary mb-2">Founder & CEO</p>
                        <p className="text-gray-600 font-medium italic">
                            "Empowering lives through the discipline and spirit of Taekwondo."
                        </p>
                    </div>

                    {/* Profile 2 */}
                    <div className="flex flex-col items-center max-w-sm">
                        <div className="relative mb-6 group w-64 h-72 shrink-0">
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-300"></div>
                            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 z-10">
                                <img
                                    src="/images/director.jpeg"
                                    alt="Co-Founder"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Vasuki </h3>
                        <p className="font-semibold text-primary mb-2">Co-Founder & Director</p>
                        <p className="text-gray-600 font-medium italic">
                            "Building a stronger community through martial arts excellence."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;

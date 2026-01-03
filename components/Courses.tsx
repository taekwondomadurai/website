import React from 'react';
import SectionHeading from './SectionHeading';
import { COURSES } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

const Courses: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Specialized Courses"
                    subtitle="Expert Training & Certifications"
                />

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {COURSES.map((course, index) => (
                            <div
                                key={index}
                                className="flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm text-primary">
                                    {index % 2 === 0 ? <Award size={24} /> : <CheckCircle size={24} />}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-secondary mb-2">{course}</h3>
                                    <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;

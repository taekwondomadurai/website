import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { COURSES } from '../constants';
import { Award, CheckCircle, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const Courses: React.FC = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUpVariants}
                >
                    <SectionHeading
                        title="Specialized Courses"
                        subtitle="Expert Training & Certifications"
                    />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {COURSES.map((course, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    background: "linear-gradient(135deg, #ff4d4d 0%, #f9cb28 100%)",
                                    boxShadow: "0px 10px 30px rgba(255, 69, 0, 0.5)",
                                    borderColor: "transparent"
                                }}
                                className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer overflow-hidden relative group"
                            >
                                {/* Fire particles effect container (faded in by css/motion) - Simplistic approach */}
                                <motion.div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-overlay"></div>
                                </motion.div>

                                <motion.div
                                    className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm text-primary z-10"
                                    whileHover={{
                                        color: "#e63946",
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.2
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {index % 2 === 0 ? <Award size={24} /> : <CheckCircle size={24} />}
                                </motion.div>
                                <div className="z-10">
                                    <motion.h3
                                        className="font-bold text-lg text-secondary mb-2 group-hover:text-white transition-colors duration-300"
                                    >
                                        {course}
                                    </motion.h3>
                                    <motion.div
                                        className="h-1 w-12 bg-primary/20 rounded-full group-hover:bg-white/50 transition-colors duration-300"
                                        whileHover={{ width: "100%" }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Courses;

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { CORE_VALUES } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import Affiliations from './Affiliations';

const About: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const strikeInVariants = {
    hidden: { x: -50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400, // High stiffness for a "snap" / "strike" feel
        damping: 25
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <motion.div variants={fadeInUpVariants}>
            <SectionHeading title="About Us" subtitle="Building Champions Since 1980" alignment="center" />
          </motion.div>

          <motion.p
            variants={fadeInUpVariants}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            Taekwondo Madurai is a premier martial arts institution affiliated with the Taekwondo Association of Tamilnadu, India Taekwondo, and World Taekwondo. Under the guidance of Master Channa K. Nagaraj, we have been shaping the lives of students through the art of Taekwondo.
          </motion.p>
          <motion.p
            variants={fadeInUpVariants}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            Our mission goes beyond teaching kicks and punches. We strive to instill core values of respect, discipline, and perseverance in every student, whether they are a 5-year-old beginner or a competitive athlete.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto"
          >
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                variants={strikeInVariants}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded border-l-4 border-primary hover:bg-gray-100 transition-colors duration-300"
              >
                <val.icon className="text-primary" size={24} />
                <span className="font-heading font-semibold uppercase">{val.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUpVariants} className="flex justify-center">
            <WhatsAppButton variant="secondary" message="Hi, I have some questions about Taekwondo Madurai.">
              Ask Questions
            </WhatsAppButton>
          </motion.div>
        </motion.div>

        {/* Affiliations Subsection */}
        <Affiliations />
      </div>
    </section>
  );
};

export default About;
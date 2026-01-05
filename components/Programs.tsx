import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { PROGRAMS } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import { CheckCircle } from 'lucide-react';

const Programs: React.FC = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="programs" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <SectionHeading title="Our Programs" subtitle="Training For Every Age & Goal" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border-t-4 border-primary"
            >
              <div className="p-6 md:p-8 flex-grow">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
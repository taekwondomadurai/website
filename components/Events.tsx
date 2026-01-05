import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import WhatsAppButton from './WhatsAppButton';
import { Calendar } from 'lucide-react';

const Events: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="events" className="py-20 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <SectionHeading title="Events & News" subtitle="Upcoming Tournaments & Grading" light />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Main Feature Event */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleInVariants}
            className="bg-zinc-800 rounded-lg overflow-hidden md:w-2/3 border border-zinc-700 shadow-lg transition-transform hover:shadow-xl"
          >
            <img
              src="/images/1.jpeg"
              alt="Taekwondo Grading Event"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-primary font-bold mb-2">
                <Calendar size={18} className="mr-2" />
                <span>Upcoming Belt Grading</span>
              </div>
              <h3 className="text-2xl font-heading mb-4 text-white">162nd Color Belt Grading Ceremony</h3>
              <p className="text-gray-400 mb-6">
                Prepare for the next level! Our quarterly grading ceremony is approaching. All eligible students must register before the deadline.
              </p>
              <WhatsAppButton variant="primary" message="Hi, I want to register for the upcoming Belt Grading event.">
                Register via WhatsApp
              </WhatsAppButton>
            </div>
          </motion.div>

          {/* Side List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
            className="md:w-1/3 space-y-4"
          >
            <motion.h4 variants={fadeInUpVariants} className="font-heading text-xl border-b border-zinc-700 pb-2 mb-4">Recent Highlights</motion.h4>

            <motion.div variants={slideInRightVariants} className="bg-zinc-800 p-4 rounded hover:bg-zinc-700 transition-all duration-200 cursor-pointer transform active:scale-98 active:bg-zinc-600">
              <span className="text-xs text-gray-500">Sept 2023</span>
              <h5 className="font-bold text-lg mb-1">Self-Defense Workshop</h5>
              <p className="text-xs text-gray-400">Special training for women's safety.</p>
            </motion.div>

            <motion.div variants={slideInRightVariants} className="bg-zinc-800 p-4 rounded hover:bg-zinc-700 transition-all duration-200 cursor-pointer transform active:scale-98 active:bg-zinc-600">
              <span className="text-xs text-gray-500">Jan 2024</span>
              <h5 className="font-bold text-lg mb-1">District Championship</h5>
              <p className="text-xs text-gray-400">Madurai District Inter-Club meet.</p>
            </motion.div>

            <motion.div variants={slideInRightVariants} className="bg-zinc-800 p-4 rounded hover:bg-zinc-700 transition-all duration-200 cursor-pointer transform active:scale-98 active:bg-zinc-600">
              <span className="text-xs text-gray-500">Ongoing</span>
              <h5 className="font-bold text-lg mb-1">NCC Cadets Training</h5>
              <p className="text-xs text-gray-400">Specialized program for NCC girls.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
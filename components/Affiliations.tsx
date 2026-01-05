import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Affiliations: React.FC = () => {
  const affiliationsList = [
    { name: "Taekwondo Association Tamilnadu", code: "TAT", url: "#", image: "/images/tc.jpg" },
  ];

  const recognitionsList = [
    { name: "India Taekwondo", code: "IT", url: "https://www.indiataekwondo.com/", image: "/images/India_Taekwondo.png" },
    { name: "World Taekwondo Asia", code: "WTA", url: "http://www.wtasia.org/", image: "/images/WTA.jpg" },
    { name: "World Taekwondo", code: "WT", url: "http://www.worldtaekwondo.org/", image: "/images/wt.jpg" },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const renderOrgCard = (org: any, idx: number) => (
    <motion.a
      key={idx}
      href={org.url}
      target={org.url !== '#' ? "_blank" : "_self"}
      rel="noopener noreferrer"
      variants={itemVariants}
      className={`group flex flex-col items-center w-32 md:w-40 text-center ${org.url === '#' ? 'cursor-default' : 'cursor-pointer'}`}
      onClick={(e) => org.url === '#' && e.preventDefault()}
    >
      <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-4 mb-4 group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {org.url !== '#' && <ExternalLink size={12} className="text-primary" />}
        </div>
        <img
          src={org.image}
          alt={`${org.name} Logo`}
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="text-xs font-bold text-gray-600 uppercase tracking-wider leading-tight group-hover:text-primary transition-colors">
        {org.name}
      </span>
    </motion.a>
  );

  return (
    <div className="mt-16 pt-12 border-t border-gray-100">

      {/* Affiliations Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <motion.h3 variants={itemVariants} className="text-xl font-heading font-bold uppercase tracking-wide text-secondary mb-2">
            Affiliated To
          </motion.h3>
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
          {affiliationsList.map((org, idx) => renderOrgCard(org, idx))}
        </div>
      </motion.div>

      {/* Recognitions Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center mb-8">
          <motion.h3 variants={itemVariants} className="text-xl font-heading font-bold uppercase tracking-wide text-secondary mb-2">
            Recognized By
          </motion.h3>
          <motion.p variants={itemVariants} className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Leading Sports Bodies
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
          {recognitionsList.map((org, idx) => renderOrgCard(org, idx))}
        </div>
      </motion.div>

    </div>
  );
};

export default Affiliations;
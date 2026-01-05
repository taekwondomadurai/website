import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className="w-32 h-32 md:w-48 md:h-48 mb-4 sm:mb-8"
                >
                    <img
                        src="/images/logo.png"
                        alt="Taekwondo Madurai"
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </motion.div>

                {/* Animated Rings */}
                <motion.div
                    className="absolute inset-0 border-4 border-primary rounded-full"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
            </div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-1 bg-gray-200 rounded-full overflow-hidden"
            >
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-secondary font-heading font-bold text-xl tracking-widest uppercase"
            >
                Loading
            </motion.p>
        </motion.div>
    );
};

export default Preloader;

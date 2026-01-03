import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-heading text-4xl md:text-5xl font-bold uppercase mb-4 ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-20 bg-primary ${alignment === 'center' ? 'mx-auto' : ''} mb-4`}></div>
      )}
      {subtitle && (
        <p className={`text-lg md:text-xl ${light ? 'text-gray-300' : 'text-gray-600'} max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
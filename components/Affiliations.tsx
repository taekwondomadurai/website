import React from 'react';
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

  const renderOrgCard = (org: any, idx: number) => (
    <a
      key={idx}
      href={org.url}
      target={org.url !== '#' ? "_blank" : "_self"}
      rel="noopener noreferrer"
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
    </a>
  );

  return (
    <div className="mt-16 pt-12 border-t border-gray-100">

      {/* Affiliations Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-xl font-heading font-bold uppercase tracking-wide text-secondary mb-2">
            Affiliated To
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
          {affiliationsList.map((org, idx) => renderOrgCard(org, idx))}
        </div>
      </div>

      {/* Recognitions Section */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-xl font-heading font-bold uppercase tracking-wide text-secondary mb-2">
            Recognized By
          </h3>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Leading Sports Bodies
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
          {recognitionsList.map((org, idx) => renderOrgCard(org, idx))}
        </div>
      </div>

    </div>
  );
};

export default Affiliations;
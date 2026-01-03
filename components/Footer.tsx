import React from 'react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase mb-4">
              Taekwondo <span className="text-primary">Madurai</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students through the art of Taekwondo. Discipline, Strength, and Confidence for a better life.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-4 border-b border-zinc-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm block active:text-primary active:scale-95 origin-left">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Area */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase mb-4 border-b border-zinc-800 pb-2 inline-block">Join Now</h3>
            <p className="text-gray-400 text-sm mb-4">Start your training today. Contact Master Nagaraj.</p>
            <WhatsAppButton variant="secondary" className="w-full text-sm">
              Chat on WhatsApp
            </WhatsAppButton>
            <div className="mt-4 space-y-3">
              {CONTACT_INFO.locations.map((loc, index) => (
                <div key={index}>
                  <p className="text-xs font-semibold text-zinc-500 mb-1">{loc.name}</p>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Taekwondo Madurai. All Rights Reserved.</p>
          <p className="mt-1">Created by SKOLA TECH IT SERVICES & ZSOS IT SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
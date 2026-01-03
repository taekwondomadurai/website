import React from 'react';
import SectionHeading from './SectionHeading';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Us" subtitle="Visit Us or Get in Touch" />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Our Locations</h4>
                <div className="space-y-4">
                  {CONTACT_INFO.locations.map((loc, index) => (
                    <div key={index}>
                      <p className="font-semibold text-gray-800 text-sm">{loc.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{loc.address}</p>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary text-xs font-bold mt-1 inline-block hover:underline transition-transform duration-200 transform active:scale-95 origin-left active:text-red-800"
                      >
                        Get Directions
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Phone</h4>
                <p className="text-gray-600 text-sm mb-2">{CONTACT_INFO.displayPhone}</p>
                <WhatsAppButton variant="text" message="Hello, I found your number on the website.">
                  Message on WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 text-sm hover:text-primary transition-colors duration-200 active:text-red-800">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Hours</h4>
                <p className="text-gray-600 text-sm">Mon - Fri: 05:30 PM - 08:30 PM</p>
                <p className="text-gray-600 text-sm">Sat: 05:00 PM - 07:00 PM</p>
                <p className="text-gray-600 text-sm">Sun: 07:00 AM - 09:00 AM</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <iframe
              src={CONTACT_INFO.mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
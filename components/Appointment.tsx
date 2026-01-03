import React from 'react';
import SectionHeading from './SectionHeading';
import WhatsAppButton from './WhatsAppButton';
import { CalendarCheck, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Appointment: React.FC = () => {
   return (
      <section id="appointment" className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
               {/* Visual Side */}
               <div className="md:w-1/2 relative min-h-[300px]">
                  <img
                     src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=800&auto=format&fit=crop"
                     alt="Taekwondo Black Belt"
                     className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                     <CalendarCheck size={64} className="text-primary mb-6" />
                     <h3 className="text-3xl font-heading font-bold text-white uppercase mb-2">Book Your Visit</h3>
                     <p className="text-gray-300">Come and witness the discipline in action.</p>
                  </div>
               </div>

               {/* Content Side */}
               <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <SectionHeading title="Appointments" subtitle="Meet Master Nagaraj" alignment="left" />
                  <p className="text-gray-600 mb-8 leading-relaxed">
                     We believe in a personal approach. Schedule a free consultation visit to observe a training session, discuss your fitness goals, and understand our training methodology directly with the Master.
                  </p>

                  <div className="space-y-6 mb-8">
                     <div className="flex items-start gap-4">
                        <div className="bg-red-50 p-2 rounded text-primary">
                           <Clock size={20} />
                        </div>
                        <div>
                           <h4 className="font-heading font-bold text-secondary">Visiting Hours</h4>
                           <p className="text-sm text-gray-500">Mon - Fri: 05:30 PM - 08:00 PM</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="bg-red-50 p-2 rounded text-primary">
                           <MapPin size={20} />
                        </div>
                        <div>
                           <h4 className="font-heading font-bold text-secondary">Location</h4>
                           <p className="text-sm text-gray-500">{CONTACT_INFO.address.split(',')[2]}, Madurai</p>
                        </div>
                     </div>
                  </div>

                  <WhatsAppButton
                     variant="primary"
                     message="Hi Master, I would like to book an appointment to visit Taekwondo Madurai."
                     className="w-full justify-center py-4 text-lg shadow-lg shadow-red-100"
                  >
                     Book Appointment Now
                  </WhatsAppButton>
                  <p className="text-xs text-center text-gray-400 mt-4">
                     *No obligations. Free consultation.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Appointment;
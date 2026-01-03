import React from 'react';
import SectionHeading from './SectionHeading';
import { SCHEDULE } from '../constants';
import { Download, Clock } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Class Schedule" subtitle="Flexible Timings for Students & Professionals" />

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-secondary text-white p-6 flex justify-between items-center flex-wrap gap-4">
            <h3 className="font-heading text-2xl font-bold uppercase flex items-center gap-2">
              <Clock className="text-primary" /> Weekly Timetable
            </h3>
            <button className="flex items-center gap-2 text-sm bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded transition-all duration-200 transform active:scale-95 active:bg-zinc-800 active:shadow-inner">
              <Download size={16} /> Download PDF
            </button>
          </div>

          <div className="divide-y divide-gray-200">
            {SCHEDULE.map((dayItem, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <span className="font-bold text-xl text-primary font-heading uppercase">{dayItem.day}</span>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    {dayItem.slots.map((slot, sIdx) => (
                      <div key={sIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white border border-gray-100 p-3 rounded shadow-sm">
                        <div>
                          <p className="font-bold text-secondary">{slot.time}</p>
                          <p className="text-sm text-gray-500">{slot.batch}</p>
                        </div>
                        <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-gray-100 text-xs font-bold rounded text-gray-600 uppercase">
                          {slot.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 text-center">
            <p className="mb-4 text-gray-600">Not sure which batch fits you?</p>
            <WhatsAppButton variant="outline" message="Hi, I need help choosing a class batch.">
              Join Trial Class
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
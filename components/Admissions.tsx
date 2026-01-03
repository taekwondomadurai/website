import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Send } from 'lucide-react';
import { openWhatsApp } from './WhatsAppButton';

const Admissions: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    program: 'Kids Taekwondo',
    timing: 'Evening'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Admission Inquiry*\n\nName: ${form.name}\nAge: ${form.age}\nInterested In: ${form.program}\nPreferred Time: ${form.timing}\n\nPlease share more details.`;
    openWhatsApp(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="admission" className="py-20 bg-red-600 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

          <div className="md:w-1/2 p-10 bg-zinc-900 text-white flex flex-col justify-center">
            <h3 className="font-heading text-3xl font-bold mb-4">Join Taekwondo Madurai</h3>
            <p className="text-gray-300 mb-8">
              Ready to start your journey? Fill out this quick form and we will open a WhatsApp chat immediately to finalize your enrollment.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">✓ No hidden fees</li>
              <li className="flex items-center gap-2">✓ Free trial class available</li>
              <li className="flex items-center gap-2">✓ Direct contact with Coach</li>
            </ul>
          </div>

          <div className="md:w-1/2 p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Student Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  required
                  value={form.age}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Interested Program</label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none bg-white"
                >
                  <option>Kids Taekwondo (5-12)</option>
                  <option>Teens Training</option>
                  <option>Adult Self-Defense</option>
                  <option>Competition Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Timing</label>
                <select
                  name="timing"
                  value={form.timing}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none bg-white"
                >
                  <option>Morning (Sun)</option>
                  <option>Evening (Mon-Fri)</option>
                  <option>Weekend Special</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-all duration-200 transform active:scale-95 shadow-lg active:shadow-inner"
              >
                <Send size={20} /> Start WhatsApp Chat
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Admissions;
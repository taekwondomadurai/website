import React, { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles, RotateCcw } from 'lucide-react';
import { CONTACT_INFO, PROGRAMS, SCHEDULE, ACHIEVEMENTS, FAQS, COURSES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! I am the AI assistant for Taekwondo Madurai. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleReset = () => {
    setMessages([
      { role: 'model', text: "Namaste! I am the AI assistant for Taekwondo Madurai. How can I help you today?" }
    ]);
    setInput('');
    setIsTyping(false);
  };

  const generateResponse = (text: string): string => {
    const lowerText = text.toLowerCase();

    // 1. Greetings
    if (lowerText.match(/^(hi|hello|hey|namaste|greetings)/)) {
      return "Hello! Welcome to Taekwondo Madurai. How can I assist you with your martial arts journey?";
    }

    // 2. Check FAQs first (Exact or partial match)
    const matchedFaq = FAQS.find(f =>
      lowerText.includes(f.question.toLowerCase()) ||
      f.question.toLowerCase().includes(lowerText)
    );
    if (matchedFaq) return matchedFaq.answer;

    // 3. Programs / Classes
    if (lowerText.match(/(program|class|training|course|kid|adult|women|defen)/)) {
      if (lowerText.includes('kid')) {
        const kidProgram = PROGRAMS.find(p => p.id === 'kids');
        return kidProgram ? `${kidProgram.title}: ${kidProgram.description} (Age: ${kidProgram.age})` : "We have excellent programs for kids focusing on discipline and fitness.";
      }
      if (lowerText.includes('adult')) {
        const adultProgram = PROGRAMS.find(p => p.id === 'adults');
        return adultProgram ? `${adultProgram.title}: ${adultProgram.description} (Age: ${adultProgram.age})` : "Our adult programs focus on fitness and self-defense.";
      }
      return `We offer several programs: ${PROGRAMS.map(p => p.title).join(', ')}. Which one are you interested in?`;
    }

    // 4. Schedule / Timings
    if (lowerText.match(/(time|schedule|when|hour|batch|open|monday|sunday)/)) {
      return "Our classes run Monday to Friday (Kids: 5:30-7:30 PM, Adults: 7:30-8:30 PM). We also have weekend special classes. " + SCHEDULE.map(s => `${s.day}: ${s.slots.map(sl => sl.time).join(', ')}`).join('. ');
    }

    // 5. Fees / Cost
    if (lowerText.match(/(fee|cost|price|money|pay|charge)/)) {
      return "Our fee structure varies based on the program (Kids, Adults, Competition) and duration. For the most accurate and up-to-date pricing, please chat directly with Master Nagaraj via the WhatsApp button!";
    }

    // 6. Location / Contact
    if (lowerText.match(/(where|location|address|phone|contact|email|map|place)/)) {
      return `We are located at: ${CONTACT_INFO.address}. You can call us at ${CONTACT_INFO.displayPhone}.`;
    }

    // 7. Coach / Master
    if (lowerText.match(/(coach|master|teacher|nagaraj|instructor)/)) {
      return "Our Head Coach is Master Channa K. Nagaraj, an International Referee and Black Belt holder. He is the General Secretary of the Taekwondo Sports Association of Madurai District.";
    }

    // 8. Achievements
    if (lowerText.match(/(win|medal|award|achieve|trophyr|result)/)) {
      return `We are proud of our students! Highlights: ${ACHIEVEMENTS[0].title} - ${ACHIEVEMENTS[0].description}. We also won overall 2nd place at the NMS Sermathaivasan College tournament.`;
    }

    // Default Fallback
    return "I'm not sure about that specific detail. To get the best answer, I recommend using the WhatsApp button to chat directly with our coach!";
  };

  const handleSend = async (msgText?: string) => {
    const userMessage = msgText || input.trim();
    if (!userMessage) return;

    if (!msgText) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    // Simulate network delay for realism
    setTimeout(() => {
      const responseText = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const dragControls = useDragControls();

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 bottom-24 right-6 md:bottom-28 md:right-8 transition-all duration-300 hover:scale-110 active:scale-95 group ${isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <motion.div
          className="relative w-20 h-20 md:w-24 md:h-24 filter drop-shadow-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src="/images/taekwondo_avatar.png"
            alt="Taekwondo Avatar"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <span className="absolute top-1 right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
        </span>
      </button>

      {/* Chat Window */}
      <motion.div
        drag
        dragListener={false}
        dragControls={dragControls}
        dragMomentum={false}
        className={`fixed z-50 bottom-6 right-6 w-[90vw] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'}`}
        style={{ maxHeight: 'min(600px, 80vh)' }}
      >
        {/* Header */}
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="bg-zinc-900 p-4 flex justify-between items-center text-white cursor-move"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-1.5 rounded-full border border-white/10">
              <img
                src="/images/taekwondo_avatar.png"
                alt="AI"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold tracking-wide">AI Assistant</h3>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-gray-400 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
              title="Start New Chat"
            >
              <RotateCcw size={18} />
            </button>
            <button
              onPointerDown={(e) => e.stopPropagation()} // Prevent drag on close button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 min-h-[300px]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-none'
                    : 'bg-white text-zinc-800 border border-gray-200 rounded-bl-none'}`}
              >
                {msg.role === 'model' && (
                  <div className="flex items-center gap-1 mb-1 text-xs font-bold text-primary uppercase tracking-wider">
                    <Sparkles size={10} /> Taekwondo Madurai AI
                  </div>
                )}
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-primary" />
                <span className="text-xs text-gray-500">Thinking...</span>
              </div>
            </div>
          )}

          {/* Sugguested Questions Chips */}
          {messages.length === 1 && !isTyping && (
            <div className="mt-4 flex flex-wrap gap-2">
              {FAQS.slice(0, 4).map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(faq.question)}
                  className="text-xs bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-600 px-3 py-1.5 rounded-full transition-colors duration-200"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about classes, fees..."
              className="flex-1 bg-transparent focus:outline-none text-sm py-1"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className={`p-2 rounded-full transition-all duration-200
                ${input.trim() && !isTyping
                  ? 'bg-primary text-white hover:bg-red-700 shadow-md transform active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              <Send size={16} />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400">Automated Assistant</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Chatbot;
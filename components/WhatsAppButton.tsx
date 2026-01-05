import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'float' | 'primary' | 'secondary' | 'outline' | 'text';
  onClick?: () => void;
}

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${CONTACT_INFO.phone}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hi, I'm interested in joining Taekwondo Madurai.",
  className = "",
  children,
  variant = 'primary',
  onClick
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openWhatsApp(message);
    }
  };

  if (variant === 'float') {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-24 left-6 md:bottom-28 md:left-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 flex items-center gap-2 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
        <span className="font-bold hidden md:inline"></span>
      </button>
    );
  }

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 gap-2 transform active:scale-95 active:shadow-inner";

  const variants = {
    primary: "bg-primary hover:bg-red-700 text-white py-3 px-8 rounded uppercase tracking-wide shadow-md hover:shadow-lg",
    secondary: "bg-secondary hover:bg-black text-white py-3 px-8 rounded uppercase tracking-wide shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 px-6 rounded uppercase",
    text: "text-primary hover:underline active:scale-100 active:shadow-none", // Text variant usually doesn't need scale/shadow
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={variant === 'text' ? 18 : 20} />
      {children || "Chat on WhatsApp"}
    </button>
  );
};

export default WhatsAppButton;
'use client'

import { Clock } from 'lucide-react'

interface CalendlyButtonProps {
  text?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg'
}

export default function CalendlyButton({ 
  text = 'تنظیم وقت ملاقات', 
  className = '',
  variant = 'primary',
  size = 'md'
}: CalendlyButtonProps) {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mahmud-tehrani/30min-1',
        prefill: {},
        utm: {}
      });
    } else {
      // Fallback: open in new tab
      window.open('https://calendly.com/mahmud-tehrani/30min-1', '_blank');
    }
  };

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-white text-indigo-600 hover:bg-gray-100',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
    link: 'text-gray-400 hover:text-white transition-colors duration-300 bg-transparent hover:bg-transparent'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  // Override size classes for link variant
  const getSizeClasses = () => {
    if (variant === 'link') {
      return 'p-0 text-sm';
    }
    return sizeClasses[size];
  };

  return (
    <button
      onClick={openCalendly}
      className={`${baseClasses} ${variantClasses[variant]} ${getSizeClasses()} ${className}`}
    >
      <Clock className="w-5 h-5 ml-2" />
      {text}
    </button>
  );
}

import React from 'react';

const AmendeIcon = ({ className = "w-6 h-6 text-slate-900", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
    <circle cx="12" cy="12" r="3" strokeDasharray="1 1" stroke="red" />
    <line x1="10.5" y1="10.5" x2="13.5" y2="13.5" stroke="red" />
  </svg>
);

export default AmendeIcon;
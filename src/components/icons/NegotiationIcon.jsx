import React from 'react';

const NegotiationIcon = ({ className = "w-6 h-6 text-slate-900", ...props }) => (
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
    <path d="M18 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"></path>
    <path d="M14 9h6"></path>
    <path d="M14 13h4"></path>
    <path d="M14 17h2"></path>
    <path d="M22 22l-5-5"></path>
    <path d="M17 22l5-5"></path>
    <path d="M12 18.5l-3-1.5v-5l3-1.5l3 1.5v5l-3 1.5z"></path>
    <path d="M9 12l3-1.5l3 1.5"></path>
    <path d="M12 15.5V17"></path>
  </svg>
);

export default NegotiationIcon;
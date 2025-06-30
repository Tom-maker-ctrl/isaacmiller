import React from 'react';

const SuccessStoryCardTC = ({ title, description, tag, color }) => (
  <div className={`bg-gradient-to-r ${color} rounded-2xl p-8 text-white`}>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className={`${color.replace('from-', 'text-').replace('-500', '-100').replace('-600', '-100')} mb-4`}>
      {description}
    </p>
    <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
      {tag}
    </span>
  </div>
);

export default SuccessStoryCardTC;
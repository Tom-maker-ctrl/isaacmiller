import React from 'react';

const AlternativeCard = ({ alternative }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
    <h3 className="text-xl font-bold text-slate-900 mb-4">
      {alternative.name}
    </h3>
    <p className="text-slate-600 leading-relaxed mb-4">
      {alternative.description}
    </p>
    <div className="p-4 bg-green-50 rounded-xl">
      <p className="text-sm text-green-700 font-medium">
        <strong>Conditions:</strong> {alternative.conditions}
      </p>
    </div>
  </div>
);

export default AlternativeCard;
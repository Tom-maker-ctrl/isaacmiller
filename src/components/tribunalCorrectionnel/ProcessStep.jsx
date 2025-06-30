import React from 'react';

const ProcessStep = ({ phase, index, isLast }) => (
  <div className="relative">
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6">
          <span className="text-white font-bold">{index + 1}</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {phase.phase}
          </h3>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed">
        {phase.description}
      </p>
    </div>
    {!isLast && (
      <div className="flex justify-center my-4">
        <div className="w-0.5 h-8 bg-green-300"></div>
      </div>
    )}
  </div>
);

export default ProcessStep;
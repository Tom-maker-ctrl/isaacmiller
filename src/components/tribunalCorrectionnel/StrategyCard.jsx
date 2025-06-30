import React from 'react';

const StrategyCard = ({ strategy }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
      <strategy.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">
      {strategy.title}
    </h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {strategy.description}
    </p>
    {strategy.success && strategy.success.trim() !== '' && (
      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
        {/* Cette partie est maintenant conditionnelle et ne s'affichera pas si success est vide */}
      </div>
    )}
  </div>
);

export default StrategyCard;
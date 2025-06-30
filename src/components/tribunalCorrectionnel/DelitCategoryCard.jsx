import React from 'react';
import { CheckCircle } from 'lucide-react';

const DelitCategoryCard = ({ category }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
      <category.icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-6">
      {category.title}
    </h3>
    <div className="space-y-3">
      {category.items.map((item, idx) => (
        <div key={idx} className="flex items-center text-slate-700">
          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DelitCategoryCard;
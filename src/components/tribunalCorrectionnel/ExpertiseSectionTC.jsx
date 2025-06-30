import React from 'react';
import SectionTitle from '@/components/tribunalCorrectionnel/SectionTitle.jsx';
import { CheckCircle } from 'lucide-react';

const ExpertiseSectionTC = ({ expertiseSectionData }) => (
  <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
    <SectionTitle>{expertiseSectionData.title}</SectionTitle>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img className="w-full h-80 object-cover rounded-2xl shadow-lg" alt="Tribunal correctionnel en session" src="https://images.unsplash.com/photo-1618050987995-7a61e2bffb20" />
      </div>
      <div>
        <div className="space-y-4">
          {expertiseSectionData.items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {expertiseSectionData.philosophyTitle}
          </h3>
          <p className="text-slate-700 leading-relaxed">
            "{expertiseSectionData.philosophyQuote}"
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ExpertiseSectionTC;
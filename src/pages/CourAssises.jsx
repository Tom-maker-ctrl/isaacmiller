import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Users, FileText, Scale, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CourAssises = () => {
  const { t } = useTranslation();

  const specialties = [
    {
      title: t('expertise_assises.spec1_title'),
      description: t('expertise_assises.spec1_desc'),
      icon: Users
    },
    {
      title: t('expertise_assises.spec2_title'),
      description: t('expertise_assises.spec2_desc'),
      icon: FileText
    },
    {
      title: t('expertise_assises.spec3_title'),
      description: t('expertise_assises.spec3_desc'),
      icon: Scale
    }
  ];

  const process = [
    {
      phase: t('expertise_assises.process1_phase'),
      description: t('expertise_assises.process1_desc'),
      actions: [t('expertise_assises.process1_action1'), t('expertise_assises.process1_action2'), t('expertise_assises.process1_action3')]
    },
    {
      phase: t('expertise_assises.process2_phase'),
      description: t('expertise_assises.process2_desc'),
      actions: [t('expertise_assises.process2_action1'), t('expertise_assises.process2_action2'), t('expertise_assises.process2_action3')]
    },
    {
      phase: t('expertise_assises.process3_phase'),
      description: t('expertise_assises.process3_desc'),
      actions: [t('expertise_assises.process3_action1'), t('expertise_assises.process3_action2'), t('expertise_assises.process3_action3')]
    }
  ];

  const approach = [
    t('expertise_assises.approach_item1'),
    t('expertise_assises.approach_item2'),
    t('expertise_assises.approach_item3'),
    t('expertise_assises.approach_item4'),
    t('expertise_assises.approach_item5'),
    t('expertise_assises.approach_item6')
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-6">
            <Gavel className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('expertise_assises.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('expertise_assises.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('expertise_assises.specialization_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <specialty.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {specialty.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('expertise_assises.process_title')}
          </h2>
          
          <div className="space-y-8">
            {process.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {phase.phase}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phase.actions.map((action, idx) => (
                      <div key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < process.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-purple-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl p-12 shadow-xl mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('expertise_assises.approach_title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img className="w-full h-80 object-cover rounded-2xl shadow-lg" alt="Vidéo illustrative de la justice" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/200572312acea9a64bb4d2bde00266ef.gif" />
            </div>
            <div>
              <div className="space-y-4">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t('expertise_assises.pleading_art_title')}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  "{t('expertise_assises.pleading_art_quote')}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              {t('expertise_assises.cta_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('expertise_assises.cta_subtitle')}
            </p>
            <Link
              to="/reservation"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('expertise_assises.cta_button')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourAssises;
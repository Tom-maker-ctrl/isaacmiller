import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Car, FileText, Clock, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AmendeIcon from '@/components/icons/AmendeIcon.jsx';
import NegotiationIcon from '@/components/icons/NegotiationIcon.jsx';
import { useTranslation } from 'react-i18next';

const infractionsData = [
  {
    categoryKey: 'police_court.infractions.traffic.category',
    itemsKey: 'police_court.infractions.traffic.items',
    icon: Car,
    color: 'from-blue-500 to-blue-600'
  },
  {
    categoryKey: 'police_court.infractions.license.category',
    itemsKey: 'police_court.infractions.license.items',
    icon: FileText,
    color: 'from-green-500 to-green-600'
  },
  {
    categoryKey: 'police_court.infractions.contraventions.category',
    itemsKey: 'police_court.infractions.contraventions.items',
    icon: Scale,
    color: 'from-purple-500 to-purple-600'
  }
];

const servicesData = [
  {
    titleKey: 'police_court.services.fine_contestation.title',
    descriptionKey: 'police_court.services.fine_contestation.description',
    icon: AmendeIcon,
    iconColorClass: 'text-blue-700'
  },
  {
    titleKey: 'police_court.services.license_defense.title',
    descriptionKey: 'police_court.services.license_defense.description',
    icon: FileText, 
    iconColorClass: 'text-green-700'
  },
  {
    titleKey: 'police_court.services.penalty_negotiation.title',
    descriptionKey: 'police_court.services.penalty_negotiation.description',
    icon: NegotiationIcon,
    iconColorClass: 'text-purple-700'
  }
];

const procedureData = [
  {
    stepKey: 'police_court.procedure.pv_reception.step',
    descriptionKey: 'police_court.procedure.pv_reception.description',
    actionKey: 'police_court.procedure.pv_reception.action'
  },
  {
    stepKey: 'police_court.procedure.defense_strategy.step',
    descriptionKey: 'police_court.procedure.defense_strategy.description',
    actionKey: 'police_court.procedure.defense_strategy.action'
  },
  {
    stepKey: 'police_court.procedure.judicial_procedure.step',
    descriptionKey: 'police_court.procedure.judicial_procedure.description',
    actionKey: 'police_court.procedure.judicial_procedure.action'
  },
  {
    stepKey: 'police_court.procedure.case_follow_up.step',
    descriptionKey: 'police_court.procedure.case_follow_up.description',
    actionKey: 'police_court.procedure.case_follow_up.action'
  }
];

const TribunalPolice = () => {
  const { t } = useTranslation();

  const getArray = (data) => {
    if (Array.isArray(data)) return data;
    if (typeof data === 'object' && data !== null) return Object.values(data);
    return [];
  };

  const infractions = infractionsData.map(infraction => ({
    ...infraction,
    category: t(infraction.categoryKey),
    items: getArray(t(infraction.itemsKey, { returnObjects: true }))
  }));

  const services = servicesData.map(service => ({
    ...service,
    title: t(service.titleKey),
    description: t(service.descriptionKey)
  }));

  const procedure = procedureData.map((step, index) => ({
    step: (index + 1).toString(),
    title: t(step.stepKey),
    description: t(step.descriptionKey),
    action: t(step.actionKey)
  }));

  const advantages = getArray(t('police_court.advantages', { returnObjects: true }));

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('police_court.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('police_court.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-16 text-center"
        >
          <Clock className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">{t('police_court.free_consultation_title')}</h2>
          <p className="text-blue-100 mb-6">
            {t('police_court.free_consultation_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0471609463"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('police_court.free_call')}
            </a>
            <Link
              to="/reservation"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('header.book_appointment')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('police_court.infractions_title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {infractions.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {category.category}
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
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('police_court.specialized_services_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className={`w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-6 h-6 ${service.iconColorClass}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('police_court.treatment_procedure_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedure.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {step.action}
                    </span>
                  </div>
                </div>
                {index < procedure.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('police_court.why_choose_us_title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img className="w-full h-80 object-cover rounded-2xl shadow-lg" alt="Tribunal de police moderne" src="https://images.unsplash.com/photo-1618050987995-7a61e2bffb20" />
            </div>
            <div>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{advantage}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t('police_court.recognized_expertise_title')}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {t('police_court.recognized_expertise_quote')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">{t('police_court.statistics.response_time')}</div>
              <div className="text-slate-600">{t('police_court.statistics.response_time_label')}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">{t('police_court.statistics.free_consultation')}</div>
              <div className="text-slate-600">{t('police_court.statistics.free_consultation_label')}</div>
            </div>
             <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">{t('police_court.statistics.satisfaction')}</div>
              <div className="text-slate-600">{t('police_court.statistics.satisfaction_label')}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl font-bold mb-6">
              {t('police_court.pv_received_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('police_court.pv_received_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0471609463"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('police_court.free_consultation_button')}
              </a>
              <Link
                to="/reservation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
              >
                {t('header.book_appointment')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TribunalPolice;
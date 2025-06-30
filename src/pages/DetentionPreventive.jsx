import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, FileText, Phone, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DetentionPreventive = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('expertise_detention.service1_title'),
      description: t('expertise_detention.service1_desc'),
      icon: Shield,
      urgency: t('expertise_detention.service1_urgency')
    },
    {
      title: t('expertise_detention.service2_title'),
      description: t('expertise_detention.service2_desc'),
      icon: Scale,
      urgency: t('expertise_detention.service2_urgency')
    },
    {
      title: t('expertise_detention.service3_title'),
      description: t('expertise_detention.service3_desc'),
      icon: FileText,
      urgency: t('expertise_detention.service3_urgency')
    }
  ];

  const procedures = [
    {
      step: '1',
      title: t('expertise_detention.procedure1_title'),
      description: t('expertise_detention.procedure1_desc'),
      time: t('expertise_detention.procedure1_time')
    },
    {
      step: '2',
      title: t('expertise_detention.procedure2_title'),
      description: t('expertise_detention.procedure2_desc'),
      time: t('expertise_detention.procedure2_time')
    },
    {
      step: '3',
      title: t('expertise_detention.procedure3_title'),
      description: t('expertise_detention.procedure3_desc'),
      time: t('expertise_detention.procedure3_time')
    },
    {
      step: '4',
      title: t('expertise_detention.procedure4_title'),
      description: t('expertise_detention.procedure4_desc'),
      time: t('expertise_detention.procedure4_time')
    }
  ];

  const expertise = [
    t('expertise_detention.expertise_item1'),
    t('expertise_detention.expertise_item2'),
    t('expertise_detention.expertise_item3'),
    t('expertise_detention.expertise_item4')
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-red-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('expertise_detention.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('expertise_detention.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white mb-16 text-center"
        >
          <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">{t('expertise_detention.emergency_title')}</h2>
          <p className="text-red-100 mb-6">
            {t('expertise_detention.emergency_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0471609463"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('expertise_detention.emergency_phone_button')}
            </a>
            <Link
              to="/reservation"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-red-600 transition-colors"
            >
              {t('expertise_detention.emergency_appointment_button')}
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
            {t('expertise_detention.services_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    service.urgency === t('expertise_detention.service1_urgency') ? 'bg-red-100 text-red-700' :
                    service.urgency === t('expertise_detention.service2_urgency') ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {service.urgency}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
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
            {t('expertise_detention.procedure_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedures.map((procedure, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{procedure.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {procedure.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {procedure.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    <Clock className="w-4 h-4 mr-1" />
                    {procedure.time}
                  </div>
                </div>
                {index < procedures.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-300 transform -translate-y-1/2"></div>
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
            {t('expertise_detention.expertise_title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img   className="w-full h-80 object-cover rounded-2xl shadow-lg" alt="Avocat spécialisé en détention préventive" src="https://images.unsplash.com/photo-1565166461224-635b57552523" />
            </div>
            <div>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t('expertise_detention.quote_author')}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  "{t('expertise_detention.quote_text')}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              {t('expertise_detention.cta_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('expertise_detention.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0471609463"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('expertise_detention.cta_button_emergency')}
              </a>
              <Link
                to="/reservation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
              >
                {t('expertise_detention.cta_button_appointment')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetentionPreventive;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Shield, Gavel, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Domaine = () => {
  const { t } = useTranslation();

  const expertiseAreas = [
    {
      title: t('expertise_main.area1_title'),
      description: t('expertise_main.area1_desc'),
      icon: Shield,
      link: '/domaine/detention-preventive',
      iconColorClass: 'text-blue-700', 
      features: [t('expertise_main.area1_feature1'), t('expertise_main.area1_feature2'), t('expertise_main.area1_feature3')]
    },
    {
      title: t('expertise_main.area2_title'),
      description: t('expertise_main.area2_desc'),
      icon: Gavel,
      link: '/domaine/cour-assises',
      iconColorClass: 'text-blue-700', 
      features: [t('expertise_main.area2_feature1'), t('expertise_main.area2_feature2'), t('expertise_main.area2_feature3')]
    },
    {
      title: t('expertise_main.area3_title'),
      description: t('expertise_main.area3_desc'),
      icon: Scale,
      link: '/domaine/tribunal-police',
      iconColorClass: 'text-blue-700', 
      features: [t('expertise_main.area3_feature1'), t('expertise_main.area3_feature2'), t('expertise_main.area3_feature3')]
    },
    {
      title: t('expertise_main.area4_title'),
      description: t('expertise_main.area4_desc'),
      icon: Users,
      link: '/domaine/tribunal-correctionnel',
      iconColorClass: 'text-blue-700', 
      features: [t('expertise_main.area4_feature1'), t('expertise_main.area4_feature2'), t('expertise_main.area4_feature3')]
    }
  ];

  const approach = [
    {
      title: t('expertise_main.approach1_title'),
      description: t('expertise_main.approach1_desc')
    },
    {
      title: t('expertise_main.approach2_title'),
      description: t('expertise_main.approach2_desc')
    },
    {
      title: t('expertise_main.approach3_title'),
      description: t('expertise_main.approach3_desc')
    },
    {
      title: t('expertise_main.approach4_title'),
      description: t('expertise_main.approach4_desc')
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('expertise_main.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('expertise_main.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={area.link}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                  <div className={`w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className={`w-8 h-8 ${area.iconColorClass}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t('expertise_main.approach_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              {t('expertise_main.cta_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('expertise_main.cta_subtitle')}
            </p>
            <Link
              to="/reservation"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('expertise_main.cta_button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Domaine;
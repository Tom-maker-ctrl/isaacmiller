import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, FileText, Scale, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/tribunalCorrectionnel/SectionTitle.jsx';
import DelitCategoryCard from '@/components/tribunalCorrectionnel/DelitCategoryCard.jsx';
import StrategyCard from '@/components/tribunalCorrectionnel/StrategyCard.jsx';
import AlternativeCard from '@/components/tribunalCorrectionnel/AlternativeCard.jsx';
import ProcessStep from '@/components/tribunalCorrectionnel/ProcessStep.jsx';
import ExpertiseSectionTC from '@/components/tribunalCorrectionnel/ExpertiseSectionTC.jsx';
import { useTranslation } from 'react-i18next';

const TribunalCorrectionnel = () => {
  const { t } = useTranslation();

  const delitCategoriesData = [
    {
      title: t('expertise_correctionnel.offense_cat1_title'),
      items: [
        t('expertise_correctionnel.offense_cat1_item1'),
        t('expertise_correctionnel.offense_cat1_item2'),
        t('expertise_correctionnel.offense_cat1_item3'),
        t('expertise_correctionnel.offense_cat1_item4')
      ],
      icon: Users,
      color: 'from-red-500 to-red-600'
    },
    {
      title: t('expertise_correctionnel.offense_cat2_title'),
      items: [
        t('expertise_correctionnel.offense_cat2_item1'),
        t('expertise_correctionnel.offense_cat2_item2'),
        t('expertise_correctionnel.offense_cat2_item3'),
        t('expertise_correctionnel.offense_cat2_item4')
      ],
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('expertise_correctionnel.offense_cat3_title'),
      items: [
        t('expertise_correctionnel.offense_cat3_item1'),
        t('expertise_correctionnel.offense_cat3_item2'),
        t('expertise_correctionnel.offense_cat3_item3'),
        t('expertise_correctionnel.offense_cat3_item4')
      ],
      icon: Scale,
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('expertise_correctionnel.offense_cat4_title'),
      items: [
        t('expertise_correctionnel.offense_cat4_item1'),
        t('expertise_correctionnel.offense_cat4_item2'),
        t('expertise_correctionnel.offense_cat4_item3'),
        t('expertise_correctionnel.offense_cat4_item4')
      ],
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const strategiesData = [
    {
      title: t('expertise_correctionnel.strategy1_title'),
      description: t('expertise_correctionnel.strategy1_desc'),
      icon: Award
    },
    {
      title: t('expertise_correctionnel.strategy2_title'),
      description: t('expertise_correctionnel.strategy2_desc'),
      icon: FileText
    },
    {
      title: t('expertise_correctionnel.strategy3_title'),
      description: t('expertise_correctionnel.strategy3_desc'),
      icon: Shield
    }
  ];

  const alternativesData = [
    {
      name: t('expertise_correctionnel.alternative1_name'),
      description: t('expertise_correctionnel.alternative1_desc'),
      conditions: t('expertise_correctionnel.alternative1_conditions')
    },
    {
      name: t('expertise_correctionnel.alternative2_name'),
      description: t('expertise_correctionnel.alternative2_desc'),
      conditions: t('expertise_correctionnel.alternative2_conditions')
    },
    {
      name: t('expertise_correctionnel.alternative3_name'),
      description: t('expertise_correctionnel.alternative3_desc'),
      conditions: t('expertise_correctionnel.alternative3_conditions')
    },
    {
      name: t('expertise_correctionnel.alternative4_name'),
      description: t('expertise_correctionnel.alternative4_desc'),
      conditions: t('expertise_correctionnel.alternative4_conditions')
    }
  ];

  const processData = [
    {
      phase: t('expertise_correctionnel.procedure1_phase'),
      description: t('expertise_correctionnel.procedure1_desc')
    },
    {
      phase: t('expertise_correctionnel.procedure2_phase'),
      description: t('expertise_correctionnel.procedure2_desc')
    },
    {
      phase: t('expertise_correctionnel.procedure3_phase'),
      description: t('expertise_correctionnel.procedure3_desc')
    },
    {
      phase: t('expertise_correctionnel.procedure4_phase'),
      description: t('expertise_correctionnel.procedure4_desc')
    }
  ];

  const expertiseSectionData = {
    title: t('expertise_correctionnel.expertise_title'),
    philosophyTitle: t('expertise_correctionnel.philosophy_title'),
    philosophyQuote: t('expertise_correctionnel.philosophy_quote'),
    items: [
      t('expertise_correctionnel.expertise_item1'),
      t('expertise_correctionnel.expertise_item2'),
      t('expertise_correctionnel.expertise_item3'),
      t('expertise_correctionnel.expertise_item4'),
      t('expertise_correctionnel.expertise_item5')
    ]
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-green-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('expertise_correctionnel.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('expertise_correctionnel.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <SectionTitle>{t('expertise_correctionnel.offenses_title')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {delitCategoriesData.map((category, index) => (
              <DelitCategoryCard key={index} category={category} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <SectionTitle>{t('expertise_correctionnel.strategies_title')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategiesData.map((strategy, index) => (
              <StrategyCard key={index} strategy={strategy} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <SectionTitle>{t('expertise_correctionnel.alternatives_title')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alternativesData.map((alternative, index) => (
              <AlternativeCard key={index} alternative={alternative} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <SectionTitle>{t('expertise_correctionnel.procedure_title')}</SectionTitle>
          <div className="space-y-8">
            {processData.map((item, index) => (
              <ProcessStep key={index} phase={item} index={index} isLast={index === processData.length - 1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <ExpertiseSectionTC expertiseSectionData={expertiseSectionData} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              {t('expertise_correctionnel.cta_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('expertise_correctionnel.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0471609463"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('expertise_correctionnel.cta_button_emergency')}
              </a>
              <Link
                to="/reservation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
              >
                {t('expertise_correctionnel.cta_button_appointment')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TribunalCorrectionnel;
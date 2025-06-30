import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Newspaper, Camera, Video, ArrowRight } from 'lucide-react';
import AnimatedAdvocateScene from '@/components/AnimatedAdvocateScene.jsx';
import { useTranslation } from 'react-i18next';

const mediaCategoriesData = [
  {
    titleKey: 'media.categories.press.title',
    descriptionKey: 'media.categories.press.description',
    icon: Newspaper,
    link: '/medias/presse',
    iconColorClass: 'text-blue-700',
  },
  {
    titleKey: 'media.categories.photos.title',
    descriptionKey: 'media.categories.photos.description',
    icon: Camera,
    link: '/medias/photos',
    iconColorClass: 'text-blue-700',
  },
  {
    titleKey: 'media.categories.videos.title',
    descriptionKey: 'media.categories.videos.description',
    icon: Video,
    link: '/medias/videos',
    iconColorClass: 'text-blue-700',
  }
];

const recentHighlightsData = [
  {
    typeKey: 'media.featured_highlights.sudinfo_nivelles.type',
    titleKey: 'media.featured_highlights.sudinfo_nivelles.title',
    source: 'Sudinfo',
    date: '29 Mai 2024',
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/93462502fb5237a8a85a6185e1bbed9d.jpg",
    alt: 'Article Sudinfo sur le dealer de Nivelles',
    link: 'https://www.sudinfo.be/id841561/article/2024-05-29/le-dealer-de-cocaine-attitre-de-nivelles-mouhamadou-21-ans-alias-moha-pour-sa'
  },
  {
    typeKey: 'media.featured_highlights.rtl_marcinelle.type',
    titleKey: 'media.featured_highlights.rtl_marcinelle.title',
    source: 'RTL Info',
    date: '04 Juillet 2024',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40',
    alt: 'Reportage RTL Info sur l\'enfant séquestré à Marcinelle',
    link: '/medias/videos'
  },
  {
    typeKey: 'media.featured_highlights.dhnet_office.type',
    titleKey: 'media.featured_highlights.dhnet_office.title',
    source: 'DHnet',
    date: '07 Mars 2024',
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/a67cff5d-5256-450a-8724-54e03507ecf0/d3d5c3259f9bf7438ef45b96c9a01ffa.webp',
    alt: 'Article DHnet sur l\'Office des étrangers',
    link: 'https://www.dhnet.be/actu/faits/2024/03/07/loffice-des-etrangers-veut-les-expulser-la-justice-les-libere-les-dossiers-etaient-incomplets-NHWSA74H6JBZBFZL433CZL2GIE/'
  }
];

const Medias = () => {
  const { t } = useTranslation();

  const mediaCategories = mediaCategoriesData.map(category => ({
    ...category,
    title: t(category.titleKey),
    description: t(category.descriptionKey),
  }));

  const recentHighlights = recentHighlightsData.map(highlight => ({
    ...highlight,
    type: t(highlight.typeKey),
    title: t(highlight.titleKey),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            {t('media.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('media.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mediaCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={category.link}>
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex p-4 bg-slate-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.iconColorClass}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      {category.count}
                    </span>
                    <div className="flex items-center text-slate-700 group-hover:text-slate-800 transition-colors">
                      <span className="text-sm font-medium">{t('media.view_more')}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t('media.featured_title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('media.featured_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentHighlights.map((highlight, index) => (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group" 
              >
                <Link to={highlight.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img   
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={highlight.alt}
                      src={highlight.image} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {highlight.type}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-600">{highlight.source}</span>
                    <span className="text-sm text-slate-500">{highlight.date}</span>
                  </div>
                  
                  <Link to={highlight.link}>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight hover:underline">
                      {highlight.title}
                    </h3>
                  </Link>
                  
                  <Link to={highlight.link} className="flex items-center text-slate-700 hover:text-slate-800 transition-colors cursor-pointer">
                    <span className="text-sm font-medium">{t('media.read_more')}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl p-12 text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            {t('media.presence_title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-slate-200">{t('media.stats.appearances')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">40+</div>
              <div className="text-slate-200">{t('media.stats.publications')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-slate-200">{t('media.stats.conferences')}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full" 
        >
          <AnimatedAdvocateScene />
        </motion.div>

      </div>
    </div>
  );
};

export default Medias;